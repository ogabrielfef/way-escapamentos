import "./globals.css"
import type { ReactNode } from "react"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/layout/WhatsAppButton"

import { Roboto, Poppins } from "next/font/google"

const bodyFont = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
})

const displayFont = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
})

export const metadata = {
  title: "Way Escapamentos",
  description: "Escapamentos automotivos com qualidade e segurança.",

  openGraph: {
    title: "Way Escapamentos",
    description: "Escapamentos automotivos com qualidade e segurança.",
    url: "https://wayescapamentos.com.br",
    siteName: "Way Escapamentos",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

