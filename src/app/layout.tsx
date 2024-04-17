import type { Metadata } from 'next'

import './globals.css'
import { MainContainer } from '@/src/app/components/MainContainer';



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
    <MainContainer >
      {children}
    </MainContainer>
  )
}
