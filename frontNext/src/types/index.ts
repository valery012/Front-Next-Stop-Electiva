export interface User {
  id: string
  name?: string
  email?: string
  password?: string
  role?: 'user' | 'moderator' | 'admin'
  avatar?: string
  photo?: string
  location?: string
  bio?: string
  createdAt?: string | Date
}

export interface Place {
  id: string
  name: string
  description: string
  latitude?: number
  longitude?: number
  category?: string
  rating?: number
  reviews?: number
  imageUrl?: string
  photos?: string[]
  createdAt?: string | Date
  creator?: User
  createdBy?: string
  creatorName?: string
  status?: 'pending' | 'approved' | 'rejected' | string
  rejectionReason?: string
}

export interface Notification {
  id: string
  title?: string
  userId?: string
  message: string
  type?:
    | 'new_place'
    | 'place_approved'
    | 'place_rejected'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | string
  createdAt?: string | Date
  read?: boolean
}

export interface DashboardStats {
  totalPlaces: number
  totalUsers: number
  totalNotifications?: number
  activeUsers?: number
  pendingReviews?: number
  averageRating?: number
}
