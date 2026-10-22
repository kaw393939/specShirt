import { defineConfig } from 'vitepress'
import project from './project.json'
import documents from './documents.json'
const repo = `https://github.com/${project.repository}`
const name = project.repository.split('/')[1]
const base = process.env.DOCS_BASE || (name.endsWith('.github.io') ? '/' : `/${name}/`)
const group = (text: string, prefix: string) => ({ text, items: documents.filter(d => d.path.startsWith(prefix)).map(d => ({ text: d.title, link: `/${d.path}` })) })
export default defineConfig({
  title: 'White Shirt / Project Docs',
  description: 'Brand strategy, specifications, review decisions, and delivery evidence for a white T-shirt storefront.',
  lang: 'en-US', base, lastUpdated: true,
  head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],
  themeConfig: {
    siteTitle: 'White Shirt · Specs',
    nav: [{ text: 'Overview', link: '/' }, { text: 'Review queue', link: '/review' }, { text: 'Requirements', link: '/requirements/traceability' }, { text: 'GitHub', link: repo }],
    sidebar: [{ text: 'Start here', items: [{ text: 'Project overview', link: '/' }, { text: 'Review queue', link: '/review' }] }, group('Strategy', 'strategy/'), group('Experience', 'experience/'), group('Requirements', 'requirements/'), group('Delivery', 'delivery/')],
    search: { provider: 'local' },
    editLink: { pattern: `${repo}/edit/${project.branch}/docs/:path`, text: 'Edit this page on GitHub' },
    socialLinks: [{ icon: 'github', link: repo }],
    outline: [2, 3],
    footer: { message: 'Specifications first. Storefront implementation has not started.' }
  }
})
