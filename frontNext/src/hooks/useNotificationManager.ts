import { useState, useCallback } from 'react';
import type { Notification } from '../types';

export const useNotificationManager = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (notification: Omit<Notification, 'id' | 'createdAt' | 'read'>) => {
      const newNotification: Notification = {
        id: Math.random().toString(36).substr(2, 9),
        ...notification,
        read: false,
        createdAt: new Date().toISOString(),
      };
      setNotifications((prev: Notification[]) => [newNotification, ...prev]);
      return newNotification.id;
    },
    []
  );

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev: Notification[]) =>
      prev.map((notif: Notification) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev: Notification[]) => prev.filter((notif: Notification) => notif.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const getUnreadCount = useCallback(() => {
    return notifications.filter((notif: Notification) => !notif.read).length;
  }, [notifications]);

  return {
    notifications,
    addNotification,
    markAsRead,
    removeNotification,
    clearAll,
    getUnreadCount,
  };
};
