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
      <footer className="mx-auto flex w-full max-w-6xl justify-center border-t border-primary-1/50 px-4 pb-8 pt-6 text-center text-xs text-primary-3 sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} Adrián Fernández de la Torre</p>
      </footer>
      <Analytics />
    </body>
  </html>
)

export default Layout
