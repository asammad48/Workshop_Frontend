import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  primary: string;
  secondary: string;
  accent: string;
  setTheme: (theme: Partial<{ primary: string; secondary: string; accent: string }>) => void;
  loadTheme: () => void;
  resetTheme: () => void;
}

const DEFAULT_THEME = {
  primary: '#3b82f6',
  secondary: '#64748b',
  accent: '#f59e0b',
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      ...DEFAULT_THEME,
      setTheme: (theme) => {
        set(theme);
        const state = get();
        document.documentElement.style.setProperty('--c-primary', state.primary);
        document.documentElement.style.setProperty('--c-secondary', state.secondary);
        document.documentElement.style.setProperty('--c-accent', state.accent);
      },
      loadTheme: () => {
        const state = get();
        document.documentElement.style.setProperty('--c-primary', state.primary);
        document.documentElement.style.setProperty('--c-secondary', state.secondary);
        document.documentElement.style.setProperty('--c-accent', state.accent);
      },
      resetTheme: () => {
        set(DEFAULT_THEME);
        get().loadTheme();
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);
