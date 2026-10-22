import { readFileSync, existsSync } from 'node:fs'
const docs = JSON.parse(readFileSync('docs/.vitepress/documents.json', 'utf8'))
const project = JSON.parse(readFileSync('docs/.vitepress/project.json', 'utf8'))
const errors = []
if (!/^[\w.-]+\/[\w.-]+$/.test(project.repository)) errors.push('Configure owner/repository in project.json')
const ids = new Set(), paths = new Set()
for (const doc of docs) {
  if (ids.has(doc.id) || paths.has(doc.path)) errors.push(`Duplicate page: ${doc.id}`)
  ids.add(doc.id); paths.add(doc.path)
  if (!['Draft', 'In review', 'Approved'].includes(doc.status)) errors.push(`Invalid status: ${doc.id}`)
  const file = `docs/${doc.path}.md`
  if (!existsSync(file)) { errors.push(`Missing file: ${file}`); continue }
  if (!readFileSync(file, 'utf8').includes(`<DocReview id="${doc.id}" />`)) errors.push(`Missing discussion link: ${doc.id}`)
  if (!Number.isInteger(doc.reviewIssue) || doc.reviewIssue < 1) errors.push(`Missing review issue: ${doc.id}`)
  if (doc.status === 'Approved' && !doc.approvalUrl?.startsWith(`https://github.com/${project.repository}/issues/${doc.reviewIssue}#issuecomment-`)) errors.push(`Link the owner's approval comment: ${doc.id}`)
}
const checklist = readFileSync('docs/build-checklist.md', 'utf8')
const features = ['CART-01', 'CART-02', 'CHECKOUT-01', 'SEO-01', 'A11Y-01']
for (const id of features) {
  if (!checklist.includes(`{#${id.toLowerCase()}}`) || !checklist.includes(`Reference: **${id}**`) || !checklist.includes(`| ${id}:`)) errors.push(`Missing checklist section or result row: ${id}`)
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Checked ${docs.length} plan pages, discussion links, and ${features.length} feature references.`)
