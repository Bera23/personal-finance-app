import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../services/firebase'

// Create the authentication context
const AuthContext = createContext()

// Google auth provider instance
const googleProvider = new GoogleAuthProvider()

// Custom hook to access auth context from any component
export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Listen for auth state changes (login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setIsLoading(false)
    })

    // Cleanup listener on unmount
    return unsubscribe
  }, [])

  // Sign in with Google popup
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error('Google sign-in error:', error)
    }
  }

  // Sign out current user
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Sign-out error:', error)
    }
  }

  const value = {
    currentUser,
    isLoading,
    signInWithGoogle,
    logout,
  }

  // Don't render children until auth state is determined
  if (isLoading) return null

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}