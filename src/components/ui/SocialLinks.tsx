import { GitHubIcon } from '@/icons/GitHub'
import { LinkedInIcon } from '@/icons/LinkedIn'

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export const SocialLinks = () => (
  <nav className="fixed right-4 top-4 z-20 flex gap-3 sm:right-6 sm:top-6 lg:right-8 lg:top-8">
    <a
      href="https://www.linkedin.com/in/adrian-fdez-de-la-torre"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="rounded-full p-2 transition hover:bg-highlight-2"
    >
      <LinkedInIcon className="size-5 stroke-primary-2 sm:size-6" />
    </a>
    <a
      href="mailto:adri1197@gmail.com"
      aria-label="Gmail"
      className="rounded-full p-2 transition hover:bg-highlight-2"
    >
      <MailIcon className="size-5 stroke-primary-2 sm:size-6" />
    </a>
    <a
      href="https://github.com/adri1197"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="rounded-full p-2 transition hover:bg-highlight-2"
    >
      <GitHubIcon className="size-5 stroke-primary-2 sm:size-6" />
    </a>
  </nav>
)
