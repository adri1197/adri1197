import fs from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

type Frontmatter = Record<string, unknown>

const projectRoot = process.cwd()

const parseMarkdown = async (source: string) =>
  String(await remark().use(remarkGfm).use(remarkHtml).process(source))

const readFile = async (filePath: string) => {
  const file = await fs.readFile(filePath, 'utf8')
  const { data, content } = matter(file)
  const contentHtml = await parseMarkdown(content)

  return {
    ...data,
    contentHtml,
  } as Frontmatter & { contentHtml: string }
}

export const getMarkdownCollection = async <T extends Frontmatter>(section: string) => {
  const dir = join(projectRoot, 'src', 'content', section)
  const filenames = await fs.readdir(dir)
  const records = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace(/\.md$/, '')
        const filePath = join(dir, filename)
        const record = await readFile(filePath)
        return {
          slug,
          ...record,
        } as T & { slug: string; contentHtml: string }
      }),
  )

  return records.sort((a, b) => {
    const aOrder = typeof a.order === 'number' ? a.order : 0
    const bOrder = typeof b.order === 'number' ? b.order : 0
    return aOrder - bOrder
  })
}
