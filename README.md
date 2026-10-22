# White Shirt Project

We’re planning a white T-shirt website before building it.

**[Start with the project guide](https://kaw393939.github.io/specShirt/)**

The plan has three steps:

1. [Choose the brand](https://kaw393939.github.io/specShirt/brand.html) — discuss in [#2](https://github.com/kaw393939/specShirt/issues/2).
2. [Plan the pages](https://kaw393939.github.io/specShirt/site-plan.html) — discuss in [#4](https://github.com/kaw393939/specShirt/issues/4).
3. [Agree on the checklist](https://kaw393939.github.io/specShirt/build-checklist.html) — discuss in [#6](https://github.com/kaw393939/specShirt/issues/6).

New to issues and pull requests? Read [How we work](https://kaw393939.github.io/specShirt/working-together.html).

## Run the docs locally

Use Node 22 or newer:

```sh
npm ci
npm run docs:dev
```

Open the `/specShirt/` address printed in the terminal. To check a change:

```sh
npm run docs:build
npm run docs:preview
```

The main pages are Markdown files directly in `docs/`. VitePress turns them into a static website; GitHub Actions checks changes and publishes `main` to GitHub Pages. Discussion links are in `docs/.vitepress/documents.json`.

The storefront has not been built. It will use Vite, run without a backend server, and offer a pretend checkout.

Older documentation addresses lead to short moved-page notices. The previous review issues were consolidated into the three discussions above.

Dependency note: stable VitePress 1.6.4 uses a Vite 6.4.5 override to address advisories in its default dependencies. Verify the build and audit when updating it.
