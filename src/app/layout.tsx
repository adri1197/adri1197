import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'

import { SocialLinks } from '@/components/ui/SocialLinks'
import '@/styles/tailwind.css'
import { LayoutProps } from '@/types/next'
import { cn } from '@/utils/cn'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Adrian's Portfolio",
  description: 'Platform Architect. Open Source Contributor. Cloud-Native Enthusiast.',
  metadataBase: new URL('https://adri1197.github.io'),
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <html lang="en" data-theme="dark">
    <body
      className={cn(
        'bg-theme font-sans text-primary-2',
        sans.variable,
        serif.variable,
      )}
    >
      <SocialLinks />
      {children}
      <Analytics />
    </body>
  </html>
)

export default Layout
