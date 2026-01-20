# Phase 2: Landing & Downloads - Context

**Gathered:** 2026-01-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Marketing landing page with hero section, screenshots, platform-specific downloads, and installation guides. Users can discover BARAS, understand what sets it apart from other parsers, download for their platform, and follow installation instructions. Core documentation (quickstart, metrics, overlays) is a separate phase.

</domain>

<decisions>
## Implementation Decisions

### Hero & Value Proposition
- Direct & functional headline tone ("Real-time combat analysis for SWTOR" style)
- Emphasize differentiation from other parsers, not just features:
  - Overlays, data explorer (expected features)
  - Native cross-platform (key differentiator)
  - Speed & performance (key differentiator)
  - Open source + active development (tertiary)
- Download CTA in hero section + sticky header button on scroll
- Hero background: Claude's discretion (user liked screenshot idea but uncertain what to show)

### Screenshots & Visuals
- Show both overlay-in-action AND data explorer views
- Carousel/slider presentation (one large screenshot at a time, arrows to navigate)
- Clean screenshots only — no annotations or numbered callouts
- Placeholder images for now (user will provide real screenshots later)

### Download Experience
- Primary + alternatives layout: large button for detected platform, smaller buttons for others
- Auto-detect user's platform and highlight that download button
- Version number only (CalVer — date is apparent from version)
- After click: download starts AND show "next steps" installation guidance

### Installation Guides
- Step-by-step with screenshots (detailed walkthrough)
- Tabs by platform — each platform has its own tab with quirks built into the steps
- Lives on landing page (not separate docs pages)
- Platform quirks (macOS quarantine, Linux NVIDIA) as highlighted callout boxes that stand out

### Claude's Discretion
- Hero background visual approach (screenshot vs gradient vs minimal)
- Carousel implementation details
- Exact layout and spacing of download section
- How "next steps" appears after download click (inline, modal, scroll-to)

</decisions>

<specifics>
## Specific Ideas

- Differentiation messaging is key: other parsers exist, users know what a parser does — emphasize WHY BARAS over alternatives
- Native cross-platform is a big deal (most parsers are Windows-only or use Wine)
- Speed/performance is a selling point

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-landing-downloads*
*Context gathered: 2026-01-20*
