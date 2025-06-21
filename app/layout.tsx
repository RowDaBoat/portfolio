import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Row's Portfolio",
  description: 'Projects, skills, and contact info.',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
