import React, { useState } from 'react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 flex items-center justify-center relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-gray-900/80 backdrop-blur border border-purple-500/20 rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Bienvenido</h2>
            <p className="text-gray-400">Continúa explorando lugares increíbles</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Link de registro */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              ¿No tienes cuenta?{' '}
              <a href="#register" className="text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text hover:underline font-semibold">
                Registrarse
              </a>
            </p>
          </div>

          {/* Credenciales de demo */}
          <div className="mt-8 p-4 bg-purple-950/50 border border-purple-500/30 rounded-lg">
            <p className="text-purple-300 text-sm font-semibold mb-3 uppercase tracking-wider">Credenciales de Demo</p>
            <div className="space-y-2 text-sm text-gray-300">
              <div>
                <span className="text-purple-400">Usuario:</span> demo@test.com
              </div>
              <div>
                <span className="text-purple-400">Contraseña:</span> 123456
              </div>
              <div className="pt-2 border-t border-purple-500/20 mt-2">
                <span className="text-purple-400">Moderador:</span> mod@test.com
              </div>
              <div>
                <span className="text-purple-400">Contraseña:</span> 123456
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
