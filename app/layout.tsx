import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Messenger Clone',
  description: 'Let`s chat with messenger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
