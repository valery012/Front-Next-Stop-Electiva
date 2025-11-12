import React from 'react';
import type { Place } from '../../types';
import { PlaceCard } from './PlaceCard';

interface PlacesListProps {
  places: Place[];
  onPlaceClick?: (place: Place) => void;
}

export const PlacesList: React.FC<PlacesListProps> = ({ places, onPlaceClick }) => {
  return (
    <div className="w-full">
      {places.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay lugares disponibles</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <div
              key={place.id}
              onClick={() => onPlaceClick?.(place)}
              className="cursor-pointer"
            >
              <PlaceCard place={place} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
