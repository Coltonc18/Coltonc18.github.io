# Requirements: Colton Carroll Personal Portfolio

**Defined:** 2026-03-04
**Core Value:** Visitors can immediately understand who Colton is, what he's built, and how to reach him — delivered via a polished Framer design running as a fast, statically-generated Astro site.

## v1 Requirements

### Foundation

- [x] **FOUND-01**: `astro.config.mjs` has correct `site` URL (`coltonc18.github.io`, not `coltonic19`)
- [x] **FOUND-02**: `tailwind.config.js` exists with `darkMode: 'class'` to sync with Framer's dark mode mechanism
- [x] **FOUND-03**: `public/.nojekyll` file exists to prevent GitHub Pages from stripping `_astro/` build output
- [x] **FOUND-04**: Framer components are accessible for use in Phase 2 via Framer CDN `insertUrl` imports (unframer CLI requires paid subscription; MCP insertUrl approach chosen instead — no local JS files needed)
- [x] **FOUND-05**: `framer/styles.css` is imported once globally in `src/layouts/Layout.astro`
- [x] **FOUND-06**: Site builds successfully with `npm run build` and `dist/` contains all expected pages

### Navigation & Layout

- [x] **NAV-01**: Top Navigation Framer component renders on all pages via CDN insertUrl import (`https://framer.com/m/Top-Navigation-XPU7n1.js`) with `client:load` directive
- [x] **NAV-02**: Footer Framer component renders on all pages via CDN insertUrl import (`https://framer.com/m/Footer-3Fy7ch.js`) with `client:load` directive
- [ ] **NAV-03**: Nav links route correctly to Home, About, and Work pages
- [x] **NAV-04**: 404 page renders for unknown routes

### Home Page

- [ ] **HOME-01**: Home page (`/`) renders the Framer Home page design
- [ ] **HOME-02**: Headline and intro text updated to reflect Colton's real name and tagline
- [ ] **HOME-03**: Social media links (GitHub, LinkedIn, etc.) updated to Colton's real profiles
- [ ] **HOME-04**: Call-to-action links route to correct pages (Work, About, or external)

### About Page

- [ ] **ABOUT-01**: About page (`/about`) renders the Framer About page design
- [ ] **ABOUT-02**: Bio and background text updated to Colton's real experience
- [ ] **ABOUT-03**: Skills/experience section reflects Colton's actual skillset (no skills percentage bars)

### Work / Projects

- [ ] **WORK-01**: Work listing page (`/work`) renders with Project Card components
- [ ] **WORK-02**: Project content is sourced from Markdown/MDX files in `src/content/work/`
- [ ] **WORK-03**: Individual project detail pages (`/work/[slug]`) generate statically via `getStaticPaths()`
- [ ] **WORK-04**: At least one real project entry exists as a Markdown file with correct frontmatter
- [ ] **WORK-05**: Project Cards on listing page link to correct detail page slugs

### Dark Mode

- [ ] **DARK-01**: Dark mode toggle in Nav switches the `dark` class on the `<html>` element
- [ ] **DARK-02**: Framer color styles (light/dark CSS variables) respond correctly to the `dark` class
- [x] **DARK-03**: Dark mode preference persists across page navigation (localStorage)

### SEO & Meta

- [ ] **SEO-01**: Each page has a unique `<title>` and `<meta name="description">`
- [ ] **SEO-02**: OG tags (`og:title`, `og:description`, `og:url`) are present on all pages
- [ ] **SEO-03**: Sitemap generates at `/sitemap-index.xml` via `@astrojs/sitemap`

### Deployment

- [ ] **DEPLOY-01**: GitHub Actions workflow builds and deploys successfully on push to `main`
- [ ] **DEPLOY-02**: Site is accessible at `https://coltonc18.github.io`
- [ ] **DEPLOY-03**: All internal links work correctly at the deployed URL (no broken asset paths)

## v2 Requirements

### Blog

- **BLOG-01**: Blog listing page (`/blog`) with post summaries
- **BLOG-02**: Individual blog post pages (`/blog/[slug]`) generated from Markdown
- **BLOG-03**: RSS feed at `/rss.xml` via `@astrojs/rss`
- **BLOG-04**: JSON-LD structured data on blog posts for rich search results

### Enhancements

- **ENH-01**: Contact form or email link in Footer/About
- **ENH-02**: Project filtering or tagging on Work listing page
- **ENH-03**: Custom domain (if acquired)
- **ENH-04**: Analytics (privacy-first, e.g., Plausible)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Blog (v1) | Gated on Colton having content to publish; empty blog is worse than no blog |
| Newsletter component | No email service to wire; removed from template |
| Skills progress bars/percentages | Anti-pattern — looks junior, removed by design |
| Contact form (backend) | Static site only, no server functions on GitHub Pages |
| Comments section | JS weight, spam risk, not core to portfolio value |
| OAuth / authentication | Public portfolio, no login required |
| Framer CMS as content source | Markdown files chosen — simpler, git-tracked, no API dependency |
| SSR / server-side rendering | GitHub Pages is static only |
| Mobile app | Web-first only |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 — Foundation | Complete |
| FOUND-02 | Phase 1 — Foundation | Complete |
| FOUND-03 | Phase 1 — Foundation | Complete |
| FOUND-04 | Phase 1 — Foundation | Complete |
| FOUND-05 | Phase 1 — Foundation | Complete |
| FOUND-06 | Phase 1 — Foundation | Complete |
| NAV-01 | Phase 2 — Core Pages | Complete |
| NAV-02 | Phase 2 — Core Pages | Complete |
| NAV-03 | Phase 2 — Core Pages | Pending |
| NAV-04 | Phase 2 — Core Pages | Complete |
| HOME-01 | Phase 2 — Core Pages | Pending |
| HOME-02 | Phase 2 — Core Pages | Pending |
| HOME-03 | Phase 2 — Core Pages | Pending |
| HOME-04 | Phase 2 — Core Pages | Pending |
| ABOUT-01 | Phase 2 — Core Pages | Pending |
| ABOUT-02 | Phase 2 — Core Pages | Pending |
| ABOUT-03 | Phase 2 — Core Pages | Pending |
| DARK-01 | Phase 2 — Core Pages | Pending |
| DARK-02 | Phase 2 — Core Pages | Pending |
| DARK-03 | Phase 2 — Core Pages | Complete |
| WORK-01 | Phase 3 — Work / Projects | Pending |
| WORK-02 | Phase 3 — Work / Projects | Pending |
| WORK-03 | Phase 3 — Work / Projects | Pending |
| WORK-04 | Phase 3 — Work / Projects | Pending |
| WORK-05 | Phase 3 — Work / Projects | Pending |
| SEO-01 | Phase 4 — SEO and Deployment | Pending |
| SEO-02 | Phase 4 — SEO and Deployment | Pending |
| SEO-03 | Phase 4 — SEO and Deployment | Pending |
| DEPLOY-01 | Phase 4 — SEO and Deployment | Pending |
| DEPLOY-02 | Phase 4 — SEO and Deployment | Pending |
| DEPLOY-03 | Phase 4 — SEO and Deployment | Pending |

**Coverage:**
- v1 requirements: 31 total
- Mapped to phases: 31
- Unmapped: 0

---
*Requirements defined: 2026-03-04*
*Last updated: 2026-03-04 after roadmap creation*
