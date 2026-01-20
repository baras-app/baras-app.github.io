---
phase: 02-landing-downloads
plan: 01
subsystem: ui
tags: [astro, carousel, css, scroll-snap, landing-page, hero]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: Starlight framework, custom CSS variables, dark mode theming
provides:
  - Marketing landing page with hero section
  - Screenshot carousel component (CSS scroll-snap)
  - Placeholder SVGs demonstrating BARAS UI features
  - Downloads anchor section ready for integration
affects: [02-02-download-buttons, 02-03-getting-started]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "CSS scroll-snap for carousels (no JS library needed)"
    - "Astro component for reusable carousel"
    - "Public directory for static assets referenced by URL"

key-files:
  created:
    - src/components/ScreenshotCarousel.astro
    - src/assets/screenshots/overlay-placeholder.svg
    - src/assets/screenshots/meters-placeholder.svg
    - src/assets/screenshots/timers-placeholder.svg
    - public/screenshots/overlay-placeholder.svg
    - public/screenshots/meters-placeholder.svg
    - public/screenshots/timers-placeholder.svg
  modified:
    - src/content/docs/index.mdx
    - src/styles/custom.css

key-decisions:
  - "Pure CSS scroll-snap carousel - no JavaScript library needed"
  - "SVG placeholders with BARAS brand colors for consistent styling"
  - "Dual storage of SVGs: src/assets for Astro Image, public for URL references"

patterns-established:
  - "Component pattern: Astro components in src/components/"
  - "Static assets pattern: public/ for URL-referenced files"

# Metrics
duration: 3min
completed: 2026-01-20
---

# Phase 02 Plan 01: Landing Page Hero & Carousel Summary

**Marketing landing page with CSS scroll-snap screenshot carousel showcasing BARAS DPS overlay, combat meters, and boss timer features**

## Performance

- **Duration:** 3 min
- **Started:** 2026-01-20T09:16:51Z
- **Completed:** 2026-01-20T09:19:39Z
- **Tasks:** 2
- **Files modified:** 9

## Accomplishments

- Created ScreenshotCarousel.astro with pure CSS scroll-snap implementation
- Designed three placeholder SVGs demonstrating BARAS features (DPS overlay, combat meters, boss timers)
- Enhanced landing page hero with compelling value proposition
- Integrated carousel below hero section with navigation dots

## Task Commits

Each task was committed atomically:

1. **Task 1: Create screenshot carousel component with placeholders** - `df331e9` (feat)
2. **Task 2: Update landing page with hero and carousel** - `c59d2ad` (feat)

## Files Created/Modified

- `src/components/ScreenshotCarousel.astro` - CSS scroll-snap carousel component
- `src/assets/screenshots/overlay-placeholder.svg` - DPS overlay mockup with player meters
- `src/assets/screenshots/meters-placeholder.svg` - Ability breakdown table mockup
- `src/assets/screenshots/timers-placeholder.svg` - Boss timers and cooldown tracking mockup
- `public/screenshots/*.svg` - Public copies for URL references
- `src/content/docs/index.mdx` - Enhanced with hero title, tagline, and carousel
- `src/styles/custom.css` - Added downloads anchor scroll-margin styling

## Decisions Made

- **CSS scroll-snap vs JS library:** Used pure CSS scroll-snap for carousel - simpler, no dependencies, works with navigation dots via anchor links
- **Dual SVG storage:** Stored SVGs in both src/assets (for Astro Image optimization) and public/ (for URL references in carousel) - Astro handles these differently
- **SWTOR-authentic UI:** Placeholder SVGs use actual SWTOR ability names and class references (Force Lightning, Darth Slayer, Dread Master Styrak) for authenticity

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Landing page is ready for download buttons integration (Plan 02-02)
- `#downloads` anchor is in place for smooth scroll from hero CTA
- Carousel demonstrates BARAS value visually - real screenshots can replace placeholders later

---
*Phase: 02-landing-downloads*
*Completed: 2026-01-20*
