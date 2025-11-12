import React from 'react';
import type { Notification } from '../../types';

interface NotificationCenterProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  onMarkAsRead,
  onRemove,
  onClearAll,
}) => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="w-96 bg-white rounded-lg shadow-2xl max-h-96 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">Notificaciones</h2>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
          {notifications.length > 0 && (
            <button
              onClick={onClearAll}
              className="text-sm text-gray-500 hover:text-gray-700 font-semibold"
            >
              Limpiar
            </button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <p>No tienes notificaciones</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                  !notification.read ? 'bg-blue-50' : ''
                }`}
                onClick={() => !notification.read && onMarkAsRead(notification.id)}
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">{notification.title}</p>
                    <p className="text-gray-600 text-xs mt-1">{notification.message}</p>
                    <p className="text-gray-400 text-xs mt-2">
                      {notification.createdAt ? new Date(notification.createdAt).toLocaleDateString() : 'Sin fecha'}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemove(notification.id);
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold">
            Ver todas
          </button>
        </div>
      )}
    </div>
  );
};
