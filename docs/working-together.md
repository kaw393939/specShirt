# How we work

Our process is **read → discuss → agree → build → check**.

## 1. Read and discuss

Read one step at a time. Click **Share feedback** to open its GitHub issue. An **issue** is a discussion about a question or task. You’ll need a GitHub account to comment.

Try a comment like:

> On “Plan the pages,” I think the size guide should be next to the size buttons because that’s where I would need it.

Use the existing discussion for that step. You don’t need to open a new issue for every suggestion.

## 2. Agree on the plan

We update the page to reflect the discussion. The project owner or instructor then leaves a comment such as:

> I’ve read the updated brand page. This version is approved and ready to use.

Approval applies to the page version discussed. We’ll save a link to that comment and the reviewed version in the issue. If the plan changes substantially, we discuss and approve the new version. Closing an issue by itself does not mean the plan is approved.

The three plan steps currently need review. We’ll agree on the relevant steps before starting the store.

## 3. Build one feature at a time

Once a feature is approved, create a short issue describing the task and linking to its checklist section. For example: **“Let visitors choose a shirt size — CART-01.”**

A **pull request**, or PR, is a proposed change to files in the repository. Its description should link the task issue, explain what changed, and say how it was checked. The PR shows the code changes.

## 4. Check and finish

Try the checklist steps. Fix problems, then merge the PR and update the checklist’s results table with links to the issue and PR. **Merge** means accepting the changes into the main version of the project.

That gives us a simple connection:

**Plan page → task issue → pull request and code → check result**

## Useful words

| Word | Meaning here |
| --- | --- |
| Repository | The GitHub folder containing our documents and code. |
| Specification | A written plan for what we want to build. |
| Issue | A discussion or task on GitHub. |
| Pull request | A proposed change that we review before accepting. |
| Vite | The tool we’ll use to develop and build the store. |
| VitePress | The tool that turns these documents into a website. |
| GitHub Pages | The service that publishes our website. |

## For anyone editing the project

Edit the Markdown files in `docs/`. Markdown is plain text with simple formatting. The GitHub edit link at the bottom of each page opens its source.

To run the documentation locally, use Node 22 or newer:

```sh
npm ci
npm run docs:dev
```

Before publishing a change:

```sh
npm run docs:build
```

GitHub checks pull requests and automatically publishes changes merged into `main`. The three discussion links and recorded statuses are maintained in `docs/.vitepress/documents.json`; this is not a live issue feed.
