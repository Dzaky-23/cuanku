import { supabase } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth'

export const setupAuthListener = () => {
  const { setSession, clearSession } = useAuthStore.getState()

  const { data: authListener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      console.log('[AUTH EVENT]', _event)

      if (session) {
        setSession(session)
      } else {
        clearSession()
      }
    }
  )

  return authListener
}
