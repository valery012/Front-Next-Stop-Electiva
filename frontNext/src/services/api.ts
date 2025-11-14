/**
 * API de conexión a microservicios usando ENDPOINTS + httpClient.
 * Incluye métodos listos para usar en componentes.
 */

import { ENDPOINTS } from '../config/endpoints';
import { httpGet, httpPost, httpPut, httpDelete } from './httpClient';
import type {
  LoginResponse,
  RefreshTokenResponse,
  UserDTO,
  UpdateUserRequest,
  PlaceDTO,
  CreatePlaceRequest,
  UpdatePlaceRequest,
  NotificationDTO,
  ModerationActionResponse,
  DashboardStatsDTO,
  RequestDTO,
  RequestActionResponse,
} from '../types/dto';

// Bases
const AUTH_BASE = ENDPOINTS.AUTH;           // Si tu login vive en USERS, cambia a ENDPOINTS.USERS
const USERS_BASE = ENDPOINTS.USERS;
const PLACES_BASE = ENDPOINTS.PLACES;
const NOTIF_BASE = ENDPOINTS.NOTIFICATIONS;
const ADMIN_BASE = ENDPOINTS.MODERATION;    // Admin/Moderación
// Si tienes un micro dedicado de solicitudes, ajusta a ENDPOINTS.REQUESTS
const REQUESTS_BASE = ADMIN_BASE;

// ========== AUTH ==========
export async function apiLogin(email: string, password: string): Promise<LoginResponse> {
  return httpPost<LoginResponse>(`${AUTH_BASE}/api/v1/auth/login`, { email, password }, { useAuth: false });
}

export async function apiRefresh(refreshToken: string): Promise<RefreshTokenResponse> {
  return httpPost<RefreshTokenResponse>(
    `${AUTH_BASE}/api/v1/auth/refresh`,
    { refreshToken },
    { useAuth: false }
  );
}

export async function apiLogout(): Promise<void> {
  // Opcional: si tu backend tiene endpoint de logout
  try {
    await httpPost(`${AUTH_BASE}/api/v1/auth/logout`, {});
  } catch (_) {
    // Ignorar si no existe
  }
}

// ========== USERS ==========
export async function apiGetMyProfile(): Promise<UserDTO> {
  return httpGet<UserDTO>(`${USERS_BASE}/api/v1/users/me`);
}

export async function apiUpdateMyProfile(data: UpdateUserRequest): Promise<UserDTO> {
  return httpPut<UserDTO>(`${USERS_BASE}/api/v1/users/me`, data);
}

export async function apiGetUserById(id: string): Promise<UserDTO> {
  return httpGet<UserDTO>(`${USERS_BASE}/api/v1/users/${id}`);
}

export async function apiGetAllUsers(): Promise<UserDTO[]> {
  return httpGet<UserDTO[]>(`${USERS_BASE}/api/v1/users`);
}

// ========== PLACES ==========
export async function apiGetPlaces(params?: { category?: string; status?: 'pending' | 'approved' | 'rejected' }): Promise<PlaceDTO[]> {
  const queryParams = new URLSearchParams();
  if (params?.category) queryParams.append('category', params.category);
  if (params?.status) queryParams.append('status', params.status);
  const q = queryParams.toString();
  const url = `${PLACES_BASE}/api/v1/places${q ? `?${q}` : ''}`;
  return httpGet<PlaceDTO[]>(url);
}

export async function apiGetPlaceById(id: string): Promise<PlaceDTO> {
  return httpGet<PlaceDTO>(`${PLACES_BASE}/api/v1/places/${id}`);
}

export async function apiCreatePlace(data: CreatePlaceRequest): Promise<PlaceDTO> {
  // Normalmente crea en estado "pending"
  return httpPost<PlaceDTO>(`${PLACES_BASE}/api/v1/places`, data);
}

export async function apiUpdatePlace(id: string, data: UpdatePlaceRequest): Promise<PlaceDTO> {
  return httpPut<PlaceDTO>(`${PLACES_BASE}/api/v1/places/${id}`, data);
}

export async function apiDeletePlace(id: string): Promise<void> {
  return httpDelete<void>(`${PLACES_BASE}/api/v1/places/${id}`);
}

export async function apiGetMyPlaces(): Promise<PlaceDTO[]> {
  return httpGet<PlaceDTO[]>(`${PLACES_BASE}/api/v1/places/my`);
}

// ========== NOTIFICATIONS ==========
export async function apiGetMyNotifications(): Promise<NotificationDTO[]> {
  return httpGet<NotificationDTO[]>(`${NOTIF_BASE}/api/v1/notifications`);
}

export async function apiMarkNotificationRead(id: string): Promise<void> {
  return httpPost<void>(`${NOTIF_BASE}/api/v1/notifications/${id}/read`);
}

export async function apiMarkAllNotificationsRead(): Promise<void> {
  return httpPost<void>(`${NOTIF_BASE}/api/v1/notifications/read-all`);
}

// ========== ADMIN / MODERATION ==========
export async function apiGetPendingPlaces(): Promise<PlaceDTO[]> {
  return httpGet<PlaceDTO[]>(`${ADMIN_BASE}/api/v1/moderation/pending`);
}

export async function apiModeratePlace(placeId: string, action: 'approve' | 'reject', reason?: string): Promise<ModerationActionResponse> {
  return httpPost<ModerationActionResponse>(`${ADMIN_BASE}/api/v1/moderation/action`, { placeId, action, reason });
}

export async function apiGetDashboardStats(): Promise<DashboardStatsDTO> {
  return httpGet<DashboardStatsDTO>(`${ADMIN_BASE}/api/v1/moderation/stats`);
}

// ========== REQUESTS / SOLICITUDES ==========
export async function apiGetMyRequests(): Promise<RequestDTO[]> {
  return httpGet<RequestDTO[]>(`${REQUESTS_BASE}/api/v1/requests/my`);
}

export async function apiGetAllRequests(): Promise<RequestDTO[]> {
  return httpGet<RequestDTO[]>(`${REQUESTS_BASE}/api/v1/requests`);
}

export async function apiGetPendingRequests(): Promise<RequestDTO[]> {
  return httpGet<RequestDTO[]>(`${REQUESTS_BASE}/api/v1/requests/pending`);
}

export async function apiApproveRequest(requestId: string, reason?: string): Promise<RequestActionResponse> {
  return httpPost<RequestActionResponse>(`${REQUESTS_BASE}/api/v1/requests/${requestId}/approve`, { reason });
}

export async function apiRejectRequest(requestId: string, reason?: string): Promise<RequestActionResponse> {
  return httpPost<RequestActionResponse>(`${REQUESTS_BASE}/api/v1/requests/${requestId}/reject`, { reason });
}
