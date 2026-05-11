import { Back } from '@/components/ui/Back'
import { Text } from '@/components/ui/Text'
import { GitHubIcon } from '@/icons/GitHub'

const WebIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const openSource = [
  {
    title: 'RFC-0011 - FluxCD OpenTelemetry Integration',
    description:
      'A Neural Cellular Automata (ARC-NCA) framework for reconstructing NDVI from RGB orthomosaic imagery and modelling spatial vegetation dynamics in precision agriculture.',
    tags: ['Python', 'AI', 'Neural Networks', 'Remote Sensing', 'Generative Model', 'Deep Learning'],
    github: 'https://github.com/adri1197/ARC-NCA-Vegetation-Dynamics',
  },
]

const personal = [
  {
    title: 'Modeling Emergent Vegetation Dynamics: An ARC-NCA Framework',
    description:
      'A Neural Cellular Automata (ARC-NCA) framework for reconstructing NDVI from RGB orthomosaic imagery and modelling spatial vegetation dynamics in precision agriculture.',
    tags: ['Python', 'AI', 'Neural Networks', 'Remote Sensing', 'Generative Model', 'Deep Learning'],
    github: 'https://github.com/adri1197/ARC-NCA-Vegetation-Dynamics',
  },
  {
    title: 'Deep Learning for Earthquake Damage Detection',
    description:
      'Portability and acceleration of deep CNN inferences to detect rapid earthquake damage from VHR remote sensing images using Intel OpenVINO toolkit. Published in IEEE JSTARS.',
    tags: ['Python', 'Deep Learning', 'OpenVINO', 'Remote Sensing'],
    github: 'https://github.com/adri1197/DP_Image-Binary-Classification',
    website: 'https://ieeexplore.ieee.org/document/9416728/',
  },
]

const ProjectCard: React.FC<{
  title: string
  description: string
  tags: string[]
  github?: string
  website?: string
}> = ({ title, description, tags, github, website }) => (
  <div className="flex flex-col gap-3 rounded-lg border bg-highlight-1 p-6 sm:p-8">
    <div className="flex items-start justify-between gap-4">
      <Text as="h3">{title}</Text>
      <div className="flex shrink-0 gap-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-1.5 transition hover:bg-highlight-2"
          >
            <GitHubIcon className="size-5 stroke-primary-2" />
          </a>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="rounded-full p-1.5 transition hover:bg-highlight-2"
          >
            <WebIcon className="size-5 stroke-primary-2" />
          </a>
        )}
      </div>
    </div>
    <Text as="p">{description}</Text>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded bg-highlight-2 px-2 py-1 text-xs text-primary-1"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

const Page = () => (
  <main className="flex flex-col gap-16 px-6 pb-32 pt-12 md:pt-20 lg:pt-28">
    <Back href="/" />

    <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-6">
      <Text as="h1">Projects</Text>
    </div>

    <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-8">
      <Text as="h2">Open Source</Text>
      <div className="flex flex-col gap-6">
        {openSource.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>

    <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-8">
      <Text as="h2">Personal Projects</Text>
      <div className="flex flex-col gap-6">
        {personal.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  </main>
)

export default Page
