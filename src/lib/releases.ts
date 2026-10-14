import { marked } from 'marked'
import translations from '../data/changelog-fr.json'

const REPO = 'Thykimik/rohfa-releases'
export const RELEASES_URL = `https://github.com/${REPO}/releases`

export interface Release {
  version: string
  date: string
  url: string
  /** Rendered notes per language; the source notes are English. */
  html: { fr: string; en: string }
  installerUrl: string | null
  installerSize: number | null
}

interface ApiRelease {
  tag_name: string
  html_url: string
  body: string | null
  draft: boolean
  prerelease: boolean
  published_at: string
  assets: { name: string; browser_download_url: string; size: number }[]
}

/**
 * Release notes start with a "## [x.y.z](compare-url) (date)" heading (the page renders its own) and
 * cite each commit/issue of the private app repo, whose links would 404 for visitors.
 */
const cleanNotes = (body: string) =>
  body
    .replace(/\r\n/g, '\n')
    .replace(/^\s*#{1,3}\s.*\n+/, '')
    .replace(/ \(\[[^\]]*\]\(https:\/\/github\.com\/Thykimik\/rohfa-app\/[^)]*\)\)/g, '')

/** GitHub-style "#12" references in older notes are auto-linked to the private app repo. */
const unlinkPrivateRepo = (html: string) =>
  html.replace(/<a href="https:\/\/github\.com\/Thykimik\/rohfa-app\/[^"]*">([^<]*)<\/a>/g, '$1')

/** Release notes are English; bullets listed in src/data/changelog-fr.json get their French text, others stay English. */
function toFrench(markdown: string, version: string): string {
  const dict = translations as Record<string, string>
  return markdown.replace(/^(\* )(.+)$/gm, (line, bullet: string, text: string) => {
    const fr = dict[text.trim()]
    if (!fr) console.warn(`[changelog] ${version}: no French translation for "${text.trim()}"`)
    return fr ? bullet + fr : line
  })
}

const render = (markdown: string) => unlinkPrivateRepo(marked.parse(markdown, { async: false }))

let cache: Promise<Release[]> | undefined

/** Fetched once at build time; an empty list (offline, rate limit) degrades to plain links to GitHub. */
export function getReleases(): Promise<Release[]> {
  cache ??= load()
  return cache
}

async function load(): Promise<Release[]> {
  const data = await fetchReleases()
  return data
    .filter((r) => !r.draft && !r.prerelease)
    .map((r) => {
      const notes = cleanNotes(r.body ?? '')
      const version = r.tag_name.replace(/^v/, '')
      const installer = r.assets.find((a) => a.name.endsWith('-setup.exe'))
      return {
        version,
        date: r.published_at,
        url: r.html_url,
        html: { fr: render(toFrench(notes, version)), en: render(notes) },
        installerUrl: installer?.browser_download_url ?? null,
        installerSize: installer?.size ?? null,
      }
    })
}

/** Only the network call is allowed to fail softly; a bug in the mapping above should break the build. */
async function fetchReleases(): Promise<ApiRelease[]> {
  try {
    const token = process.env.GITHUB_TOKEN
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=100`, {
      headers: { Accept: 'application/vnd.github+json', ...(token && { Authorization: `Bearer ${token}` }) },
    })
    if (!res.ok) throw new Error(`GitHub API ${res.status}`)
    return (await res.json()) as ApiRelease[]
  } catch (err) {
    console.warn(`[releases] ${err instanceof Error ? err.message : err}: building without release data`)
    return []
  }
}
