import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type ThemeStore = {
    theme: 'dark' | '';
    setDarkTheme: () => void;
    setLightTheme: () => void;
  }

const getInitialTheme = (): 'dark' | '' => {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme !== null ? storedTheme : 'dark';
}
  
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