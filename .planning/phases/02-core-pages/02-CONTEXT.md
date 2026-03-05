# Phase 2: Core Pages — Context

## Framer Component Integration Approach

**Decision:** Use Framer CDN `insertUrl` imports instead of local unframer exports.

The `npx unframer` CLI requires a paid subscription. Instead, all Framer components
are imported directly from Framer's CDN using their `insertUrl`. This is fully
supported in React/Astro — no local files needed.

### Pattern (Astro page)

```astro
---
// Import directly from Framer CDN
import TopNav from 'https://framer.com/m/Top-Navigation-XPU7n1.js';
import Footer from 'https://framer.com/m/Footer-3Fy7ch.js';
import Layout from '../layouts/Layout.astro';
---
<Layout>
  <TopNav client:load />
  <main>...</main>
  <Footer client:load />
</Layout>
```

**Rules:**
- Always use `client:load` (or `client:visible`) — Framer components use browser APIs
- CSS variables from `src/components/framer/styles.css` are already global via Layout.astro
- Dark mode: toggle `dark` class on `<html>` — the CSS variables in styles.css respond automatically

## Available Framer Components

| Component | insertUrl | Used in |
|-----------|-----------|---------|
| Top Navigation | `https://framer.com/m/Top-Navigation-XPU7n1.js` | All pages (Layout) |
| Footer | `https://framer.com/m/Footer-3Fy7ch.js` | All pages (Layout) |
| Project Card | `https://framer.com/m/Project-Card-qsvfxc.js` | Work listing page |
| Social Media Icon | `https://framer.com/m/Social-Media-Icon-mppkW9.js` | Home, About |
| Load More | `https://framer.com/m/Load-More-SXCpMc.js` | Work listing |
| Experience Title Component | `https://framer.com/m/Experience-Title-Component-N8yTej.js` | About page |

## Framer Project Details

- **Project URL:** https://framer.com/projects/Colton-s-Personal-Website--WdejJp0u4Ssz1W8o5Hkc-bdSAW
- **Framer Pages:** `/` (Home), `/about`, `/projects`, `/work`, `/work/:slug`, `/projects/:slug`, `/404`
- **MCP access:** Framer MCP is connected — use `getNodeXml` on page nodeIds to inspect content

## Page NodeIDs (for MCP inspection)

| Page | nodeId |
|------|--------|
| Home (`/`) | `augiA20Il` |
| 404 | `ripgWfPEI` |
| About | `rtPax2iAX` |
| Projects | `TODUvogZp` |
| Projects detail | `repKjhHNz` |
| Work detail | `MlaBvMMRk` |
| Work listing | `rfHtHXZxY` |

## Dark Mode

Framer CSS variables in `src/components/framer/styles.css` already handle light/dark via:
- `@media (prefers-color-scheme: dark)` — system preference
- `.dark` class on `<html>` — manual toggle

The Nav component likely has a built-in toggle. If not, implement a small inline script
in Layout.astro that reads `localStorage` and sets the `dark` class before first paint
(avoids FOUC).

## Phase 1 Deviations to Keep in Mind

- Tailwind config is `tailwind.config.cjs` (not `.js`) — do not create a `.js` version
- `src/components/framer/` contains only `styles.css` — no `.js` files; import from CDN URLs
