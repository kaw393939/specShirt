import { defineConfig } from 'vitepress'
import project from './project.json'
import documents from './documents.json'
const repo = `https://github.com/${project.repository}`
const name = project.repository.split('/')[1]
const base = process.env.DOCS_BASE || (name.endsWith('.github.io') ? '/' : `/${name}/`)
export default defineConfig({
  title: 'White Shirt Project',
  description: 'A simple, step-by-step plan for building a white T-shirt website.',
  lang: 'en-US', base,
  head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],
  themeConfig: {
    siteTitle: 'White Shirt Project',
    nav: [{ text: 'Start here', link: '/' }, { text: 'How we work', link: '/working-together' }],
    sidebar: [{ text: 'Our website plan', items: [{ text: 'Start here', link: '/' }, ...documents.map(d => ({ text: d.title, link: `/${d.path}` })), { text: 'How we work', link: '/working-together' }] }],
    search: { provider: 'local' },
    editLink: { pattern: `${repo}/edit/${project.branch}/docs/:path`, text: 'View or edit this page on GitHub' },
    socialLinks: [{ icon: 'github', link: repo }],
    outline: [2, 2],
    footer: { message: 'Plan first. Build together.' }
  }
})
