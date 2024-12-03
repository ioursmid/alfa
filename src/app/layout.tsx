import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AlfaPrime - Especialista em iPhones e Xiaomi',
  description: 'Mais de 4 anos de experiência em vendas e manutenção de smartphones.',
  metadataBase: new URL('https://ioursmid.github.io/alfa'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/alfa/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
