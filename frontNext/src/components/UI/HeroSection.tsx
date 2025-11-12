import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Tag superior */}
          <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
            <p className="text-orange-600 text-sm font-semibold flex items-center gap-2">
              ⚡ Descubre lugares auténticos
            </p>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Tu guía de lugares
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              ocultos y especiales
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Únete a una comunidad de exploradores que descubren gemas escondidas fuera de las rutas turísticas. Comparte lugares únicos, recibe recomendaciones personalizadas y explora como nunca antes.
          </p>

          {/* Botones */}
          <div className="flex gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2">
              Explorar ahora →
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-gray-400 transition-all">
              Ver demo
            </button>
          </div>

          {/* Preview de lugares */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-8 aspect-video">
            <div className="grid grid-cols-3 gap-4 h-full">
              <div className="bg-gray-700 rounded-lg"></div>
              <div className="bg-gray-700 rounded-lg"></div>
              <div className="bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
