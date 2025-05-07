'use client'

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google'
import { useThemeStore } from '@/src/app/store/theme';

import 'animate.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export function MainContainer({ children }: {
  children: React.ReactNode
}) {

  const currentTheme = useThemeStore((state) => state.theme)
  return (
    <html lang="es" className={currentTheme === 'dark' ? 'dark' : ''}>
      <body data-mode="dark" className={inter.className + ' bg-[#F2F2F2] dark:bg-[#1f2937] flex justify-center pt-8 transition-all'}>
        <div className='max-w-screen-2xl relative animate__animated animate__fadeIn'>
          {children}
          <SpeedInsights />
        </div>
      </body>

    </html>
  )
}
