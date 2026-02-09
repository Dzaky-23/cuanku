'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // 🔁 redirect setelah login sukses
  useEffect(() => {
    if (success) {
      router.push("/")
    }
  }, [success, router])

  const handleLogin = async () => {
    setLoading(true)
    setErrorMsg(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setErrorMsg(error.message)
      setLoading(false)
      return
    }

    // ✅ login sukses
    setSuccess(true)
    setLoading(false)
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Login</h1>

      <div style={{ marginBottom: 8 }}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      <div style={{ marginTop: 12 }}>
        <button
          type="button"
          onClick={() => router.push("/register")}
        >
          Register
        </button>
      </div>

      {errorMsg && (
        <p style={{ color: "red", marginTop: 8 }}>{errorMsg}</p>
      )}

      {success && (
        <p style={{ marginTop: 8 }}>
          Login success, redirecting...
        </p>
      )}
    </div>
  )
}
