# 🚀 Guía de Inicio Rápido

## Instalación

```bash
cd Front
npm install
```

## Desarrollo

```bash
cd frontNext
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Compilación

```bash
npm run build
```

Los archivos compilados estarán en `dist/`

## Estructura Recomendada para Iniciar

### 1. Entender los Tipos
Lee `src/types/index.ts` para entender las entidades principales:
- `User` - Usuario de la aplicación
- `Place` - Lugar compartido
- `Notification` - Notificación del sistema
- `DashboardStats` - Estadísticas del dashboard

### 2. Entender los Hooks
- `useNotificationManager` en `src/hooks/useNotificationManager.ts`
  - Gestiona el estado de notificaciones
  - Métodos: add, remove, markAsRead, clearAll, getUnreadCount

### 3. Componentes por Nivel de Complejidad

**Principiantes:** Comienza aquí
- `UI/Navigation` - Navbar simple
- `UI/HeroSection` - Banner estático
- `Places/PlaceCard` - Card simple

**Intermedio:** Luego pasa a
- `Places/PlacesList` - Componente con lógica de lista
- `Notifications/ToastNotification` - Con useEffect
- `UI/DashboardStats` - Manejo de props complejos

**Avanzado:** Finalmente
- `Pages/HomePage` - Múltiples componentes juntos
- `Pages/ModeratorDashboard` - Con estado y filtros
- `RootPage` - Enrutamiento completo

## Importar un Componente

```tsx
import { Navigation, HomePage, PlacesList } from '@/components'

export function MyComponent() {
  return <Navigation />
}
```

## Usar el Hook de Notificaciones

```tsx
import { useNotificationManager } from '@/hooks'

export function MyComponent() {
  const { addNotification, notifications } = useNotificationManager()

  return (
    <button onClick={() => {
      addNotification({
        title: 'Éxito',
        message: 'Operación realizada',
        type: 'success'
      })
    }}>
      Mostrar Notificación
    </button>
  )
}
```

## Crear un Nuevo Componente

1. Crea el archivo en la carpeta correspondiente:
   ```bash
   src/components/YourCategory/YourComponent.tsx
   ```

2. Escribe el componente con TypeScript:
   ```tsx
   import React from 'react'
   
   interface YourComponentProps {
     // Define tus props aquí
   }
   
   export const YourComponent: React.FC<YourComponentProps> = (props) => {
     return (
       <div className="...">
         {/* Tu contenido */}
       </div>
     )
   }
   ```

3. Exporta en `src/components/index.ts`:
   ```tsx
   export { YourComponent } from './YourCategory/YourComponent'
   ```

## Estilos con Tailwind CSS

Todos los componentes usan Tailwind CSS. Ejemplos:

```tsx
<div className="flex justify-center items-center bg-blue-500 p-4 rounded-lg">
  <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
    Click me
  </button>
</div>
```

### Clases comunes:
- Layout: `flex`, `grid`, `absolute`, `relative`
- Espaciado: `p-4`, `m-2`, `gap-3`
- Colores: `bg-blue-500`, `text-white`, `border-gray-200`
- Sizing: `w-full`, `h-20`, `min-h-screen`
- Hover/Active: `hover:bg-blue-700`, `focus:outline-none`

## Debugging

1. **Abre DevTools:** F12 en el navegador
2. **Console:** Busca errores de React
3. **Network:** Verifica las peticiones (una vez integres API)
4. **React DevTools:** Instala la extensión de React

## Problemas Comunes

### "Cannot find module '@/components'"
- Asegúrate que los imports usan `@/` en lugar de rutas relativas
- O actualiza `vite.config.ts` para configurar alias

### "Tailwind classes not working"
- Verifica que `index.css` tenga las directivas Tailwind
- Reconstruye el proyecto: `npm run build`

### "Types not found"
- Ejecuta `npm install` nuevamente
- Reinicia VS Code

## URLs Útiles

- **Tailwind CSS:** https://tailwindcss.com
- **React Docs:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org
- **Vite:** https://vitejs.dev

## Comandos Rápidos

```bash
# Ver estructura del proyecto
ls -la src/

# Limpiar build anterior
rm -rf dist/

# Reinstalar dependencias
rm -rf node_modules package-lock.json && npm install

# Verificar tipos TypeScript
npm run build
```

---

¡Felicidades! Ahora estás listo para desarrollar. 🎉
