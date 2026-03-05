# Roadmap: Colton Carroll — Personal Portfolio

## Overview

Four phases take this project from a partially-scaffolded Astro repo to a live, polished portfolio at coltonc18.github.io. Phase 1 hardens the foundation so no misconfiguration silently corrupts later work. Phase 2 wires all static pages (Home, About, Nav, Footer, dark mode) using the Framer component integration. Phase 3 delivers the highest-value content — the Work listing and project detail pages. Phase 4 finishes with SEO infrastructure and a verified live deployment.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation** - Fix configuration, export Framer components, establish integration conventions
- [ ] **Phase 2: Core Pages** - Wire Home, About, Navigation, Footer, and dark mode using Framer components
- [ ] **Phase 3: Work / Projects** - Build projects listing and detail pages with real content from Markdown files
- [ ] **Phase 4: SEO and Deployment** - Add sitemap, OG tags, and verify the live deploy at coltonc18.github.io

## Phase Details

### Phase 1: Foundation
**Goal**: The project builds cleanly, all critical configuration errors are corrected, and Framer components are available for integration
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, FOUND-06
**Success Criteria** (what must be TRUE):
  1. `npm run build` completes with zero errors and no `window is not defined` ReferenceError
  2. `src/components/framer/` exists and contains exported React component files from the Framer project
  3. `astro.config.mjs` contains the correct `site` URL (`coltonc18.github.io`, not `coltonic19`)
  4. `tailwind.config.js` exists with `darkMode: 'class'` configured
  5. `dist/` output directory contains all expected pages after build
**Plans**: 2 plans

Plans:
- [ ] 01-01-PLAN.md — Fix astro.config.mjs site URL, create tailwind.config.js, create public/.nojekyll
- [ ] 01-02-PLAN.md — Export Framer components via unframer, populate Layout.astro and index.astro, verify build

### Phase 2: Core Pages
**Goal**: Visitors can navigate the site, read who Colton is, and toggle dark mode — with accurate real-world content on every page
**Depends on**: Phase 1
**Requirements**: NAV-01, NAV-02, NAV-03, NAV-04, HOME-01, HOME-02, HOME-03, HOME-04, ABOUT-01, ABOUT-02, ABOUT-03, DARK-01, DARK-02, DARK-03
**Success Criteria** (what must be TRUE):
  1. Navigation renders on every page and routes correctly to Home, About, and Work
  2. Home page displays Colton's real name, tagline, and correct social media profile links
  3. About page displays Colton's real background and skillset (no skills percentage bars)
  4. Dark mode toggle switches the site between light and dark, and the preference persists across page loads
  5. A 404 page renders for unknown routes
**Plans**: TBD

Plans:
- [ ] 02-01: Wire Navigation and Footer components across all pages
- [ ] 02-02: Build Home page with real content
- [ ] 02-03: Build About page with real content
- [ ] 02-04: Implement dark mode toggle with localStorage persistence

### Phase 3: Work / Projects
**Goal**: Visitors can browse Colton's projects and view individual project detail pages — with no dead-end links
**Depends on**: Phase 2
**Requirements**: WORK-01, WORK-02, WORK-03, WORK-04, WORK-05
**Success Criteria** (what must be TRUE):
  1. Work listing page at `/work` renders with at least one real project card
  2. Every project card on the listing page links to a working detail page at `/work/[slug]`
  3. At least one project detail page exists with real title, description, tech stack, and links
  4. Project content is sourced from Markdown files in `src/content/work/` (not hardcoded in components)
**Plans**: TBD

Plans:
- [ ] 03-01: Create Markdown content files for real projects
- [ ] 03-02: Build Work listing page and project detail dynamic route

### Phase 4: SEO and Deployment
**Goal**: The site is live at coltonc18.github.io with correct SEO metadata, a sitemap, and no broken asset paths
**Depends on**: Phase 3
**Requirements**: SEO-01, SEO-02, SEO-03, DEPLOY-01, DEPLOY-02, DEPLOY-03
**Success Criteria** (what must be TRUE):
  1. Every page has a unique `<title>` and `<meta name="description">`
  2. OG tags (`og:title`, `og:description`, `og:url`) are present on all pages with correct `coltonc18.github.io` URLs
  3. Sitemap is accessible at `https://coltonc18.github.io/sitemap-index.xml`
  4. GitHub Actions deploys successfully on push to `main` and the site is live at `https://coltonc18.github.io`
  5. All internal links and assets resolve correctly at the deployed URL (no 404s)
**Plans**: TBD

Plans:
- [ ] 04-01: Add SEO meta and OG tags to Layout.astro and all pages
- [ ] 04-02: Add sitemap integration and verify live deployment

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/2 | Not started | - |
| 2. Core Pages | 0/4 | Not started | - |
| 3. Work / Projects | 0/2 | Not started | - |
| 4. SEO and Deployment | 0/2 | Not started | - |
