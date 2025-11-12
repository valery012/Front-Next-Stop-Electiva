# 🏗️ Arquitectura del Proyecto PlacesApp

## Flujo de Datos

```
┌─────────────────────────────────────────────────────────────┐
│                        RootPage                             │
│  (Estado Global: currentPage, user, notifications)          │
└────────────────┬────────────────────────────────────────────┘
                 │
        ┌────────┴────────────────────────┐
        │                                 │
        v                                 v
   ┌─────────────┐          ┌──────────────────────┐
   │ Navigation  │          │  Page Components     │
   │   (Top)     │          │  - LandingPage       │
   └─────────────┘          │  - LoginPage         │
                            │  - HomePage          │
                            │  - ProfilePage       │
                            │  - ModeratorDashboard│
                            └──────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    v               v               v
              ┌──────────┐  ┌─────────────┐  ┌──────────────┐
              │  UI      │  │   Places    │  │ Notifications│
              │Components│  │ Components  │  │  Components  │
              ├──────────┤  ├─────────────┤  ├──────────────┤
              │Navigation│  │CreatePlace  │  │Toast         │
              │HeroSec   │  │PlaceCard    │  │NotifCenter   │
              │Dashboard │  │PlaceCardEnhd│  └──────────────┘
              │Stats     │  │PlacesList   │
              │          │  │MapView      │
              └──────────┘  └─────────────┘
                    │               │               │
                    └───────────────┼───────────────┘
                                    │
                        ┌───────────┴───────────┐
                        │                       │
                        v                       v
                  ┌────────────┐         ┌────────────┐
                  │ useNotification│    │   Types    │
                  │ Manager        │    │ (TypeScript)│
                  │ - add          │    ├────────────┤
                  │ - remove       │    │ User       │
                  │ - markAsRead   │    │ Place      │
                  │ - clearAll     │    │ Notification
                  │ - getUnreadCount   │ DashboardStats
                  └────────────────┘    └────────────┘
```

## Componentes por Carpeta

```
src/
│
├── components/
│   │
│   ├── UI/                          📦 Componentes de Interfaz
│   │   ├── Navigation.tsx             → Barra de navegación
│   │   ├── HeroSection.tsx            → Banner hero
│   │   └── DashboardStats.tsx         → Tarjetas de estadísticas
│   │
│   ├── Places/                      📦 Componentes de Lugares
│   │   ├── CreatePlaceForm.tsx       → Formulario modal
│   │   ├── PlaceCard.tsx             → Tarjeta simple
│   │   ├── PlaceCardEnhanced.tsx     → Tarjeta mejorada
│   │   ├── PlacesList.tsx            → Grilla de lugares
│   │   └── MapView.tsx               → Visualización Canvas
│   │
│   ├── Notifications/               📦 Componentes de Notificaciones
│   │   ├── ToastNotification.tsx     → Toast emergente
│   │   └── NotificationCenter.tsx    → Centro de notificaciones
│   │
│   ├── Pages/                       📦 Componentes de Páginas
│   │   ├── LandingPage.tsx           → Página de inicio
│   │   ├── LoginPage.tsx             → Página de login
│   │   ├── HomePage.tsx              → Dashboard principal
│   │   ├── ProfilePage.tsx           → Perfil de usuario
│   │   └── ModeratorDashboard.tsx    → Panel de moderador
│   │
│   ├── RootPage.tsx                 📍 Componente raíz
│   └── index.ts                     📤 Exportaciones
│
├── hooks/                           🪝 Custom Hooks
│   ├── useNotificationManager.ts     → Gestión de notificaciones
│   └── index.ts                     → Exportaciones
│
├── types/                           📘 TypeScript Types
│   └── index.ts                     → User, Place, Notification, etc
│
├── assets/                          🖼️ Recursos estáticos
├── App.tsx                          🎯 App principal
├── main.tsx                         🚀 Punto de entrada
└── index.css                        🎨 Estilos globales
```

## Flujo de Notificaciones

```
┌──────────────────────────────────┐
│  Evento en Componente            │
│  (click, submit, etc)            │
└────────────┬─────────────────────┘
             │
             v
┌──────────────────────────────────┐
│  useNotificationManager()         │
│  addNotification()               │
└────────────┬─────────────────────┘
             │
             v
┌──────────────────────────────────┐
│  Estado actualizado              │
│  notifications.push(new)         │
└────────────┬─────────────────────┘
             │
             v
┌──────────────────────────────────┐
│  RootPage re-renderiza           │
│  con nuevas notificaciones       │
└────────────┬─────────────────────┘
             │
             v
┌──────────────────────────────────┐
│  Mostrar ToastNotification o      │
│  actualizar NotificationCenter    │
└────────────┬─────────────────────┘
             │
             v
┌──────────────────────────────────┐
│  Auto-ocultar (5s) o             │
│  usuario cierra manualmente      │
└────────────┬─────────────────────┘
             │
             v
┌──────────────────────────────────┐
│  removeNotification()            │
│  Limpia estado                   │
└──────────────────────────────────┘
```

## Composición de Componentes

```
HomePage
├── Navigation ────────────────────────┐
│                                      │
├── DashboardStats                    │
│   ├── Grid de 4 tarjetas           │
│   │   ├── Lugares Totales          │
│   │   ├── Total Usuarios           │
│   │   ├── Notificaciones           │
│   │   └── Usuarios Activos         │
│   └── Estilos con Tailwind         │
│                                      │
├── MapView                           │
│   ├── Canvas elemento              │
│   ├── Dibuja puntos de lugares     │
│   └── Información de lugares       │
│                                      │
└── PlacesList                        │
    └── PlaceCard (x3)               │
        ├── Imagen                   │
        ├── Título                   │
        ├── Descripción              │
        ├── Categoría y Rating       │
        └── Botón "Ver Detalles"     │
```

## Props Flow (Ejemplo: HomePage)

```
Home Page
    │
    ├─ stats (DashboardStats)
    │  {
    │    totalPlaces: 1243,
    │    totalUsers: 5821,
    │    totalNotifications: 42,
    │    activeUsers: 324
    │  }
    │
    ├─ places (PlacesList)
    │  [
    │    {
    │      id, name, description,
    │      latitude, longitude,
    │      category, rating, reviews,
    │      creator: User
    │    },
    │    ...
    │  ]
    │
    └─ onPlaceClick callback
       (place: Place) => void
```

## Ciclo de Componente (Ejemplo: PlaceCard)

```
PlaceCard recibe props
    │
    ├─ Renderiza imagen (si existe)
    │
    ├─ Renderiza información
    │  ├─ Nombre
    │  ├─ Descripción (truncada)
    │  ├─ Categoría y Rating
    │  └─ Botón de acción
    │
    └─ Usuario interactúa
       ├─ Hover: sombra aumenta
       └─ Click: onPlaceClick callback
```

## Manejo de Estado en RootPage

```
RootPage State
    │
    ├─ currentPage: PageType
    │  └─ Determina qué página renderizar
    │
    ├─ isAuthenticated: boolean
    │  └─ Controla acceso a páginas privadas
    │
    ├─ currentUser: User | null
    │  └─ Datos del usuario autenticado
    │
    └─ notifications: Notification[]
       └─ Mostradas en ToastNotification y NotificationCenter
```

## Dependencias de Importación

```
App.tsx
    │
    └─ RootPage
        │
        ├─ Navigation
        │
        ├─ LandingPage
        │   └─ HeroSection
        │
        ├─ LoginPage
        │
        ├─ HomePage
        │   ├─ DashboardStats
        │   ├─ MapView
        │   └─ PlacesList
        │       └─ PlaceCard
        │
        ├─ ProfilePage
        │
        ├─ ModeratorDashboard
        │   ├─ DashboardStats
        │   └─ PlacesList
        │
        ├─ ToastNotification
        │   └─ useNotificationManager
        │
        └─ useNotificationManager
            └─ Types (Notification)
```

## Tipos de Datos

```
User
  ├─ id: string
  ├─ name: string
  ├─ email: string
  ├─ role: 'user' | 'moderator' | 'admin'
  └─ avatar?: string

Place
  ├─ id: string
  ├─ name: string
  ├─ description: string
  ├─ latitude: number
  ├─ longitude: number
  ├─ category: string
  ├─ rating: number
  ├─ reviews: number
  ├─ imageUrl?: string
  ├─ createdAt: string
  └─ creator: User

Notification
  ├─ id: string
  ├─ title: string
  ├─ message: string
  ├─ type: 'info' | 'success' | 'warning' | 'error'
  ├─ read: boolean
  └─ createdAt: string

DashboardStats
  ├─ totalPlaces: number
  ├─ totalUsers: number
  ├─ totalNotifications: number
  └─ activeUsers: number
```

---

**Diagrama creado:** 10 de noviembre de 2025  
**Versión:** 1.0
