'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeStore = {
    theme: string | '';
    setDarkTheme: () => void;
    setLightTheme: () => void;
  }

  const getInitialTheme = (): string => {
    if (typeof window !== 'undefined') {
      const storedTheme = window.localStorage.getItem('theme');
      return storedTheme ? storedTheme : '';
    } else {
      return ''; // Or some default theme value
    }
  };
  
  
export const useThemeStore = create(
  persist<ThemeStore>(
    (set, get) => ({
      theme: getInitialTheme(),
      setDarkTheme: () => set({ theme: 'dark' }),
      setLightTheme: () => set({ theme: '' })
    }),
    {
      name: 'theme', // name of the item in the storage (must be unique
      
    },
  ),
)