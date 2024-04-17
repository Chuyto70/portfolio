import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css'
import { MainContainer } from './components/MainContainer';



export const metadata: Metadata = {
  title: 'Portafolio - Jesús Hurtado',
  description: 'Soy un desarrollador web con amor hacia la tecnologia',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <MainContainer children={children} />
  )
}
