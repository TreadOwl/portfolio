import type { Metadata } from 'next'
import { JetBrains_Mono, Noto_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'A \\ G',
  description: '@Gusain, Ayush : TreadOwl',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn('h-full', 'antialiased', jetbrainsMono.variable, notoSans.variable)}>
      <body className="min-h-full">{children}</body>
    </html>
  )
}
