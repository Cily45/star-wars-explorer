import { createContext, type ReactNode, useContext, useState } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeDataContext {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeDataContext>({
  theme: 'dark',
  toggleTheme: () => {
  }
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeToggle() {
  const themeContext = useContext(ThemeContext)

  if(!themeContext){
    throw new Error('useThemeToggle must be used within ThemeProvider')
  }

  return themeContext
}