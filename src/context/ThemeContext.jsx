import { createContext, useContext, useEffect, useState } from 'react'

// Create the theme context
const ThemeContext = createContext()

// Custom hook to access theme context from any component
export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
  // Check system preference for dark mode
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || getSystemTheme()
  })

  // Apply theme class to document root and save to localStorage
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemThemeChange = (e) => {
      // Only update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme')
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // Reset to system preference
  const resetToSystemTheme = () => {
    localStorage.removeItem('theme')
    setTheme(getSystemTheme())
  }

  const value = {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    resetToSystemTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}