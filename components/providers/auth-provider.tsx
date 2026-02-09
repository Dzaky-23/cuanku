'use client'

import { useEffect } from 'react'
import { setupAuthListener } from '@/lib/supabase/auth-listener'

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode
}) {
    useEffect(() => {
        const { subscription } = setupAuthListener()
        return () => {
            subscription.unsubscribe()
        }
    }, [])

    return <>{children}</>
}
