# Estructura de Componentes - PlacesApp

## 📁 Estructura de Carpetas

```
src/
├── components/
│   ├── UI/                    # Componentes de Interfaz
│   │   ├── Navigation.tsx      # Barra de navegación
│   │   ├── HeroSection.tsx     # Banner principal
│   │   └── DashboardStats.tsx  # Tarjetas de estadísticas
│   ├── Places/                # Componentes de Lugares
│   │   ├── CreatePlaceForm.tsx       # Formulario para crear lugar
│   │   ├── PlaceCard.tsx             # Tarjeta simple de lugar
│   │   ├── PlaceCardEnhanced.tsx     # Tarjeta mejorada de lugar
│   │   ├── PlacesList.tsx            # Lista de lugares
│   │   └── MapView.tsx               # Visualización en mapa (Canvas)
│   ├── Notifications/         # Componentes de Notificaciones
│   │   ├── ToastNotification.tsx     # Notificación emergente
│   │   └── NotificationCenter.tsx    # Centro de notificaciones
│   ├── Pages/                 # Páginas/Vistas
│   │   ├── LandingPage.tsx     # Página de inicio
│   │   ├── LoginPage.tsx       # Página de login
│   │   ├── HomePage.tsx        # Página principal
│   │   ├── ProfilePage.tsx     # Página de perfil
│   │   └── ModeratorDashboard.tsx # Panel de moderador
│   ├── RootPage.tsx           # Componente raíz con enrutamiento
│   └── index.ts               # Exportaciones de componentes
├── hooks/
│   ├── useNotificationManager.ts  # Hook para gestionar notificaciones
│   └── index.ts                   # Exportaciones de hooks
├── types/
│   └── index.ts               # Tipos TypeScript (User, Place, Notification, etc.)
├── assets/
├── App.tsx                    # Componente principal
├── main.tsx                   # Punto de entrada
└── index.css                  # Estilos globales
```

## 🎯 Componentes

### 1. Componentes de UI

#### `Navigation`
Barra de navegación principal con enlaces y botón de logout.

```tsx
import { Navigation } from '@/components'
<Navigation />
```

#### `HeroSection`
Banner hero con título y botones de llamado a la acción.

```tsx
import { HeroSection } from '@/components'
<HeroSection />
```

#### `DashboardStats`
Tarjetas de estadísticas con métricas clave.

```tsx
import { DashboardStats } from '@/components'
<DashboardStats stats={{ totalPlaces: 100, totalUsers: 50, ... }} />
```

### 2. Componentes de Lugares

#### `CreatePlaceForm`
Formulario modal para crear un nuevo lugar.

```tsx
import { CreatePlaceForm } from '@/components'
<CreatePlaceForm onSubmit={(data) => console.log(data)} />
```

#### `PlaceCard`
Tarjeta simple para mostrar un lugar.

```tsx
import { PlaceCard } from '@/components'
<PlaceCard place={placeObject} />
```

#### `PlaceCardEnhanced`
Tarjeta mejorada con más información y botones de acción.

```tsx
import { PlaceCardEnhanced } from '@/components'
<PlaceCardEnhanced place={placeObject} />
```

#### `PlacesList`
Lista responsiva de lugares (usa PlaceCard internamente).

```tsx
import { PlacesList } from '@/components'
<PlacesList places={placesArray} onPlaceClick={(place) => {}} />
```

#### `MapView`
Visualización en Canvas de lugares en un mapa.

```tsx
import { MapView } from '@/components'
<MapView places={placesArray} height="500px" />
```

### 3. Componentes de Notificaciones

#### `ToastNotification`
Notificación emergente que desaparece automáticamente.

```tsx
import { ToastNotification } from '@/components'
<ToastNotification 
  notification={notificationObject} 
  onClose={() => {}} 
/>
```

#### `NotificationCenter`
Panel dropdown para ver todas las notificaciones.

```tsx
import { NotificationCenter } from '@/components'
<NotificationCenter 
  notifications={notificationsArray}
  onMarkAsRead={(id) => {}}
  onRemove={(id) => {}}
  onClearAll={() => {}}
/>
```

### 4. Páginas

#### `LandingPage`
Página de inicio con información sobre la aplicación.

#### `LoginPage`
Página de login con formulario.

#### `HomePage`
Página principal con dashboard y lista de lugares.

#### `ProfilePage`
Página de perfil del usuario con estadísticas.

#### `ModeratorDashboard`
Panel especial para moderadores con gestión de lugares.

#### `RootPage`
Componente raíz que maneja el enrutamiento entre páginas.

## 🪝 Custom Hooks

### `useNotificationManager`
Hook para gestionar notificaciones en la aplicación.

```tsx
import { useNotificationManager } from '@/hooks'

const {
  notifications,        // Array de notificaciones
  addNotification,      // Agregar nueva notificación
  markAsRead,          // Marcar como leída
  removeNotification,  // Eliminar notificación
  clearAll,            // Limpiar todas
  getUnreadCount       // Obtener no leídas
} = useNotificationManager()
```

## 📝 Tipos TypeScript

```tsx
interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'moderator' | 'admin'
  avatar?: string
}

interface Place {
  id: string
  name: string
  description: string
  latitude: number
  longitude: number
  category: string
  rating: number
  reviews: number
  imageUrl?: string
  createdAt: string
  creator: User
}

interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: string
}

interface DashboardStats {
  totalPlaces: number
  totalUsers: number
  totalNotifications: number
  activeUsers: number
}
```

## 🎨 Estilos

La aplicación utiliza **Tailwind CSS** con las siguientes características:
- Colores principales: Azul (#3b82f6)
- Diseño responsivo con grid/flex
- Hover effects y transiciones
- Sombras y bordes redondeados

## 📦 Exportaciones

Todos los componentes se pueden importar directamente desde `@/components`:

```tsx
import { 
  Navigation,
  HomePage,
  PlacesList,
  useNotificationManager 
} from '@/components'
```

## 🚀 Próximos Pasos

- [ ] Integrar API real
- [ ] Implementar autenticación
- [ ] Agregar gestos/interacciones más avanzadas
- [ ] Implementar persistencia de estado
- [ ] Agregar pruebas unitarias
- [ ] Optimizar performance

---

**Última actualización:** 10 de noviembre de 2025
