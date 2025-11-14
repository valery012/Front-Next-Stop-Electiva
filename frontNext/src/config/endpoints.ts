/**
 * Configuración centralizada de endpoints de microservicios.
 * Lee las URLs desde variables de entorno y valida que estén definidas.
 */

function getEnv(key: string): string {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Variable de entorno ${key} no está definida. Revisa tu archivo .env`);
  }
  return value;
}

export const ENDPOINTS = {
  AUTH: getEnv('VITE_API_AUTH_URL'),
  USERS: getEnv('VITE_API_USERS_URL'),
  PLACES: getEnv('VITE_API_PLACES_URL'),
  NOTIFICATIONS: getEnv('VITE_API_NOTIFICATIONS_URL'),
  MODERATION: getEnv('VITE_API_MODERATION_URL'),
} as const;

// Ejemplo de uso:
// import { ENDPOINTS } from '@/config/endpoints';
// const url = `${ENDPOINTS.PLACES}/api/v1/places`;
