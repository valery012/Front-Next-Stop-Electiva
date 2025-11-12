import React from 'react';
import type { Notification } from '../../types';

interface ToastNotificationProps {
  notification: Notification;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  notification,
  onClose,
}) => {
  const bgColor = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  }[notification.type || 'info'];

  const icon = {
    info: 'ℹ️',
    success: '✓',
    warning: '⚠️',
    error: '✕',
  }[notification.type || 'info'];

  React.useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-between animate-slide-in`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <div>
          <h3 className="font-bold text-sm">{notification.title}</h3>
          <p className="text-sm opacity-90">{notification.message}</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="text-white hover:opacity-75 transition-opacity font-bold text-lg"
      >
        ×
      </button>
    </div>
  );
};
