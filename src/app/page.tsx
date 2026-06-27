import { getMarkdownCollection } from '@/lib/markdown'
import { Text } from '@/components/ui/Text'
import { GitHubIcon } from '@/icons/GitHub'

type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  github?: string
  website?: string
  category?: string
  contentHtml: string
}

type Experience = {
  slug: string
  role: string
  company: string
  period: string
  location?: string
  contentHtml: string
}

const WebIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 0 20" />
  </svg>
)

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  tags,
  github,
  website,
  contentHtml,
}) => (
  <article className="rounded-3xl border border-primary-1 bg-highlight-1 p-5 shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-highlight-2 sm:p-6">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div className="flex-1">
        <Text as="h3" size="xl" className="mb-3">
          {title}
        </Text>
        <Text as="p" className="text-primary-2">
          {description}
        </Text>
      </div>
      <div className="flex flex-wrap gap-2 text-[0.7rem] sm:text-sm">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-primary-2 px-3 py-1 text-theme"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div
      className="mt-6 space-y-4 text-sm leading-relaxed text-primary-2"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />

    <div className="mt-6 flex items-center gap-3">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-theme text-primary-1 transition duration-200 hover:bg-highlight-2"
        >
          <GitHubIcon className="size-6 stroke-primary-2" />
        </a>
      )}
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          aria-label="Website"
          className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-theme text-primary-1 transition duration-200 hover:bg-highlight-2"
        >
          <WebIcon className="size-6 stroke-primary-2" />
        </a>
      )}
    </div>
  </article>
)

const ExperienceCard: React.FC<Experience> = ({
  role,
  company,
  period,
  location,
  contentHtml,
}) => (
  <article className="rounded-3xl border border-primary-1 bg-highlight-1 p-5 shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-highlight-2 sm:p-6">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Text as="h3" size="xl">
          {role}
        </Text>
        <Text size="sm" color={3} className="mt-1 block">
          {company} · {period}
        </Text>
      </div>
      {location && (
        <Text
          size="sm"
          color={3}
          className="rounded-full border border-primary-1 px-3 py-1"
        >
          {location}
        </Text>
      )}
    </div>

    <div
      className="mt-6 space-y-4 text-sm leading-relaxed text-primary-2"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  </article>
)

const groupProjectsByCategory = (projects: Project[]) =>
  projects.reduce<Record<string, Project[]>>((acc, project) => {
    const category = project.category || 'Projects'
    acc[category] = [...(acc[category] || []), project]
    return acc
  }, {})

const Page = async () => {
  const projects = await getMarkdownCollection<Project>('projects')
  const experience = await getMarkdownCollection<Experience>('experience')
  const projectsByCategory = groupProjectsByCategory(projects)

  return (
    <main className="min-h-screen bg-theme px-4 pb-24 pt-16 text-primary-2 sm:px-8 lg:px-12">
      <section className="mx-auto w-full max-w-full flex flex-col gap-10">
        <div className="flex w-full flex-col items-center gap-8 text-center px-4 md:px-8 lg:px-12">
          <Text
            as="h1"
            className="w-full text-4xl leading-tight sm:text-5xl lg:text-7xl xl:text-8xl"
          >
            Adrián Fernández
            <br />
            de la Torre
          </Text>

          <Text as="p" className="w-full text-base leading-relaxed text-primary-2 sm:text-lg lg:text-xl">
            Platform Architect. Open Source Contributor. Cloud-native systems design with a focus on secure, scalable developer platforms.
          </Text>

          <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 self-stretch sm:flex-row sm:gap-6 lg:max-w-screen-md lg:gap-8">
            <a
              href="#projects"
              className="flex flex-1 justify-center rounded bg-highlight-1 p-3 transition-colors hover:bg-highlight-2 sm:p-4 lg:p-5"
            >
              <Text size="md">Projects</Text>
            </a>
            <a
              href="#experience"
              className="flex flex-1 justify-center rounded bg-highlight-1 p-3 transition-colors hover:bg-highlight-2 sm:p-4 lg:p-5"
            >
              <Text size="md">Experience</Text>
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto mt-24 w-full max-w-6xl">
        <Text as="h2" size="2xl" className="mb-10 text-center">
          Portfolio
        </Text>

        <div className="grid gap-10">
          {Object.entries(projectsByCategory).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <Text as="h3" size="xl" className="text-primary-1">
                {category}
              </Text>
              <div className="grid gap-8">
                {items.map((project) => (
                  <ProjectCard key={project.slug} {...project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto mt-24 w-full max-w-6xl">
        <Text as="h2" size="2xl" className="mb-10 text-center">
          Experience
        </Text>

        <div className="grid gap-8">
          {experience.map((item) => (
            <ExperienceCard key={item.slug} {...item} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Page
