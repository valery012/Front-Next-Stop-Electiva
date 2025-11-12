import React, { useState } from 'react';
import { PlacesList } from '../Places/PlacesList';
import { DashboardStats } from '../UI/DashboardStats';
import type { Place, DashboardStats as DashboardStatsType } from '../../types';

const mockPlaces: Place[] = [
  {
    id: '1',
    name: 'Restaurante La Bella',
    description: 'Un hermoso restaurante italiano',
    latitude: 40.7128,
    longitude: -74.006,
    category: 'restaurant',
    rating: 4.8,
    reviews: 245,
    createdAt: new Date().toISOString(),
    creator: {
      id: 'user1',
      name: 'Juan García',
      email: 'juan@example.com',
      role: 'user',
    },
  },
];

const mockStats: DashboardStatsType = {
  totalPlaces: 1243,
  totalUsers: 5821,
  totalNotifications: 12,
  activeUsers: 324,
};

export const ModeratorDashboard: React.FC = () => {
  const [places] = useState<Place[]>(mockPlaces);
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Panel de Moderador</h1>
        <p className="text-gray-600 mb-8">Gestiona y modifica los lugares de la plataforma</p>

        {/* Stats */}
        <DashboardStats stats={mockStats} />

        {/* Filter */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Filtros</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'pending'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Pendientes
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'approved'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Aprobados
            </button>
          </div>
        </div>

        {/* Places List */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Lugares</h2>
          <PlacesList places={places} />
        </div>
      </div>
    </div>
  );
};
