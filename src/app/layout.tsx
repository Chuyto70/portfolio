import type { Metadata } from "next";

import "./globals.css";
import { MainContainer } from "@/src/app/components/MainContainer";

export const metadata: Metadata = {
  title: "Portafolio - Jesús Hurtado",
  description:
    "Soy Jesús Hurtado, desarrollador web con pasión por la tecnología y la creación de experiencias digitales efectivas.",
  keywords: [
    "Jesús Hurtado",
    "desarrollador web",
    "programador",
    "programación",
    "portafolio",
    "frontend",
    "JavaScript",
    "React",
    "Next.js",
    "web",
    "web development",
  ],
  authors: [
    {
      name: "Jesús Hurtado",
      url: "https://www.linkedin.com/in/jesus-hurtado-alvarez-290670168",
    },
  ],
  creator: "Jesús Hurtado",
  metadataBase: new URL("https://jesushurtado.vercel.app"),
  openGraph: {
    title: "Portafolio - Jesús Hurtado",
    description:
      "Portafolio de Jesús Hurtado, desarrollador web con experiencia en React y Next.js.",
    url: "https://jesushurtado.vercel.app",
    siteName: "Jesús Hurtado",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://jesushurtado.vercel.app/logo-removebg-preview.png", // Ruta absoluta
        width: 500,
        height: 500,
        alt: "Jesús Hurtado - Desarrollador Web",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainContainer>{children}</MainContainer>;
}
