import Link from 'next/link'

import { Text } from '@/components/ui/Text'

const Page = () => (
  <main className="flex min-h-screen w-full flex-col items-center justify-center gap-12 p-6">
    <Text
      as="h1"
      className="text-center text-5xl leading-none sm:text-7xl lg:text-9xl"
    >
      Adrián Fernández
      <br />
      de la Torre
    </Text>

    <Text as="p" className="max-w-screen-sm text-center">
      Designing scalable cloud-native systems and contributing to the Open Source ecosystem.
    </Text>

    <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-4 self-stretch sm:flex-row sm:gap-6 lg:max-w-screen-md lg:gap-8">
      <Link
        href="/projects"
        className="flex flex-1 justify-center rounded bg-highlight-1 p-3 transition-colors hover:bg-highlight-2 sm:p-4 lg:p-5"
      >
        <Text size="md">Projects</Text>
      </Link>
      <Link
        href="/experience"
        className="flex flex-1 justify-center rounded bg-highlight-1 p-3 transition-colors hover:bg-highlight-2 sm:p-4 lg:p-5"
      >
        <Text size="md">Experience</Text>
      </Link>
    </div>
  </main>
)

export default Page
