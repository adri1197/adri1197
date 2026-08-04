import Link from 'next/link'

import { cn } from '@/utils/cn'

type BackProps = {
  href: string
  className?: string
}

export const Back: React.FC<BackProps> = ({ href, className }) => (
  <Link
    href={href}
    aria-label="Go back"
    className={cn(
      'flex size-10 items-center justify-center rounded-full transition-colors hover:bg-highlight-2',
      className,
    )}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 stroke-primary-2"
    >
      <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
    </svg>
  </Link>
)
