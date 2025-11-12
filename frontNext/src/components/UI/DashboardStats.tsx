import React from 'react';
import type { DashboardStats as DashboardStatsType } from '../../types';

interface DashboardStatsProps {
  stats: DashboardStatsType;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  const items = [
    { label: 'Lugares Totales', value: stats.totalPlaces, color: 'bg-blue-500' },
    { label: 'Usuarios', value: stats.totalUsers, color: 'bg-green-500' },
    { label: 'Notificaciones', value: stats.totalNotifications, color: 'bg-yellow-500' },
    { label: 'Usuarios Activos', value: stats.activeUsers, color: 'bg-purple-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${item.color} text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform`}
        >
          <h3 className="text-gray-100 text-sm font-semibold mb-2">{item.label}</h3>
          <p className="text-4xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
};
