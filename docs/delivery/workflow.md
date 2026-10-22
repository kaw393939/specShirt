# Review and delivery workflow

<DocReview id="WORKFLOW" />

## Review through GitHub issues
1. Read the document on this site. Use **Review discussion** to open its canonical issue.
2. Comment with the section or requirement ID, a concrete concern, and a proposed change. Use **Suggest a correction** for a separate follow-up issue and reference the canonical discussion.
3. Resolve questions in the issue. Record the decision and update Markdown through a documentation pull request.
4. The project owner explicitly approves a specific commit or revision in the issue. A closed issue alone does not mean approval.
5. In a follow-up metadata change, record that approval comment URL and approved revision and set the document to Approved. Merge and publish. Substantive later edits return the document to In review and require renewed approval.

The queue shows recorded document status; it is not a live mirror of GitHub issue state. Do not automatically approve documents or close review discussions when code merges.

## States
Draft → In review → Approved. Use an existing canonical issue for the document; separate issues may track individual corrections. An issue remains useful as the decision history after review.

## Before storefront implementation
Approve the project scope, audience and brand direction, page flows, relevant requirements, visual direction, and technical constraints. Approval may be scoped to a named feature; record dependencies and remaining open decisions explicitly.

## Implementation workflow
Create a feature issue using the implementation template. Link approved requirements and review decisions. Open a PR with requirement IDs, `Closes #N` for the implementation issue, acceptance evidence, and any affected docs. Update traceability before merging. Keep the canonical review issue separate from implementation closure.

## Automated checks
`npm run docs:check` validates document metadata, review links, approval records, and requirement anchors. `npm run docs:build` also rejects broken internal page links. CI runs the build on pull requests; deployment runs on main. Repository administrators can additionally require the build check in branch protection.

## Local commands
```sh
npm ci
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## Review questions
Does issue-based approval work for the owner? Are the approval scope and revision records sufficient?
