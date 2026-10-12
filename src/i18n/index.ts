import { fr } from './fr'
import { en } from './en'

export type Lang = 'fr' | 'en'
export type PageKey = 'home' | 'docs' | 'faq' | 'changelog' | 'roadmap'
export type Dict = typeof fr

const dicts: Record<Lang, Dict> = { fr, en }
export const t = (lang: Lang): Dict => dicts[lang]

const paths: Record<PageKey, string> = { home: '', docs: 'docs/', faq: 'faq/', changelog: 'changelog/', roadmap: 'roadmap/' }

/** Absolute site path of a page; French lives at the root, English under /en/. */
export function href(lang: Lang, page: PageKey): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${lang === 'en' ? '/en' : ''}/${paths[page]}`
}

export const dateFormat = (lang: Lang, iso: string) =>
  new Date(iso).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
