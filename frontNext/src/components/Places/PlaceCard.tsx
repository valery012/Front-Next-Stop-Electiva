import React from 'react';
import type { Place } from '../../types';

interface PlaceCardProps {
  place: Place;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {place.imageUrl && (
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{place.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{place.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{place.category}</span>
          <span>⭐ {(place.rating ?? 0).toFixed(1)}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};
