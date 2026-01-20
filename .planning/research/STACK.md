# Technology Stack

**Project:** BARAS Documentation & Marketing Site
**Researched:** 2026-01-19
**Overall Confidence:** HIGH

---

## Executive Summary

For a documentation site with integrated marketing landing page hosted on GitHub Pages, **Astro with Starlight** is the recommended stack. It provides the best balance of:

1. **Docs-first design** with built-in search, navigation, dark mode
2. **Landing page flexibility** via Astro's component architecture
3. **Zero-JS-by-default** for excellent performance on GitHub Pages
4. **Active ecosystem** (7,600 GitHub stars, 300+ contributors, used by Cloudflare, Google, Microsoft, OpenAI)
5. **Client-side interactivity** when needed (for GitHub Releases API integration)

---

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| **Astro** | 5.16.6+ | Static site generator | Zero-JS default, islands architecture, 92+ Lighthouse scores. V6 beta coming early 2026. | HIGH |
| **Starlight** | 0.37+ | Documentation theme | Full-featured docs theme with search, i18n, dark mode, Markdown/MDX. Powers docs for major tech companies. | HIGH |

**Rationale:**

Astro + Starlight is the strongest choice for this project because:

1. **Dual-purpose architecture**: Starlight handles docs pages while Astro's page routing handles custom landing pages. No need for workarounds.

2. **Performance**: Astro ships zero JavaScript by default, only hydrating interactive "islands" when needed. Lighthouse performance scores of 92-100 vs Docusaurus at ~53.

3. **Flexibility**: Unlike Docusaurus (locked to React/Infima CSS), Astro lets you use any framework (React, Vue, Svelte) and any CSS approach (Tailwind recommended).

4. **Active development**: Seven Starlight releases in 2025 with route data middleware, multi-site search, CSS cascade layers. Astro 6 alpha already available.

5. **GitHub Pages native**: Outputs pure static HTML. No server-side requirements.

### Search

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| **Pagefind** | Latest | Static search | Built into Starlight. No external service needed. Indexes at build time, serves partial indexes client-side. Works perfectly on GitHub Pages. | HIGH |

**Rationale:**

Pagefind is bundled with Starlight and is the best static search solution:

- Runs after build, indexes your content, outputs static search bundle
- No backend, no Algolia account, no API keys
- Partial index downloading keeps bandwidth low
- Works on any static host including GitHub Pages

### Styling

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| **Tailwind CSS** | 3.4+ | Utility CSS | One-line Astro integration. Landing page templates use it. Pairs well with Starlight customization. | HIGH |

**Rationale:**

Tailwind is the de facto standard for Astro landing pages:

- AstroWind (most starred Astro theme 2022-2024) uses Tailwind
- Astroship, Astro Landing Page templates all use Tailwind
- Starlight supports Tailwind integration for custom components
- Utility-first approach reduces CSS bloat for static sites

### GitHub Releases Integration

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| **Fetch API** | Native | Client-side GitHub API | Browser-native, no dependencies. 60 requests/hour unauthenticated is sufficient for displaying releases. | HIGH |
| **Astro Islands** | - | Selective hydration | Only the releases component loads JavaScript. Rest of page stays static. | HIGH |

**Implementation approach:**

```javascript
// Client-side fetch in an Astro island component
const response = await fetch('https://api.github.com/repos/OWNER/BARAS/releases');
const releases = await response.json();
```

**Rate limit considerations:**

- Unauthenticated: 60 requests/hour per IP (sufficient for a download page)
- Use conditional requests (ETag/If-None-Match) to avoid counting against limit
- Cache response in localStorage to minimize API calls
- Consider build-time fetch as fallback (stale but always available)

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not Alternative |
|----------|-------------|-------------|---------------------|
| **SSG** | Astro + Starlight | Hugo + Doks | Hugo's Go templating has steeper learning curve. Doks is good but smaller ecosystem (2,325 stars vs 7,600). Less flexible for custom landing pages. |
| **SSG** | Astro + Starlight | Docusaurus | Locked to React/Infima CSS (hard to customize). Worse performance (53 Lighthouse vs 92). Better for React shops, but you're not. |
| **SSG** | Astro + Starlight | MkDocs Material | Python-based, different ecosystem. Great for API docs but less flexible for marketing pages. |
| **Docs Theme** | Starlight | Custom Astro | Starlight provides search, navigation, dark mode, accessibility out of box. Building from scratch wastes time. |
| **Search** | Pagefind | Algolia DocSearch | Algolia requires account, approval for free tier, external dependency. Pagefind is self-contained. |
| **Styling** | Tailwind | Vanilla CSS | Tailwind has better Astro integration, more landing page templates available. |

### Why Not Hugo (Given User Familiarity)?

Hugo is an excellent SSG and the user is already familiar with it. However:

1. **Documentation themes**: Hugo's best docs theme (Doks) has 2,325 stars vs Starlight's 7,600. Smaller plugin ecosystem.

2. **Go templating**: Hugo's templating system is powerful but more complex than Astro's component model for custom landing pages.

3. **JavaScript islands**: Adding client-side interactivity (GitHub releases) requires more manual setup in Hugo vs Astro's built-in islands.

4. **Performance parity**: Both achieve 95+ Lighthouse scores, so Hugo's build speed advantage (1000 pages in 2s) doesn't matter for a small site.

5. **Learning investment**: Astro's component model is more transferable to modern web development than Hugo's Go templates.

**Verdict**: Hugo is viable, but Astro + Starlight provides a better developer experience for this specific use case (docs + marketing + API integration).

---

## Stack NOT To Use

| Technology | Why Avoid | Use Instead |
|------------|-----------|-------------|
| **Jekyll** | Ruby ecosystem, slower builds, dated. Only advantage is native GitHub Pages support, but Astro works fine with GH Actions. | Astro |
| **Docusaurus** | Locked to React, Infima CSS is hard to customize, worse performance. Good for React-heavy teams, not general docs. | Starlight |
| **Gatsby** | GraphQL complexity overkill for a docs site. Slower builds, more configuration. | Astro |
| **Next.js** | SSR/SSG hybrid adds complexity. Great for apps, overkill for static docs. | Astro |
| **Algolia** | External dependency, requires approval, API keys to manage. Pagefind does everything needed client-side. | Pagefind |
| **Custom search** | Reinventing the wheel. Pagefind already solves static search perfectly. | Pagefind |

---

## Installation

### Quick Start

```bash
# Create new Astro + Starlight project
npm create astro@latest -- --template starlight baras-docs

# Navigate to project
cd baras-docs

# Add Tailwind for landing page styling
npx astro add tailwind

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Structure

```
baras-docs/
├── astro.config.mjs      # Astro + Starlight config
├── src/
│   ├── content/
│   │   └── docs/         # Documentation pages (Markdown/MDX)
│   │       ├── index.mdx
│   │       ├── getting-started/
│   │       └── guides/
│   ├── pages/
│   │   └── index.astro   # Custom landing page (not docs)
│   ├── components/
│   │   └── Releases.astro # GitHub releases island
│   └── styles/
│       └── global.css
├── public/
│   └── images/           # Static assets
└── package.json
```

### Key Configuration

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://baras-app.github.io',
  integrations: [
    starlight({
      title: 'BARAS',
      description: 'Combat log parser for SWTOR',
      social: {
        github: 'https://github.com/OWNER/BARAS',
      },
      sidebar: [
        { label: 'Getting Started', slug: 'getting-started' },
        { label: 'Guides', autogenerate: { directory: 'guides' } },
      ],
      customCss: ['./src/styles/global.css'],
    }),
    tailwind(),
  ],
});
```

### GitHub Actions Deployment

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## Version Matrix

| Package | Current Version | Notes |
|---------|-----------------|-------|
| Astro | 5.16.6 | V6 beta early 2026 |
| Starlight | 0.37.x | Still in beta, stable for production |
| Tailwind CSS | 3.4.x | V4 available but 3.x more stable |
| Node.js | 20.x LTS | Required for Astro |
| Pagefind | Bundled | Comes with Starlight |

---

## Confidence Assessment

| Component | Confidence | Rationale |
|-----------|------------|-----------|
| Astro | HIGH | Official docs verified via WebFetch. V5.16.6 confirmed. Used in production by major companies. |
| Starlight | HIGH | Official docs verified. 7,600 stars, active development, seven 2025 releases. |
| Pagefind | HIGH | Bundled with Starlight, well-documented, purpose-built for static sites. |
| Tailwind | HIGH | Standard choice for Astro landing pages. Wide adoption. |
| GitHub API | HIGH | Official GitHub docs. 60 req/hr unauthenticated sufficient for downloads page. |

---

## Sources

### Official Documentation
- [Starlight Getting Started](https://starlight.astro.build/getting-started/)
- [Astro 2025 Year in Review](https://astro.build/blog/year-in-review-2025/)
- [Hugo Documentation](https://gohugo.io/documentation/) - v0.154.5
- [Docusaurus](https://docusaurus.io/) - v3.9.2
- [GitHub REST API Rate Limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)
- [Pagefind Documentation](https://pagefind.app/docs/)

### Comparison Sources
- [Starlight vs Docusaurus - LogRocket](https://blog.logrocket.com/starlight-vs-docusaurus-building-documentation/)
- [Hugo vs Astro - Criztec](https://criztec.com/hugo-vs-astro)
- [MkDocs vs Docusaurus - Damavis](https://blog.damavis.com/en/mkdocs-vs-docusaurus-for-technical-documentation/)
- [Top SSGs for 2025 - CloudCannon](https://cloudcannon.com/blog/the-top-five-static-site-generators-for-2025-and-when-to-use-them/)

### Templates & Themes
- [AstroWind](https://astrowind.vercel.app/) - Most starred Astro theme
- [Astroship](https://astroship.web3templates.com/) - Startup landing page template
- [Doks](https://getdoks.org/) - Hugo documentation theme
