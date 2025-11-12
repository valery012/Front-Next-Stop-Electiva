import React, { useState, useEffect } from 'react';
import type { User, Place } from './types';
import './App.css';

type PageType = 'landing' | 'login' | 'home' | 'profile' | 'moderator';

// Landing Page Component
function LandingPage({ onNavigate }: { onNavigate: (page: 'login') => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Next Stop</h1>
          </div>
          <button 
            onClick={() => onNavigate('login')} 
            className="bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full px-6 py-2 font-semibold hover:shadow-lg transition"
          >
            Comenzar
          </button>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Columna de texto */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-orange-700">Descubre lugares auténticos</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Tu guía de lugares <br />
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                ocultos y especiales
              </span>
            </h2>
            <p className="text-xl text-slate-600 md:max-w-xl md:mx-0 mx-auto mb-8">
              Únete a una comunidad de exploradores que descubren gemas escondidas fuera de las rutas turísticas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <button
                onClick={() => onNavigate('login')}
                className="bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full text-lg px-8 py-3 font-semibold hover:shadow-lg transition"
              >
                Explorar ahora
              </button>
              <button className="border-2 border-slate-300 text-slate-700 rounded-full text-lg px-8 py-3 font-semibold hover:bg-slate-50 transition">
                Ver demo
              </button>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-200/50 to-purple-200/50 rounded-3xl blur-2xl" aria-hidden="true"></div>
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
              alt="Paisaje inspirador de viaje"
              className="relative w-full rounded-3xl shadow-xl ring-1 ring-slate-200 object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-bold text-center text-slate-900 mb-16">¿Por qué Next Stop?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { key: 'gem', title: 'Descubre Gemas Ocultas', desc: 'Accede a una base de datos creciente de lugares auténticos.' },
            { key: 'users', title: 'Comunidad Global', desc: 'Conecta con viajeros de todo el mundo.' },
            { key: 'ai', title: 'Recomendaciones con IA', desc: 'Obtén sugerencias personalizadas.' },
            { key: 'map', title: 'Mapas Interactivos', desc: 'Visualiza lugares con coordenadas GPS precisas.' },
            { key: 'search', title: 'Filtros Avanzados', desc: 'Busca por categoría, ubicación y más.' },
            { key: 'shield', title: 'Contenido Verificado', desc: 'Cada lugar es revisado por moderadores.' },
          ].map((f) => (
            <div key={f.key} className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center mb-4">
                {/* Iconos minimalistas con stroke blanco */}
                {f.key === 'gem' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 3 3 9 12 21 21 9 12 3"/>
                    <path d="M12 3l0 18"/>
                    <path d="M3 9l18 0"/>
                  </svg>
                )}
                {f.key === 'users' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3"/>
                    <path d="M4 19c0-3 2.5-5 5-5"/>
                    <circle cx="17" cy="9" r="2.5"/>
                    <path d="M14 19c.3-2.2 2-3.8 4-4"/>
                  </svg>
                )}
                {f.key === 'ai' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 3l-6 9h5l-1 9 6-10h-5l1-8z"/>
                  </svg>
                )}
                {f.key === 'map' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/>
                    <path d="M9 4v14M15 6v14"/>
                  </svg>
                )}
                {f.key === 'search' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="5"/>
                    <path d="M16 16l5 5"/>
                  </svg>
                )}
                {f.key === 'shield' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                )}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Login Page Component
function LoginPage({ onLogin }: { onLogin: (user: User) => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (isLogin) {
        const savedUsers = localStorage.getItem('users');
        const users = savedUsers ? JSON.parse(savedUsers) : [];
        const user = users.find((u: User) => u.email === email && u.password === password);
        if (user) {
          onLogin(user);
        } else {
          alert('Credenciales inválidas');
        }
      } else {
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          password,
          name,
          role: 'user',
          createdAt: new Date(),
        };
        const savedUsers = localStorage.getItem('users');
        const users = savedUsers ? JSON.parse(savedUsers) : [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        onLogin(newUser);
      }
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">{isLogin ? 'Bienvenido' : 'Únete a Next Stop'}</h2>
            <p className="text-gray-300 text-sm">
              {isLogin ? 'Continúa explorando' : 'Comienza tu aventura'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Nombre completo</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition focus:outline-none"
                  required={!isLogin}
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition focus:outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
            >
              {isLoading ? 'Procesando...' : isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </button>

            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setEmail('');
                setPassword('');
                setName('');
              }}
              className="w-full border border-white/20 text-white/80 font-medium py-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Home Page Component
function HomePage({ user, places, onNavigate, onLogout }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const approvedPlaces = places.filter((p: Place) => p.status === 'approved');
  const filteredPlaces = selectedCategory ? approvedPlaces.filter((p: Place) => p.category === selectedCategory) : approvedPlaces;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Next Stop</h1>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('profile')} className="text-gray-700 font-medium hover:text-orange-500">{user.name}</button>
            {user.role === 'moderator' && (
              <button onClick={() => onNavigate('moderator')} className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-semibold">
                Panel Moderador
              </button>
            )}
            <button onClick={onLogout} className="text-gray-700 font-medium hover:text-red-600">Cerrar Sesión</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Lugares Aprobados</h2>

        <div className="mb-12 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-semibold transition ${selectedCategory === null ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Todos
          </button>
          {['restaurant', 'hotel', 'natural', 'viewpoint'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${selectedCategory === cat ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {cat === 'restaurant' ? 'Restaurantes' : cat === 'hotel' ? 'Hoteles' : cat === 'natural' ? 'Naturales' : 'Miradores'}
            </button>
          ))}
        </div>

        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlaces.map((place: Place) => (
              <div key={place.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img src={place.photos && place.photos[0] ? place.photos[0] : 'https://via.placeholder.com/400x250'} alt={place.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{place.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{place.description.substring(0, 100)}...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">{place.category}</span>
                    <span className="text-xs text-gray-500">Por {place.creatorName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay lugares en esta categoría</p>
          </div>
        )}
      </main>
    </div>
  );
}

// Profile Page Component
function ProfilePage({ user, places, onNavigate, onLogout }: any) {
  const userPlaces = places.filter((p: Place) => p.createdBy === user.id);
  const approvedCount = userPlaces.filter((p: Place) => p.status === 'approved').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Next Stop</h1>
          <div className="flex gap-4">
            <button onClick={() => onNavigate('home')} className="text-gray-700 font-medium hover:text-orange-500">Volver</button>
            <button onClick={onLogout} className="text-gray-700 font-medium hover:text-red-600">Cerrar Sesión</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{user.name}</h2>
          <p className="text-gray-600 mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-600 mb-2"><strong>Rol:</strong> {user.role === 'moderator' ? 'Moderador' : 'Usuario'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-purple-600">{userPlaces.length}</div>
            <p className="text-gray-600 font-medium">Lugares Creados</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-green-600">{approvedCount}</div>
            <p className="text-gray-600 font-medium">Aprobados</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-yellow-600">{userPlaces.filter((p: Place) => p.status === 'pending').length}</div>
            <p className="text-gray-600 font-medium">Pendientes</p>
          </div>
        </div>
      </main>
    </div>
  );
}

// Moderator Dashboard Component
function ModeratorDashboard({ user, places, onUpdatePlace, onNavigate, onLogout }: any) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const pendingPlaces = places.filter((p: Place) => p.status === 'pending');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-purple-600">Panel Moderador</h1>
          <div className="flex gap-4">
            <button onClick={() => onNavigate('home')} className="text-gray-700 font-medium hover:text-orange-500">Volver</button>
            <button onClick={onLogout} className="text-gray-700 font-medium hover:text-red-600">Cerrar Sesión</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-600">{places.length}</div>
            <p className="text-gray-600">Total de Lugares</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-yellow-600">{pendingPlaces.length}</div>
            <p className="text-gray-600">Pendientes</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-green-600">{places.filter((p: Place) => p.status === 'approved').length}</div>
            <p className="text-gray-600">Aprobados</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-red-600">{places.filter((p: Place) => p.status === 'rejected').length}</div>
            <p className="text-gray-600">Rechazados</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Por Revisar ({pendingPlaces.length})</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {pendingPlaces.length > 0 ? (
                pendingPlaces.map((place: Place) => (
                  <button
                    key={place.id}
                    onClick={() => setSelectedPlace(place)}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      selectedPlace?.id === place.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-semibold text-gray-900">{place.name}</p>
                    <p className="text-sm text-gray-600">{place.category}</p>
                  </button>
                ))
              ) : (
                <p className="text-gray-500">No hay lugares pendientes</p>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedPlace ? (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedPlace.name}</h3>
                <p className="text-gray-600 mb-4">{selectedPlace.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div><strong>Categoría:</strong> {selectedPlace.category}</div>
                  <div><strong>Creador:</strong> {selectedPlace.creatorName}</div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      onUpdatePlace({ ...selectedPlace, status: 'approved' });
                      setSelectedPlace(null);
                    }}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
                  >
                    Aprobar
                  </button>
                  <button
                    onClick={() => {
                      onUpdatePlace({ ...selectedPlace, status: 'rejected' });
                      setSelectedPlace(null);
                    }}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700"
                  >
                    Rechazar
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-500">Selecciona un lugar para revisar</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// Mock Data
const MOCK_PLACES: Place[] = [
  {
    id: '1',
    name: 'Cascada Oculta del Bosque',
    description: 'Una hermosa cascada escondida en el bosque, perfecta para escapar del turismo masivo',
    category: 'natural',
    latitude: 40.7128,
    longitude: -74.006,
    photos: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'],
    createdBy: 'user1',
    createdAt: new Date('2024-10-01'),
    status: 'approved',
    creatorName: 'Carlos M.',
  },
  {
    id: '2',
    name: 'Restaurante Pequeño',
    description: 'Comida local auténtica en un lugar muy poco conocido',
    category: 'restaurant',
    latitude: 40.758,
    longitude: -73.9855,
    photos: ['https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400'],
    createdBy: 'user2',
    createdAt: new Date('2024-10-05'),
    status: 'approved',
    creatorName: 'María L.',
  },
  {
    id: '3',
    name: 'Mirador Secreto',
    description: 'Vista panorámica increíble del atardecer',
    category: 'viewpoint',
    latitude: 40.7489,
    longitude: -73.968,
    photos: ['https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=400'],
    createdBy: 'user3',
    createdAt: new Date('2024-10-10'),
    status: 'pending',
    creatorName: 'Juan P.',
  },
];

// Main App Component
export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    // Load user from localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
        setCurrentPage('home');
      } catch (e) {
        console.error('Error loading user:', e);
      }
    }

    // Load places
    const savedPlaces = localStorage.getItem('places');
    if (savedPlaces) {
      try {
        setPlaces(JSON.parse(savedPlaces));
      } catch (e) {
        console.error('Error loading places:', e);
        setPlaces(MOCK_PLACES);
        localStorage.setItem('places', JSON.stringify(MOCK_PLACES));
      }
    } else {
      setPlaces(MOCK_PLACES);
      localStorage.setItem('places', JSON.stringify(MOCK_PLACES));
    }

    // Initialize demo users if they don't exist
    const savedUsers = localStorage.getItem('users');
    if (!savedUsers) {
      const demoUsers: User[] = [
        {
          id: 'demo1',
          name: 'Demo User',
          email: 'demo@test.com',
          password: '123456',
          role: 'user',
          createdAt: new Date(),
        },
        {
          id: 'mod1',
          name: 'Moderator',
          email: 'mod@test.com',
          password: '123456',
          role: 'moderator',
          createdAt: new Date(),
        },
      ];
      localStorage.setItem('users', JSON.stringify(demoUsers));
    }
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setCurrentPage('landing');
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const handleUpdatePlace = (updatedPlace: Place) => {
    const updatedPlaces = places.map((p) => (p.id === updatedPlace.id ? updatedPlace : p));
    setPlaces(updatedPlaces);
    localStorage.setItem('places', JSON.stringify(updatedPlaces));
  };

  // Render correct page
  if (!currentUser && currentPage === 'landing') {
    return <LandingPage onNavigate={handleNavigate} />;
  }

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (currentPage === 'profile') {
    return <ProfilePage user={currentUser} places={places} onNavigate={handleNavigate} onLogout={handleLogout} />;
  }

  if (currentPage === 'moderator' && currentUser.role === 'moderator') {
    return <ModeratorDashboard user={currentUser} places={places} onUpdatePlace={handleUpdatePlace} onNavigate={handleNavigate} onLogout={handleLogout} />;
  }

  // Default to home page
  return <HomePage user={currentUser} places={places} onNavigate={handleNavigate} onLogout={handleLogout} />;
}
