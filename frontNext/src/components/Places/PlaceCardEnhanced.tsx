import React from 'react';
import type { Place } from '../../types';

interface PlaceCardEnhancedProps {
  place: Place;
}

export const PlaceCardEnhanced: React.FC<PlaceCardEnhancedProps> = ({ place }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
      {place.imageUrl && (
        <div className="relative">
          <img
            src={place.imageUrl}
            alt={place.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {place.category}
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{place.name}</h3>
        <p className="text-gray-600 mb-4">{place.description}</p>

        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-gray-500 text-xs font-semibold">CALIFICACIÓN</p>
            <p className="text-2xl font-bold text-yellow-500">⭐ {(place.rating ?? 0).toFixed(1)}</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-gray-500 text-xs font-semibold">RESEÑAS</p>
            <p className="text-2xl font-bold text-blue-600">{place.reviews ?? 0}</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-gray-500 text-xs font-semibold">UBICACIÓN</p>
            <p className="text-xs font-semibold text-gray-700">{(place.latitude ?? 0).toFixed(2)}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Ver en Mapa
          </button>
          <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
