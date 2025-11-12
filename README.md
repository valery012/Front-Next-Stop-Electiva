# 🚀 NextStop - Frontend React + TypeScript

## 📖 Descripción

**NextStop** es una aplicación web moderna para descubrir, compartir y gestionar lugares ocultos. Los usuarios pueden crear, visualizar y calificar lugares en un mapa interactivo, recibir notificaciones en tiempo real, y conectar con una comunidad global de exploradores.

## 🚀 Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
cd frontNext
npm run dev

# 3. Abrir en navegador
# http://localhost:5173
```

## 📚 Documentación

| Documento | Contenido |
|-----------|----------|
| **QUICKSTART.md** | Guía de inicio rápido para desarrolladores |
| **COMPONENTS.md** | Documentación detallada de cada componente |
| **ARCHITECTURE.md** | Diagramas y flujos de la aplicación |
| **PROJECT_STATUS.md** | Estado actual y estadísticas del proyecto |
| **README_PROJECT.md** | Resumen ejecutivo |

## 🏗️ Estructura del Proyecto

```
Front/
├── frontNext/                  # Proyecto Vite + React
│   ├── src/
│   │   ├── components/         # 15 componentes React
│   │   ├── hooks/              # Custom hooks
│   │   ├── types/              # Tipos TypeScript
│   │   ├── App.tsx             # Componente principal
│   │   └── index.css           # Estilos globales
│   ├── public/                 # Archivos estáticos
│   └── package.json
│
├── tailwind.config.js          # Configuración Tailwind
├── postcss.config.js           # Configuración PostCSS
├── package.json                # Dependencias raíz
│
└── Documentación
    ├── ARCHITECTURE.md         # Arquitectura
    ├── COMPONENTS.md           # Componentes
    ├── PROJECT_STATUS.md       # Estado del proyecto
    ├── QUICKSTART.md           # Inicio rápido
    └── README_PROJECT.md       # Resumen ejecutivo
```

## 🎨 Componentes Principales

### ✨ 15 Componentes Implementados

**UI Components (3)**
- `Navigation` - Barra de navegación
- `HeroSection` - Banner principal
- `DashboardStats` - Tarjetas de estadísticas

**Places Components (5)**
- `CreatePlaceForm` - Crear nuevo lugar
- `PlaceCard` - Tarjeta simple
- `PlaceCardEnhanced` - Tarjeta detallada
- `PlacesList` - Lista responsiva
- `MapView` - Mapa Canvas

**Notifications (2)**
- `ToastNotification` - Notificación emergente
- `NotificationCenter` - Centro de notificaciones

**Pages (5)**
- `LandingPage` - Página de bienvenida
- `LoginPage` - Autenticación
- `HomePage` - Dashboard principal
- `ProfilePage` - Perfil de usuario
- `ModeratorDashboard` - Panel admin

## 🛠️ Tecnologías

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| React | 19 | Framework UI |
| TypeScript | 5.9 | Tipado estricto |
| Vite | 7 | Build tool |
| Tailwind CSS | 4 | Estilos |
| PostCSS | 8 | Procesamiento CSS |
| ESLint | 9 | Linting |

## 📋 Características

- ✅ **Componentes Reutilizables** - Diseño modular y limpio
- ✅ **TypeScript** - Tipado completo para seguridad
- ✅ **Tailwind CSS** - Estilos modernos y responsivos
- ✅ **Custom Hooks** - Lógica reutilizable
- ✅ **Notificaciones** - Sistema completo de notificaciones
- ✅ **HMR** - Hot Module Replacement para desarrollo rápido
- ✅ **Documentación** - 4 archivos `.md` detallados

## 🎯 Casos de Uso

### Usuario Normal
1. Ver landing page
2. Registrarse/Login
3. Ver dashboard de lugares
4. Ver mapa con lugares
5. Ver perfil personal
6. Crear nuevo lugar
7. Recibir notificaciones

### Moderador
1. Acceder al dashboard
2. Ver lista de lugares
3. Filtrar por estado
4. Moderar/Aprobar lugares
5. Ver estadísticas

## 💾 Instalación

### Requisitos Previos
- Node.js 16+
- npm 8+

### Pasos
```bash
# Clonar/descargar proyecto
cd Front

# Instalar dependencias
npm install

# Instalar dependencias de frontNext (si es necesario)
cd frontNext
npm install

# Volver a raíz
cd ..
```

## 🚀 Comandos

```bash
# Desarrollo
cd frontNext
npm run dev

# Compilar para producción
npm run build

# Preview del build
npm run preview

# Verificar linting
npm run lint
```

## 📁 Estructura de Carpetas en `src/`

```
src/
├── components/
│   ├── UI/
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   └── DashboardStats.tsx
│   ├── Places/
│   │   ├── CreatePlaceForm.tsx
│   │   ├── PlaceCard.tsx
│   │   ├── PlaceCardEnhanced.tsx
│   │   ├── PlacesList.tsx
│   │   └── MapView.tsx
│   ├── Notifications/
│   │   ├── ToastNotification.tsx
│   │   └── NotificationCenter.tsx
│   ├── Pages/
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── ModeratorDashboard.tsx
│   ├── RootPage.tsx
│   └── index.ts
├── hooks/
│   ├── useNotificationManager.ts
│   └── index.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎓 Cómo Usar los Componentes

### Importar
```tsx
import { Navigation, HomePage } from '@/components'
import { useNotificationManager } from '@/hooks'
```

### Usar en Componente
```tsx
export function MyComponent() {
  const { addNotification } = useNotificationManager()

  return (
    <div>
      <Navigation />
      <button onClick={() => {
        addNotification({
          title: 'Éxito',
          message: 'Operación completada',
          type: 'success'
        })
      }}>
        Notificar
      </button>
    </div>
  )
}
```

## 🎨 Personalización

### Colores Tailwind
Modifica `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      // ...
    }
  }
}
```

### Tipografía
Añade fuentes en `tailwind.config.js`:
```js
fontFamily: {
  sans: ['Inter', 'sans-serif'],
}
```

## 🧪 Testing (Próximamente)

```bash
# Usar Vitest para unit tests
npm install -D vitest @vitest/ui

# Usar React Testing Library
npm install -D @testing-library/react
```

## 📦 Build para Producción

```bash
npm run build
# Genera: dist/
# Size: CSS 6.46 kB, JS 209.15 kB
```

## 🐛 Solución de Problemas

### Servidor no inicia
```bash
# Limpiar cache
rm -rf node_modules
npm install
npm run dev
```

### Tailwind no funciona
```bash
# Asegurarse que index.css tiene:
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### TypeScript errors
```bash
# Forzar recompilación
npm run build
```

## 📖 Recursos Útiles

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev/guide/)
- [ESLint Rules](https://eslint.org/docs/rules/)

## 🤝 Contribuir

1. Crear rama: `git checkout -b feature/nueva-feature`
2. Commit: `git commit -m 'Agregar feature'`
3. Push: `git push origin feature/nueva-feature`
4. Pull Request

## 📋 Checklist para Nueva Feature

- [ ] Crear componente en carpeta apropiada
- [ ] Añadir tipos TypeScript
- [ ] Documentar en `COMPONENTS.md`
- [ ] Exportar en `index.ts`
- [ ] Compilar: `npm run build`
- [ ] Verificar linting: `npm run lint`
- [ ] Probar en navegador

## 🔒 Configuración de Seguridad

- ✅ TypeScript strict mode
- ✅ ESLint activo
- ✅ No hay secretos en código
- ✅ Validación de tipos

## 📊 Rendimiento

| Métrica | Valor |
|---------|-------|
| Build Time | ~985ms |
| Dev Server Start | 244ms |
| CSS Bundle | 6.46 kB |
| JS Bundle | 209.15 kB |
| CSS (gzipped) | 1.93 kB |
| JS (gzipped) | 64.74 kB |

## 📱 Soporte de Navegadores

- Chrome (último)
- Firefox (último)
- Safari (último)
- Edge (último)

## 📄 Licencia

MIT © 2025

## 👤 Autor

**Desarrollado:** 10 de noviembre de 2025

## 💬 Contacto

Para preguntas o sugerencias, revisa la documentación en los archivos `.md`

---

## 📌 Links Útiles en el Proyecto

| Documento | Acceso |
|-----------|--------|
| Arquitectura | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| Componentes | [COMPONENTS.md](./COMPONENTS.md) |
| Estado del Proyecto | [PROJECT_STATUS.md](./PROJECT_STATUS.md) |
| Inicio Rápido | [QUICKSTART.md](./QUICKSTART.md) |
| Resumen Ejecutivo | [README_PROJECT.md](./README_PROJECT.md) |

---

**Estado:** ✅ **LISTO PARA DESARROLLO**  
**Próxima Fase:** Integración de API y enrutamiento avanzado

¡Comenzar: `npm run dev` 🚀
