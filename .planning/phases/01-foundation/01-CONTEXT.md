# Phase 1: Foundation - Context

**Gathered:** 2026-01-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Infrastructure setup — Astro + Starlight site that deploys to GitHub Pages with core UX features (dark mode, mobile responsive, search, copy buttons). This phase establishes the technical foundation and visual identity that all other phases build on.

</domain>

<decisions>
## Implementation Decisions

### Site Styling
- Dark charcoal background with teal/cyan primary accent (matches BARAS app UI)
- Gold/tan color for BARAS branding elements
- System fonts for fast loading and native feel
- BARAS logo (Sith mask icon) in header and as favicon
- Balanced content density — standard docs site spacing, not too compact or spacious

### Navigation Structure
- Organized by user journey: Getting Started → Features → Configuration → Troubleshooting
- Top-level sections:
  - **Getting Started** — Installation, quickstart, first overlay
  - **Features** — Overlays, metrics, timers, effects (grouped)
  - **Configuration** — TOML settings, customization
  - **Troubleshooting** — FAQ, common issues, platform-specific fixes
- External links in header: GitHub repo only (no Discord or Parsely links for now)

### Dark Mode
- Dark theme by default (gaming audience expects this)
- Toggle in header, always visible
- Persist user's choice in localStorage

### Claude's Discretion
- Landing page structure — whether to put docs under /docs/ or integrate with landing page
- Specific Tailwind configuration and styling details
- Search implementation specifics (Starlight's Pagefind)
- Image optimization pipeline details

</decisions>

<specifics>
## Specific Ideas

- Match the BARAS app aesthetic: dark charcoal background, teal/cyan accents, clean gaming-focused feel
- "Without being too overwhelming" — the site should feel professional, not flashy
- Reference the app screenshot for color values if needed

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-01-20*
