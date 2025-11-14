import React, { useState, useEffect } from 'react';
import type { User, Place } from './types';
import './App.css';

type PageType = 'landing' | 'login' | 'home' | 'profile' | 'moderator' | 'admin';

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
function LoginPage({ onLogin, onBack }: { onLogin: (user: User) => void; onBack: () => void }) {
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
          {/* Botón de regresar */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition"
            title="Volver al inicio"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="text-sm font-medium">Volver al inicio</span>
          </button>

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
function HomePage({ user, places, onNavigate, onLogout, onAddPlace }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const approvedPlaces = places.filter((p: Place) => p.status === 'approved');
  const filteredPlaces = selectedCategory ? approvedPlaces.filter((p: Place) => p.category === selectedCategory) : approvedPlaces;

  const firstName = (user?.name || '').trim().split(' ')[0] || user?.name || 'Usuario';
  const initial = firstName?.charAt(0)?.toUpperCase() || 'U';

  // Crear lugar modal state
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCategory, setNewCategory] = useState('restaurant');
  const [photoInputs, setPhotoInputs] = useState<string[]>(['']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const defaultPhoto = 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800&auto=format&fit=crop&q=60';

  const handleAddPhotoField = () => {
    setPhotoInputs((prev) => [...prev, '']);
  };

  const handlePhotoChange = (index: number, value: string) => {
    setPhotoInputs((prev) => prev.map((p, i) => (i === index ? value : p)));
  };

  const handleCreateSubmit = () => {
    if (!newName.trim() || !newDescription.trim()) return;
    setIsSubmitting(true);
    // Preparar fotos (filtrar vacíos, fallback por defecto)
    const cleanedPhotos = photoInputs.map(p => p.trim()).filter(p => p.length > 0);
    const photos = cleanedPhotos.length > 0 ? cleanedPhotos : [defaultPhoto];
    const newPlace: Place = {
      id: Math.random().toString(36).slice(2),
      name: newName.trim(),
      description: newDescription.trim(),
      category: newCategory,
      latitude: 0,
      longitude: 0,
      photos,
      createdBy: user.id,
      creatorName: user.name,
      createdAt: new Date(),
      status: 'pending', // Se enviará a moderación
    } as Place;
    // Guardar usando callback para actualizar estado global
    onAddPlace(newPlace);
    // Forzar recarga de lugares aprobados si ya estaba abierto
    // No tenemos un callback directo aquí; recargaremos la ventana de forma suave
    setShowCreate(false);
    setIsSubmitting(false);
    setNewName('');
    setNewDescription('');
    setNewCategory('restaurant');
    setPhotoInputs(['']);
    setToast({ type: 'success', message: 'Lugar creado y enviado a moderación' });
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Next Stop</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('profile')}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition"
              title="Ir a mi perfil"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white text-sm font-bold">
                {initial}
              </span>
              <span className="text-left leading-tight">
                <span className="block text-sm font-semibold text-gray-900 group-hover:text-purple-700">{firstName}</span>
                <span className="block text-[11px] text-gray-500">Mi perfil</span>
              </span>
            </button>
            {user.role === 'moderator' && (
              <button onClick={() => onNavigate('moderator')} className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-semibold">
                Panel Moderador
              </button>
            )}

            <button
              onClick={onLogout}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-red-200 text-red-600 hover:bg-red-50 transition"
              title="Cerrar sesión"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <path d="M16 17l5-5-5-5" />
                <path d="M21 12H9" />
              </svg>
              <span className="text-sm font-medium">Cerrar sesión</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Bienvenida personalizada */}
      <div className="bg-gradient-to-r from-orange-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <p className="text-sm text-slate-700">
            Hola, <span className="font-semibold bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">{firstName}</span>. ¡Bienvenido de nuevo!
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Lugares Aprobados</h2>

        <div className="mb-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-orange-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow hover:shadow-md transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            Crear lugar
          </button>
          <p className="text-sm text-gray-600">Los lugares nuevos se envían como <span className="font-medium text-purple-600">pendientes</span> para moderación.</p>
        </div>

        {showCreate && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => !isSubmitting && setShowCreate(false)} />
            <div className="relative w-full max-w-lg bg-white rounded-xl shadow-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Nuevo Lugar</h3>
                <button
                  onClick={() => !isSubmitting && setShowCreate(false)}
                  className="text-gray-500 hover:text-gray-700"
                  title="Cerrar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </div>
              <div className="space-y-5 max-h-[70vh] overflow-y-auto pr-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Ej: Mirador Secreto"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                  <textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Describe el lugar, acceso, ambiente..."
                    rows={4}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="restaurant">Restaurante</option>
                    <option value="hotel">Hotel</option>
                    <option value="natural">Natural</option>
                    <option value="viewpoint">Mirador</option>
                    <option value="museum">Museo</option>
                    <option value="park">Parque</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fotos (URLs) - opcional</label>
                  <div className="space-y-3">
                    {photoInputs.map((val, idx) => (
                      <div key={idx} className="space-y-1">
                        <input
                          type="text"
                          value={val}
                          onChange={(e) => handlePhotoChange(idx, e.target.value)}
                          placeholder={idx === 0 ? 'https://...' : 'Otra foto...'}
                          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400"
                        />
                        {val.trim().startsWith('http') && (
                          <div className="rounded-md border border-gray-200 overflow-hidden">
                            <img
                              src={val}
                              alt={`preview-${idx}`}
                              className="h-32 w-full object-cover"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddPhotoField}
                      className="text-sm inline-flex items-center gap-1 text-purple-600 hover:text-purple-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                      Añadir otra
                    </button>
                    <p className="text-xs text-gray-500">Si no añades ninguna, se usará una imagen por defecto.</p>
                  </div>
                </div>
                <div className="pt-2 flex gap-3">
                  <button
                    disabled={isSubmitting || !newName.trim() || !newDescription.trim()}
                    onClick={handleCreateSubmit}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
                        Guardando...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                        Enviar a moderación
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setShowCreate(false)}
                    className="px-5 py-2.5 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {toast && (
          <div className="fixed bottom-5 right-5 z-50">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border text-sm font-medium ${toast.type === 'success' ? 'bg-green-50 border-green-300 text-green-700' : 'bg-red-50 border-red-300 text-red-700'}`}>\n+              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">${'success' === 'success' ? '' : ''}<path d="M12 22c5.522 0 10-4.477 10-10S17.522 2 12 2 2 6.477 2 12s4.478 10 10 10Z"/><path d="M16 12h-4"/><path d="M12 8h.01"/></svg>
              <span>{toast.message}</span>
              <button onClick={() => setToast(null)} className="ml-2 text-xs uppercase tracking-wide opacity-70 hover:opacity-100">Cerrar</button>
            </div>
          </div>
        )}

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
  // Faltaba esta lista y causaba error en render
  const approvedPlaces = userPlaces.filter((p: Place) => p.status === 'approved');
  const pendingPlaces = userPlaces.filter((p: Place) => p.status === 'pending');
  const rejectedPlaces = userPlaces.filter((p: Place) => p.status === 'rejected');

  const renderStatusBadge = (status: string) => {
    const base = 'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'approved':
        return <span className={base + ' bg-green-100 text-green-700 border border-green-200'}>Aprobado</span>;
      case 'pending':
        return <span className={base + ' bg-yellow-100 text-yellow-700 border border-yellow-200'}>Pendiente</span>;
      case 'rejected':
        return <span className={base + ' bg-red-100 text-red-700 border border-red-200'}>Rechazado</span>;
      default:
        return <span className={base + ' bg-gray-100 text-gray-600 border border-gray-200'}>{status}</span>;
    }
  };

  const renderPlacesSection = (title: string, items: Place[], accent: string) => (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-xl font-semibold text-gray-800`}>{title}</h3>
        <span className={`text-sm font-medium ${accent}`}>{items.length} lugar(es)</span>
      </div>
      {items.length === 0 ? (
        <p className="text-gray-500 text-sm italic">No hay lugares en esta categoría.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((pl: Place) => (
            <div key={pl.id} className="bg-white rounded-lg shadow hover:shadow-md transition border border-gray-200 flex flex-col">
              {pl.photos && pl.photos.length > 0 ? (
                <div className="h-40 overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={pl.photos[0]}
                    alt={pl.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              ) : (
                <div className="h-40 flex items-center justify-center bg-gray-100 rounded-t-lg text-gray-400 text-sm">Sin imagen</div>
              )}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-base font-semibold text-gray-900 leading-tight line-clamp-2">{pl.name}</h4>
                  {renderStatusBadge(pl.status)}
                </div>
                {pl.category && (
                  <span className="text-xs uppercase tracking-wide text-purple-600 font-medium">{pl.category}</span>
                )}
                {pl.description && (
                  <p className="text-sm text-gray-600 line-clamp-3">{pl.description}</p>
                )}
              </div>
              <div className="px-4 pb-4 mt-auto">
                <div className="flex flex-wrap gap-1">
                  {(pl.photos || []).slice(1,4).map((p,i) => (
                    <img
                      key={i}
                      src={p}
                      alt={pl.name + ' extra'}
                      className="w-10 h-10 object-cover rounded border border-gray-200"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = 'hidden'; }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Next Stop</h1>
          <div className="flex gap-3 items-center">
            <button onClick={() => onNavigate('home')} className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md hover:bg-gray-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span className="font-medium">Volver</span>
            </button>
            <button onClick={onLogout} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-red-200 text-red-600 hover:bg-red-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <path d="M16 17l5-5-5-5" />
                <path d="M21 12H9" />
              </svg>
              <span className="font-medium">Salir</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-1"><strong>Email:</strong> {user.email}</p>
              <p className="text-gray-600"><strong>Rol:</strong> {user.role === 'moderator' ? 'Moderador' : 'Usuario'}</p>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full sm:w-auto">
              <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">{userPlaces.length}</div>
                <p className="text-xs font-medium text-purple-700">Creados</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center border border-green-100">
                <div className="text-2xl font-bold text-green-600">{approvedCount}</div>
                <p className="text-xs font-medium text-green-700">Aprobados</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center border border-yellow-100">
                <div className="text-2xl font-bold text-yellow-600">{pendingPlaces.length}</div>
                <p className="text-xs font-medium text-yellow-700">Pendientes</p>
              </div>
            </div>
          </div>
        </div>

        {renderPlacesSection('Pendientes de Revisión', pendingPlaces, 'text-yellow-600')}
        {renderPlacesSection('Aprobados', approvedPlaces, 'text-green-600')}
        {renderPlacesSection('Rechazados', rejectedPlaces, 'text-red-600')}
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
          <div className="flex gap-3 items-center">
            <button onClick={() => onNavigate('home')} className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md hover:bg-gray-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span className="font-medium">Volver</span>
            </button>
            <button onClick={onLogout} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-red-200 text-red-600 hover:bg-red-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <path d="M16 17l5-5-5-5" />
                <path d="M21 12H9" />
              </svg>
              <span className="font-medium">Cerrar sesión</span>
            </button>
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

// Admin Dashboard Component
function AdminDashboard({ user, places, onUpdatePlace, onNavigate, onLogout }: any) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const pendingPlaces = places.filter((p: Place) => p.status === 'pending');
  const allRequests = places; // Admin ve todas las solicitudes

  const handleApprove = (place: Place) => {
    onUpdatePlace({ ...place, status: 'approved' });
    setSelectedPlace(null);
  };

  const handleReject = (place: Place) => {
    onUpdatePlace({ ...place, status: 'rejected' });
    setSelectedPlace(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Admin Panel</h1>
          <div className="flex gap-3 items-center">
            <div className="text-sm text-gray-600">
              <span className="font-medium">{user.name}</span> · <span className="text-purple-600 font-semibold">Administrador</span>
            </div>
            <button onClick={onLogout} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-red-200 text-red-600 hover:bg-red-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <path d="M16 17l5-5-5-5" />
                <path d="M21 12H9" />
              </svg>
              <span className="font-medium">Salir</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Solicitudes</h2>
          <p className="text-gray-600">Revisa y modera las solicitudes de lugares enviadas por los usuarios.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-yellow-500">
            <div className="text-4xl font-bold text-yellow-600">{pendingPlaces.length}</div>
            <p className="text-gray-600 font-medium">Pendientes de Revisión</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-green-500">
            <div className="text-4xl font-bold text-green-600">{places.filter((p: Place) => p.status === 'approved').length}</div>
            <p className="text-gray-600 font-medium">Aprobadas</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center border-l-4 border-red-500">
            <div className="text-4xl font-bold text-red-600">{places.filter((p: Place) => p.status === 'rejected').length}</div>
            <p className="text-gray-600 font-medium">Rechazadas</p>
          </div>
        </div>

        {/* Solicitudes Pendientes */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            Solicitudes Pendientes
            <span className="text-sm font-normal text-gray-500">({pendingPlaces.length})</span>
          </h3>
          
          {pendingPlaces.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
              <p className="font-medium">No hay solicitudes pendientes</p>
              <p className="text-sm mt-1">Todas las solicitudes han sido revisadas.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingPlaces.map((place: Place) => (
                <div key={place.id} className="bg-white rounded-lg shadow hover:shadow-md transition border border-gray-200 overflow-hidden">
                  <div className="grid md:grid-cols-12 gap-4">
                    {/* Image preview */}
                    <div className="md:col-span-3">
                      {place.photos && place.photos.length > 0 ? (
                        <img
                          src={place.photos[0]}
                          alt={place.name}
                          className="w-full h-48 md:h-full object-cover"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Sin+Imagen'; }}
                        />
                      ) : (
                        <div className="w-full h-48 md:h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                          Sin imagen
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:col-span-6 p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{place.name}</h4>
                          {place.category && (
                            <span className="inline-block mt-1 text-xs uppercase tracking-wide text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">
                              {place.category}
                            </span>
                          )}
                        </div>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
                          Pendiente
                        </span>
                      </div>

                      {place.description && (
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{place.description}</p>
                      )}

                      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                        {place.createdBy && (
                          <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="8" r="4"/>
                              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                            </svg>
                            ID: {place.createdBy}
                          </span>
                        )}
                        {place.photos && place.photos.length > 1 && (
                          <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="3" width="18" height="18" rx="2"/>
                              <circle cx="9" cy="9" r="2"/>
                              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                            </svg>
                            {place.photos.length} fotos
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="md:col-span-3 p-5 bg-gray-50 flex flex-col justify-center gap-3">
                      <button
                        onClick={() => handleApprove(place)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                        Aprobar
                      </button>
                      <button
                        onClick={() => handleReject(place)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                        Rechazar
                      </button>
                      <button
                        onClick={() => setSelectedPlace(place)}
                        className="w-full text-sm text-gray-600 hover:text-purple-600 font-medium transition"
                      >
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Historial Completo */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            Historial de Solicitudes
            <span className="text-sm font-normal text-gray-500">({allRequests.length} total)</span>
          </h3>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lugar</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allRequests.map((place: Place) => (
                    <tr key={place.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{place.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xs uppercase text-purple-600 font-medium">{place.category || 'N/A'}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {place.createdBy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {place.status === 'pending' && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
                            Pendiente
                          </span>
                        )}
                        {place.status === 'approved' && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                            Aprobado
                          </span>
                        )}
                        {place.status === 'rejected' && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200">
                            Rechazado
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {place.status === 'pending' ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleApprove(place)}
                              className="text-green-600 hover:text-green-800 font-medium"
                            >
                              Aprobar
                            </button>
                            <button
                              onClick={() => handleReject(place)}
                              className="text-red-600 hover:text-red-800 font-medium"
                            >
                              Rechazar
                            </button>
                          </div>
                        ) : (
                          <span className="text-gray-400 text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* Modal de detalles */}
      {selectedPlace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setSelectedPlace(null)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedPlace.name}</h3>
                <button onClick={() => setSelectedPlace(null)} className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {selectedPlace.category && (
                <span className="inline-block mb-4 text-xs uppercase tracking-wide text-purple-600 font-medium bg-purple-50 px-3 py-1.5 rounded">
                  {selectedPlace.category}
                </span>
              )}

              {selectedPlace.description && (
                <p className="text-gray-700 mb-6">{selectedPlace.description}</p>
              )}

              {selectedPlace.photos && selectedPlace.photos.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Imágenes ({selectedPlace.photos.length})</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedPlace.photos.map((photo, idx) => (
                      <img
                        key={idx}
                        src={photo}
                        alt={`${selectedPlace.name} ${idx + 1}`}
                        className="w-full h-48 object-cover rounded-lg border border-gray-200"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Error'; }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleApprove(selectedPlace)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  Aprobar Lugar
                </button>
                <button
                  onClick={() => handleReject(selectedPlace)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  Rechazar Lugar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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

    // Initialize demo users if they don't exist OR update if admin is missing
    const savedUsers = localStorage.getItem('users');
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
      {
        id: 'admin1',
        name: 'Admin',
        email: 'admin@test.com',
        password: 'admin123',
        role: 'admin',
        createdAt: new Date(),
      },
    ];
    
    if (!savedUsers) {
      localStorage.setItem('users', JSON.stringify(demoUsers));
    } else {
      // Check if admin exists, if not add it
      try {
        const existingUsers: User[] = JSON.parse(savedUsers);
        const hasAdmin = existingUsers.some(u => u.role === 'admin');
        if (!hasAdmin) {
          existingUsers.push(demoUsers[2]); // Add admin user
          localStorage.setItem('users', JSON.stringify(existingUsers));
        }
      } catch (e) {
        localStorage.setItem('users', JSON.stringify(demoUsers));
      }
    }
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    // Redirect based on role
    if (user.role === 'admin') {
      setCurrentPage('admin');
    } else {
      setCurrentPage('home');
    }
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
    return <LoginPage onLogin={handleLogin} onBack={() => setCurrentPage('landing')} />;
  }

  if (currentPage === 'profile') {
    return <ProfilePage user={currentUser} places={places} onNavigate={handleNavigate} onLogout={handleLogout} />;
  }

  if (currentPage === 'moderator' && currentUser.role === 'moderator') {
    return <ModeratorDashboard user={currentUser} places={places} onUpdatePlace={handleUpdatePlace} onNavigate={handleNavigate} onLogout={handleLogout} />;
  }

  if (currentPage === 'admin' && currentUser.role === 'admin') {
    return <AdminDashboard user={currentUser} places={places} onUpdatePlace={handleUpdatePlace} onNavigate={handleNavigate} onLogout={handleLogout} />;
  }

  // Default to home page
  const handleAddPlace = (place: Place) => {
    const newPlaces = [...places, place];
    setPlaces(newPlaces);
    localStorage.setItem('places', JSON.stringify(newPlaces));
    // Si estamos en moderador, refrescar vista manteniendo la página
    if (currentPage === 'moderator') {
      // Forzar re-render navegando y volviendo (opcional)
      setCurrentPage('home');
      setTimeout(() => setCurrentPage('moderator'), 0);
    }
  };

  return <HomePage user={currentUser} places={places} onNavigate={handleNavigate} onLogout={handleLogout} onAddPlace={handleAddPlace} />;
}
