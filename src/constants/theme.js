// Central design system constants
// All colors, spacing, and typography values are defined here
// Never hardcode these values elsewhere in the app

export const COLORS = {
  // Primary brand color
  primary: '#2196F3',
  primaryDark: '#0D1B4B',
  primaryLight: '#BBDEFB',

  // Transaction type colors
  income: '#00C853',
  expense: '#FF1744',
  transfer: '#FF9800',

  // Light theme
  light: {
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#212121',
    textSecondary: '#757575',
    border: '#E0E0E0',
  },

  // Dark theme
  dark: {
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#AAAAAA',
    border: '#2C2C2C',
  },
}

export const BORDER_RADIUS = {
  sm: '8px',
  md: '12px',
  lg: '20px',
  full: '9999px',
}

export const FONT_FAMILY = 'Inter, system-ui, sans-serif'