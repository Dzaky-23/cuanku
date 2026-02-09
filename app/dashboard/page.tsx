'use client'

import { useAuthStore } from '@/store/auth'
import LogoutButton from '@/components/ui/logout-button'

export default function DashboardPage() {
  const { user } = useAuthStore()

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hello {user?.email} :)</p>
      <LogoutButton />
    </div>
  )
}
