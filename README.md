# White Shirt specifications

Documentation comes before the storefront. This repository contains a VitePress review site, working specifications, and GitHub issue/PR templates. The storefront has not been implemented.

- [Documentation site](https://kaw393939.github.io/specShirt/)
- [Review queue](https://kaw393939.github.io/specShirt/review.html)
- [GitHub issues](https://github.com/kaw393939/specShirt/issues)
- [Review workflow source](docs/delivery/workflow.md)

## Local development

Use Node 22 or newer.

```sh
npm ci
npm run docs:dev
npm run docs:build
npm run docs:preview
```

The default project path is `/specShirt/`. Open the URL printed by VitePress. `DOCS_BASE=/` can be used for a root-path preview.

## Structure

`docs/strategy/` defines purpose and positioning. `docs/experience/` specifies pages and design. `docs/requirements/` holds behavior and traceability. `docs/delivery/` explains architecture, review, decisions, and verification.

Review links and statuses come from `docs/.vitepress/documents.json`. Repository identity comes from `docs/.vitepress/project.json`. New specifications must be added to the registry, include their `DocReview` component, and receive a canonical review issue. Status is recorded metadata, not a live GitHub issue feed.

## Delivery

The Documentation workflow validates and builds on PRs, then publishes main to GitHub Pages using GitHub Actions. Build output is not committed. See CONTRIBUTING.md for the issue-based approval process.

VitePress 1.6.4 uses an explicit Vite 6.4.5 override to avoid advisories in its default dependency tree. Recheck compatibility and the dependency audit when upgrading.
