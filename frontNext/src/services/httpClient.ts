/**
 * Cliente HTTP centralizado para llamadas a microservicios.
 * Maneja autenticación, timeouts, errores y retry básico.
 */

const DEFAULT_TIMEOUT = 15000; // 15 segundos

export interface HttpOptions extends RequestInit {
  timeout?: number;
  useAuth?: boolean; // Si true, agrega token de Authorization
}

export class ApiError extends Error {
  status: number;
  data?: any;

  constructor(
    message: string,
    status: number,
    data?: any
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Función principal para hacer peticiones HTTP.
 * 
 * @param url - URL completa (incluye base del microservicio)
 * @param options - Opciones de fetch + timeout y useAuth
 * @returns Promesa con los datos parseados
 * 
 * @example
 * const data = await http<PlaceDTO[]>(`${ENDPOINTS.PLACES}/api/v1/places`);
 */
export async function http<T>(
  url: string,
  options: HttpOptions = {}
): Promise<T> {
  const {
    timeout = DEFAULT_TIMEOUT,
    useAuth = true,
    headers = {},
    ...fetchOptions
  } = options;

  // Timeout con AbortController
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    // Headers base
    const finalHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(headers as Record<string, string>),
    };

    // Si useAuth, añade token del localStorage
    if (useAuth) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        finalHeaders['Authorization'] = `Bearer ${token}`;
      }
    }

    const response = await fetch(url, {
      ...fetchOptions,
      headers: finalHeaders,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Parse del body (puede ser JSON o texto)
    let data: any;
    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    // Si no es 2xx, lanzar error
    if (!response.ok) {
      throw new ApiError(
        data?.message || `HTTP ${response.status}: ${response.statusText}`,
        response.status,
        data
      );
    }

    return data as T;
  } catch (error: any) {
    clearTimeout(timeoutId);

    // Errores de red o timeout
    if (error.name === 'AbortError') {
      throw new ApiError('Request timeout', 408);
    }
    if (error instanceof ApiError) {
      throw error;
    }
    // Error de red genérico
    throw new ApiError(
      error.message || 'Network error',
      0,
      error
    );
  }
}

/**
 * Helper para peticiones GET.
 */
export async function httpGet<T>(url: string, options?: HttpOptions): Promise<T> {
  return http<T>(url, { ...options, method: 'GET' });
}

/**
 * Helper para peticiones POST.
 */
export async function httpPost<T>(
  url: string,
  body?: any,
  options?: HttpOptions
): Promise<T> {
  return http<T>(url, {
    ...options,
    method: 'POST',
    body: body ? JSON.stringify(body) : undefined,
  });
}

/**
 * Helper para peticiones PUT.
 */
export async function httpPut<T>(
  url: string,
  body?: any,
  options?: HttpOptions
): Promise<T> {
  return http<T>(url, {
    ...options,
    method: 'PUT',
    body: body ? JSON.stringify(body) : undefined,
  });
}

/**
 * Helper para peticiones DELETE.
 */
export async function httpDelete<T>(url: string, options?: HttpOptions): Promise<T> {
  return http<T>(url, { ...options, method: 'DELETE' });
}
