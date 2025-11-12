import React from 'react';
import { HeroSection } from '../UI/HeroSection';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      {/* Sección ¿Por qué Next Stop? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            ¿Por qué Next Stop?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Característica 1 */}
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                📍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Descubre Gemas Ocultas</h3>
              <p className="text-gray-600">
                Accede a una base de datos creciente de lugares auténticos, fuera de las rutas turísticas convencionales.
              </p>
            </div>

            {/* Característica 2 */}
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                👥
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comunidad Global</h3>
              <p className="text-gray-600">
                Conecta con viajeros de todo el mundo que comparten tu pasión por explorar y descubrir nuevas experiencias.
              </p>
            </div>

            {/* Característica 3 */}
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Recomendaciones con IA</h3>
              <p className="text-gray-600">
                Obtén sugerencias personalizadas basadas en tus intereses y preferencias de viaje únicos.
              </p>
            </div>

            {/* Característica 4 */}
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                🌍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mapas Interactivos</h3>
              <p className="text-gray-600">
                Visualiza lugares en mapas interactivos con coordenadas GPS precisas y direcciones directas.
              </p>
            </div>

            {/* Característica 5 */}
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                🔍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Filtros Avanzados</h3>
              <p className="text-gray-600">
                Busca por categoría, ubicación, clasificación y más para encontrar exactamente lo que buscas.
              </p>
            </div>

            {/* Característica 6 */}
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                ✅
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verificado y Moderado</h3>
              <p className="text-gray-600">
                Cada lugar es revisado por moderadores para garantizar calidad y autenticidad en la plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Categorías */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Categorías de Lugares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white font-bold text-xl flex items-center justify-center h-32 cursor-pointer hover:shadow-lg transition-all">
              🍽️ Restaurantes
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white font-bold text-xl flex items-center justify-center h-32 cursor-pointer hover:shadow-lg transition-all">
              🌿 Naturales
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white font-bold text-xl flex items-center justify-center h-32 cursor-pointer hover:shadow-lg transition-all">
              🏨 Hoteles
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white font-bold text-xl flex items-center justify-center h-32 cursor-pointer hover:shadow-lg transition-all">
              🎨 Miradores
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            ¿Listo para tu siguiente parada?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de exploradores descubriendo los lugares más especiales del mundo.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all">
            Comienza tu exploración
          </button>
        </div>
      </section>
    </div>
  );
};
