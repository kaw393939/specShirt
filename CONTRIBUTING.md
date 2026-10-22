# Contributing

Read the [review workflow](docs/delivery/workflow.md) first.

1. Discuss specifications in the canonical issue linked from each page. Reference document IDs and requirement anchors.
2. Submit corrections through a documentation PR. Keep the issue linked and identify the revision under review.
3. Approval requires the project owner’s explicit issue comment naming a commit or revision. Record the comment URL and full commit SHA in documents.json in a follow-up change. Closing an issue does not grant approval.
4. Substantive edits to an approved specification return its status to In review; preserve prior approval history in the issue.
5. Begin storefront work only for an explicitly approved scope and its dependencies. Use the implementation issue template.
6. Link implementation PRs to requirements and issues, update traceability, and record acceptance evidence.

Run `npm run docs:build` before submitting. Do not publish real payment flows, fabricated reviews, or unverified product claims in this demo.
