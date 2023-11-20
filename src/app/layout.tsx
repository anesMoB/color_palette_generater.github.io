import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ImageProvider } from '@/context/photo_context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Color palette Generator',
  description: 'a siteweb that help you to generate a color palette from an image',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ImageProvider >

      <body className='app'>{children}</body>

      </ImageProvider>
    </html>
  )
}
