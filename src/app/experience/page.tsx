import { Back } from '@/components/ui/Back'
import { Text } from '@/components/ui/Text'

const timeline = [
  {
    role: 'Platform Architect',
    company: 'Ericsson',
    period: 'Nov 2025 – Present',
    description:
      'Designing and building scalable cloud-native platforms. Leading the architecture of AI-native Internal Developer Platforms (IDP). Contributing to CNCF projects and driving DevSecOps practices across engineering teams.',
  },
  {
    role: 'DevSecOps Engineer',
    company: 'Ericsson',
    period: 'Sept 2024 – Nov 2025',
    description:
      'Designing and building scalable cloud-native platforms. Leading the architecture of AI-native Internal Developer Platforms (IDP). Contributing to CNCF projects and driving DevSecOps practices across engineering teams.',
  },
  {
    role: 'DevOps Engineer',
    company: 'Ericsson',
    period: 'Sept 2024 – Nov 2025',
    description:
      'Designing and building scalable cloud-native platforms. Leading the architecture of AI-native Internal Developer Platforms (IDP). Contributing to CNCF projects and driving DevSecOps practices across engineering teams.',
  },
  {
    role: 'Implementation Engineer Intern',
    company: 'Ericsson',
    period: 'Sept 2024 – Nov 2025',
    description:
      'Designing and building scalable cloud-native platforms. Leading the architecture of AI-native Internal Developer Platforms (IDP). Contributing to CNCF projects and driving DevSecOps practices across engineering teams.',
  },
  {
    role: 'IT Consultant Intern',
    company: 'Ericsson',
    period: 'Sept 2024 – Nov 2025',
    description:
      'Designing and building scalable cloud-native platforms. Leading the architecture of AI-native Internal Developer Platforms (IDP). Contributing to CNCF projects and driving DevSecOps practices across engineering teams.',
  },
]

const certifications = [
  { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', date: 'Mar 2023' },
  { name: 'Kubernetes Admin & Container-based Application Security', issuer: 'Component Soft', date: 'May 2021' },
  { name: 'SAFe® 5 Agilist', issuer: 'Scaled Agile', date: 'Dec 2021' },
  { name: 'Architecting with Google Kubernetes Engine', issuer: 'Coursera', date: 'Oct 2020' },
  { name: 'Advanced ML with TensorFlow on GCP', issuer: 'Coursera', date: 'Sep 2020' },
  { name: 'Improving Deep Neural Networks', issuer: 'Coursera', date: 'Dec 2020' },
  { name: 'NLP in TensorFlow', issuer: 'Coursera', date: 'Nov 2020' },
  { name: '70-774: Cloud Data Science with Azure ML', issuer: 'Microsoft', date: 'Apr 2019' },
  { name: 'Introduction to Packet Tracer', issuer: 'Cisco', date: 'Dec 2021' },
]

const Page = () => (
  <main className="flex flex-col gap-12 px-6 pb-32 pt-12 md:pt-20 lg:pt-28">
    <Back href="/" />

    <div className="mx-auto w-full max-w-screen-lg">
      <Text as="h1">Experience</Text>
    </div>

    <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
      {/* Left: Experience timeline */}
      <div className="flex flex-col gap-6">
        <Text as="h2">Work</Text>

        <div className="relative">
          <div className="absolute left-1.5 top-2 h-[calc(100%-1rem)] w-px bg-primary-1" />

          <div className="flex flex-col gap-8">
            {timeline.map((item) => (
              <div key={item.role} className="relative pl-8">
                <div className="absolute left-0 top-2 size-3 rounded-full bg-primary-3" />
                <div className="flex flex-col gap-1">
                  <Text as="h3">{item.role}</Text>
                  <Text size="sm" color={1}>
                    {item.company} · {item.period}
                  </Text>
                  <Text as="p" className="mt-1">
                    {item.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Certifications */}
      <div className="flex flex-col gap-6">
        <Text as="h2">Certifications</Text>

        <div className="flex flex-col gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col gap-1 rounded border bg-highlight-1 p-4"
            >
              <Text size="sm" color={3}>
                {cert.name}
              </Text>
              <Text size="xs" color={1}>
                {cert.issuer} · {cert.date}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
)

export default Page
