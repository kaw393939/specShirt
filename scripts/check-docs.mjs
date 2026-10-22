import { readFileSync, existsSync } from 'node:fs'
const docs = JSON.parse(readFileSync('docs/.vitepress/documents.json', 'utf8'))
const project = JSON.parse(readFileSync('docs/.vitepress/project.json', 'utf8'))
const errors = []
if (!/^[\w.-]+\/[\w.-]+$/.test(project.repository)) errors.push('Configure owner/repository in project.json')
const ids = new Set(), paths = new Set()
for (const doc of docs) {
  if (ids.has(doc.id) || paths.has(doc.path)) errors.push(`Duplicate document: ${doc.id}`)
  ids.add(doc.id); paths.add(doc.path)
  if (!['Draft', 'In review', 'Approved'].includes(doc.status)) errors.push(`Invalid status: ${doc.id}`)
  const file = `docs/${doc.path}.md`
  if (!existsSync(file)) { errors.push(`Missing file: ${file}`); continue }
  const content = readFileSync(file, 'utf8')
  if (!content.includes(`<DocReview id="${doc.id}" />`)) errors.push(`Missing review component: ${doc.id}`)
  if (!Number.isInteger(doc.reviewIssue) || doc.reviewIssue < 1) errors.push(`Missing canonical review issue: ${doc.id}`)
  if (doc.status === 'Approved' && (!/^[a-f0-9]{40}$/.test(doc.approvedRevision || '') || !doc.approvalUrl?.startsWith(`https://github.com/${project.repository}/issues/${doc.reviewIssue}#issuecomment-`))) errors.push(`Approved document requires commit SHA and approval comment: ${doc.id}`)
}
const functional = readFileSync('docs/requirements/functional.md', 'utf8')
const trace = readFileSync('docs/requirements/traceability.md', 'utf8')
const requirements = [...functional.matchAll(/^## ([A-Z][A-Z0-9]*-\d+) .*\{#([\w-]+)\}/gm)]
if (!requirements.length) errors.push('No requirement anchors found')
for (const [, id, anchor] of requirements) {
  if (!trace.includes(`| ${id} |`) || !trace.includes(`./functional#${anchor}`)) errors.push(`Missing traceability: ${id}`)
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Validated ${docs.length} documents, review issue references, approval metadata, and ${requirements.length} requirement anchors.`)
