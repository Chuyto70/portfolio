import type { Metadata } from 'next'

import './globals.css'
import { MainContainer } from '@/src/app/components/MainContainer';




export const metadata: Metadata = {
  title: 'Portafolio - Jesús Hurtado',
  description: 'Soy Jesús Hurtado, desarrollador web con pasión por la tecnología y la creación de experiencias digitales efectivas.',
  keywords: ['Jesús Hurtado', 'desarrollador web', 'portafolio', 'frontend', 'JavaScript', 'React', 'Next.js'],
  authors: [{ name: 'Jesús Hurtado', url: 'https://www.linkedin.com/in/jesus-hurtado-alvarez-290670168' }],
  creator: 'Jesús Hurtado',
  metadataBase: new URL('https://jesushurtado.vercel.app'),
  openGraph: {
    title: 'Portafolio - Jesús Hurtado',
    description: 'Portafolio de Jesús Hurtado, desarrollador web con experiencia en React y Next.js.',
    url: 'https://jesushurtado.vercel.app',
    siteName: 'Jesús Hurtado',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
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
