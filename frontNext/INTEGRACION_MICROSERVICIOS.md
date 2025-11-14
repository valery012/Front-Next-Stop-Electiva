# Integración con Microservicios

Este documento explica cómo conectar el frontend con los 5 microservicios del proyecto.

## 📋 Arquitectura

El frontend se conecta directamente a 5 microservicios independientes:

1. **Auth Service** - Autenticación y tokens
2. **Users Service** - Gestión de usuarios
3. **Places Service** - CRUD de lugares
4. **Notifications Service** - Notificaciones de usuario
5. **Moderation Service** - Aprobación/rechazo de lugares

## ⚙️ Configuración

### 1. Variables de entorno

Copia `.env.example` a `.env` y ajusta las URLs:

```bash
cp .env.example .env
```

Edita `.env` con las URLs reales de tus microservicios:

```env
VITE_API_AUTH_URL=http://localhost:8001
VITE_API_USERS_URL=http://localhost:8002
VITE_API_PLACES_URL=http://localhost:8003
VITE_API_NOTIFICATIONS_URL=http://localhost:8004
VITE_API_MODERATION_URL=http://localhost:8005
```

### 2. CORS en los microservicios

Cada microservicio debe permitir el origen del frontend. Ejemplo en Spring Boot:

```java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOrigins("http://localhost:5173", "http://localhost:5174")
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                    .allowedHeaders("*")
                    .allowCredentials(true);
            }
        };
    }
}
```

## 🗂️ Estructura de archivos creados

```
src/
├── config/
│   └── endpoints.ts          # Configuración de URLs base
├── services/
│   ├── httpClient.ts          # Cliente HTTP con auth y manejo de errores
│   ├── authService.ts         # Login, logout, refresh token
│   ├── usersService.ts        # Operaciones con usuarios
│   ├── placesService.ts       # CRUD de lugares
│   ├── notificationsService.ts # Notificaciones
│   └── moderationService.ts   # Moderación de lugares
└── types/
    └── dto.ts                 # Tipos/contratos de API
```

## 🔧 Uso de los servicios

### Ejemplo: Login

```typescript
import { login } from '@/services/authService';

try {
  const response = await login({
    email: 'user@example.com',
    password: 'password123'
  });
  
  console.log('Usuario:', response.user);
  // El token se guarda automáticamente en localStorage
} catch (error) {
  console.error('Error en login:', error.message);
}
```

### Ejemplo: Obtener lugares

```typescript
import { getPlaces } from '@/services/placesService';

try {
  const places = await getPlaces({ 
    status: 'approved',
    category: 'restaurant'
  });
  
  console.log('Lugares:', places);
} catch (error) {
  console.error('Error al obtener lugares:', error.message);
}
```

### Ejemplo: Moderar lugar

```typescript
import { moderatePlace } from '@/services/moderationService';

try {
  await moderatePlace({
    placeId: '123',
    action: 'approve',
    reason: 'Cumple con los requisitos'
  });
  
  console.log('Lugar aprobado');
} catch (error) {
  console.error('Error en moderación:', error.message);
}
```

## 🔐 Autenticación

El sistema usa JWT Bearer tokens:

1. El login guarda `accessToken` y opcionalmente `refreshToken` en `localStorage`
2. Todas las peticiones incluyen automáticamente `Authorization: Bearer <token>`
3. Si el token expira, usa `refreshAccessToken()` para renovarlo

### Deshabilitar auth en una petición

```typescript
import { httpGet } from '@/services/httpClient';

// Sin autenticación (útil para endpoints públicos)
const data = await httpGet('/public/data', { useAuth: false });
```

## 📝 Ajustar contratos (DTOs)

Los tipos en `src/types/dto.ts` son plantillas. **Ajústalos según las respuestas reales de tu backend**.

Ejemplo: Si tu backend devuelve campos adicionales:

```typescript
// Antes
export interface PlaceDTO {
  id: string;
  name: string;
  category: string;
}

// Después (añadir campos según tu API)
export interface PlaceDTO {
  id: string;
  name: string;
  category: string;
  tags: string[];           // ← Nuevo
  averagePrice?: number;    // ← Nuevo
}
```

## 🚀 Endpoints esperados

Cada servicio debe implementar estos endpoints (ajusta paths según tu backend):

### Auth Service (`/api/v1/auth`)
- `POST /login` - Login de usuario
- `POST /refresh` - Renovar access token
- `POST /logout` (opcional) - Logout

### Users Service (`/api/v1/users`)
- `GET /me` - Perfil del usuario actual
- `PUT /me` - Actualizar perfil
- `GET /{id}` - Usuario por ID
- `GET /` - Listar usuarios (admin)

### Places Service (`/api/v1/places`)
- `GET /` - Listar lugares (con query params: ?category=X&status=Y)
- `GET /{id}` - Lugar por ID
- `POST /` - Crear lugar
- `PUT /{id}` - Actualizar lugar
- `DELETE /{id}` - Eliminar lugar
- `GET /my` - Lugares del usuario actual

### Notifications Service (`/api/v1/notifications`)
- `GET /` - Notificaciones del usuario
- `POST /{id}/read` - Marcar como leída
- `POST /read-all` - Marcar todas como leídas

### Moderation Service (`/api/v1/moderation`)
- `GET /pending` - Lugares pendientes
- `POST /action` - Aprobar/rechazar lugar
- `GET /stats` - Estadísticas del dashboard

## 🐛 Debugging

### Ver peticiones en consola

Abre DevTools → Network tab para ver:
- Headers: verifica que `Authorization` esté presente
- Response: revisa errores del backend
- Status: 401 = token inválido, 403 = sin permisos, 404 = endpoint no existe

### Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| `CORS error` | Backend no permite el origen | Configura CORS en microservicio |
| `Variable de entorno ... no está definida` | Falta URL en `.env` | Añade la variable |
| `HTTP 401` | Token expirado o inválido | Llama `refreshAccessToken()` |
| `HTTP 404` | Endpoint no existe | Verifica path en microservicio |
| `Network error` | Microservicio no corre | Inicia el servicio |

## ✅ Checklist de integración

- [ ] Copiar `.env.example` a `.env` y configurar URLs
- [ ] Asegurar que los 5 microservicios estén corriendo
- [ ] Configurar CORS en cada microservicio
- [ ] Ajustar DTOs en `dto.ts` según respuestas reales
- [ ] Probar login y verificar token en localStorage
- [ ] Probar endpoints principales (lugares, usuarios, etc.)
- [ ] Verificar manejo de errores (desconectar un servicio y ver qué pasa)

## 🎯 Siguiente paso

Integra los servicios en tu `App.tsx`:

```typescript
import { login } from './services/authService';
import { getPlaces } from './services/placesService';

// Reemplaza localStorage mock por llamadas reales:
const handleLogin = async (email: string, password: string) => {
  try {
    const response = await login({ email, password });
    setCurrentUser(response.user);
    setCurrentPage('home');
  } catch (error) {
    alert('Error: ' + error.message);
  }
};
```

---

**¿Dudas?** Revisa los comentarios en cada archivo de servicio o pregunta a tu equipo.
