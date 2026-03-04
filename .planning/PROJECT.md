# Colton Carroll — Personal Portfolio

## What This Is

A high-performance personal portfolio and blog for Colton Carroll, built by connecting a professionally designed Framer template to an Astro static site generator. The site is deployed to GitHub Pages via GitHub Actions. Claude assists with the Framer → Astro component integration, and Colton updates the content to reflect his actual experience.

## Core Value

Visitors can immediately understand who Colton is, what he's built, and how to reach him — delivered via a polished Framer design running as a fast, statically-generated Astro site.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Framer template components exported via unframer and embedded in Astro pages
- [ ] Home page live and accurate to Colton's bio/headline
- [ ] About page live with Colton's real background and skills
- [ ] Work/Projects listing page live with Colton's real projects
- [ ] Individual project detail pages live
- [ ] Blog listing page live
- [ ] Individual blog post pages live
- [ ] Site deploys successfully to GitHub Pages via GitHub Actions
- [ ] Navigation and Footer components wired up across all pages
- [ ] Dark mode and color styles respected from Framer design

### Out of Scope

- Backend/server-side rendering — Static site only, SSG via Astro
- Custom CMS outside Framer — Framer CMS or Markdown files handle content
- OAuth/authentication — Public portfolio, no login required
- Mobile app — Web-first only

## Context

- **Framer Template:** A full portfolio template is already designed in Framer with pages: Home (`/`), About (`/about`), Work (`/work`), Work detail (`/work/:slug`), Blog (`/blog`), Blog detail (`/blog/:slug`), plus a 404 page.
- **Framer Components:** Top Navigation, Footer, Project Card, Newsletter, Social Media Icon, Load More, Blog Title Component, Delete|Remix Template Button
- **Design system:** Geist font family, accent color orange (`rgb(255, 107, 0)`), light/dark color styles defined in Framer
- **Astro skeleton:** Already scaffolded at root with React integration, Tailwind, unframer installed, GitHub Actions deploy pipeline ready (pushes `dist/` to GitHub Pages on main branch push)
- **Key tool:** `unframer` — CLI that exports Framer components as React code for use in Astro
- **Framer MCP:** Connected, allows direct inspection and editing of the Framer project
- **Content:** Colton will update text/images in Framer (or Markdown) to reflect his real experiences; Claude handles the technical wiring

## Constraints

- **Tech Stack**: Astro 5 + React 19 + Tailwind 3 + unframer — already locked in, cannot change
- **Deploy target**: GitHub Pages (static only) — no SSR, no server functions
- **Framer MCP**: Available for design inspection and edits during development
- **Content ownership**: Content changes (bio, projects, blog posts) are Colton's responsibility; integration work is Claude's

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Astro over Next.js/Vite | Static generation + partial hydration ideal for portfolio | — Pending |
| unframer for component export | Maintains Framer as design source of truth, outputs React | — Pending |
| GitHub Pages for hosting | Free, integrates with existing GitHub repo, no backend needed | — Pending |
| Framer as design + CMS source | Keep design and content in one tool; unframer bridges to code | — Pending |

---
*Last updated: 2026-03-04 after initialization*
