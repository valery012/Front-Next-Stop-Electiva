import React, { useState } from 'react';
import { PlacesList } from '../Places/PlacesList';
import { DashboardStats } from '../UI/DashboardStats';
import { MapView } from '../Places/MapView';
import type { Place, DashboardStats as DashboardStatsType } from '../../types';

const mockPlaces: Place[] = [
  {
    id: '1',
    name: 'Restaurante La Bella',
    description: 'Un hermoso restaurante italiano con comida auténtica',
    latitude: 40.7128,
    longitude: -74.006,
    category: 'restaurant',
    rating: 4.8,
    reviews: 245,
    imageUrl: 'https://via.placeholder.com/300x200?text=Restaurant',
    createdAt: new Date().toISOString(),
    creator: {
      id: 'user1',
      name: 'Juan García',
      email: 'juan@example.com',
      role: 'user',
    },
  },
  {
    id: '2',
    name: 'Parque Central',
    description: 'Hermoso parque con vistas espectaculares',
    latitude: 40.785,
    longitude: -73.968,
    category: 'park',
    rating: 4.5,
    reviews: 512,
    imageUrl: 'https://via.placeholder.com/300x200?text=Park',
    createdAt: new Date().toISOString(),
    creator: {
      id: 'user2',
      name: 'María López',
      email: 'maria@example.com',
      role: 'user',
    },
  },
  {
    id: '3',
    name: 'Museo de Arte',
    description: 'Galería de arte moderno y clásico',
    latitude: 40.761,
    longitude: -73.981,
    category: 'museum',
    rating: 4.3,
    reviews: 189,
    imageUrl: 'https://via.placeholder.com/300x200?text=Museum',
    createdAt: new Date().toISOString(),
    creator: {
      id: 'user3',
      name: 'Carlos Rodríguez',
      email: 'carlos@example.com',
      role: 'user',
    },
  },
];

const mockStats: DashboardStatsType = {
  totalPlaces: 1243,
  totalUsers: 5821,
  totalNotifications: 42,
  activeUsers: 324,
};

export const HomePage: React.FC = () => {
  const [places] = useState<Place[]>(mockPlaces);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>

          {/* Stats */}
          <DashboardStats stats={mockStats} />

          {/* Map View */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mapa de Lugares</h2>
            <MapView places={places} height="500px" />
          </div>

          {/* Places List */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Lugares Destacados</h2>
            <PlacesList places={places} />
          </div>
        </div>
      </div>
    </div>
  );
};
