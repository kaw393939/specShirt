# Technical architecture

<DocReview id="TECH" />

## Current implementation
VitePress builds Markdown in `docs/` into static HTML. Browser-based local search requires no external search service. The default theme supplies navigation, an outline, light/dark modes, and edit links.

Repository identity and branch live in `docs/.vitepress/project.json`. Review metadata lives in `docs/.vitepress/documents.json`. Shared Vue components render review links and the review queue from that metadata.

## Deployment
GitHub Actions checks documentation and builds on pull requests. Pushes to main build and deploy one Pages artifact. The current docs site occupies `/specShirt/`; the storefront does not exist yet. A later reviewed change will place the storefront at the project root and documentation at `/specShirt/docs/`, with redirects for existing review links.

The build derives its base from the configured repository, with `DOCS_BASE` available for an intentional override. GitHub Pages must use GitHub Actions as its source. No secrets or runtime GitHub token are shipped to readers.

## Dependency choice
Use stable VitePress 1.6.4. Override its transitive Vite dependency to 6.4.5 to address advisories in the default dependency tree. The production build and local preview must be verified with this override. Node 22 is used in CI.

## Future storefront boundary
The approved direction is Vite with HTML, CSS, and JavaScript, static content, browser-local cart state, and simulated checkout. No storefront code is included in this phase.

## Review questions
Confirm the future URL migration plan and whether documentation should remain excluded from search indexes.
