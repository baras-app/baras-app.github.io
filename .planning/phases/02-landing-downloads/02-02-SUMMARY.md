---
phase: 02-landing-downloads
plan: 02
subsystem: ui
tags: [astro, github-api, downloads, platform-detection, client-side]

# Dependency graph
requires:
  - phase: 02-landing-downloads/01
    provides: Landing page with hero section, carousel, and #downloads anchor
provides:
  - Download section with platform-specific buttons (Windows/macOS/Linux)
  - Client-side GitHub Releases API integration
  - Platform detection with highlight for user's OS
  - Graceful fallback to GitHub releases page
affects: [02-03-getting-started, future-release-updates]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Client-side fetch for dynamic release data (no build-time coupling)"
    - "Platform detection via userAgent with Windows fallback"
    - "is:inline directive for Astro scripts that need DOM access"

key-files:
  created:
    - src/components/DownloadSection.astro
  modified:
    - src/content/docs/index.mdx

key-decisions:
  - "is:inline script directive for DOM manipulation (Astro requirement)"
  - "Windows as default platform fallback (largest user base)"
  - "Apple Silicon DMG as primary macOS download"

patterns-established:
  - "Client-side API fetch pattern for frequently-changing data"
  - "Platform-aware download buttons with visual highlight"

# Metrics
duration: 4min
completed: 2026-01-20
---

# Phase 02 Plan 02: Download Section with GitHub API Summary

**Platform-specific download buttons with client-side GitHub Releases API integration, auto-detecting user OS and displaying current version**

## Performance

- **Duration:** 4 min
- **Started:** 2026-01-20T09:21:13Z
- **Completed:** 2026-01-20T09:24:41Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Created DownloadSection.astro with three platform download buttons (Windows/macOS/Linux)
- Implemented client-side GitHub Releases API fetch for dynamic version and download URLs
- Added platform detection that highlights user's OS button while showing all options
- Integrated download section into landing page with proper anchor navigation

## Task Commits

Each task was committed atomically:

1. **Task 1: Create DownloadSection component with GitHub API integration** - `807cebf` (feat)
2. **Task 2: Integrate DownloadSection into landing page** - `4c4c222` (feat)

## Files Created/Modified

- `src/components/DownloadSection.astro` - Download section component with:
  - Three platform buttons with SVG icons (Windows, Apple, Linux)
  - Client-side fetch to GitHub Releases API
  - Platform detection via userAgent
  - Scoped CSS with responsive layout
- `src/content/docs/index.mdx` - Added DownloadSection import and component

## Decisions Made

- **is:inline for script tag:** Astro hoists scripts by default, but our DOM-manipulating script needs to run inline on the page. Added `is:inline` directive to ensure script is included in HTML output.
- **Apple Silicon as primary macOS:** Using `_aarch64.dmg` pattern for macOS downloads (most modern Macs). Intel users can use the GitHub releases page.
- **Windows as fallback:** If platform detection fails, default to Windows (largest user base for SWTOR).

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Added is:inline directive to script tag**
- **Found during:** Task 2 (Integration testing)
- **Issue:** Astro was not including the script in build output - loadReleases function was missing from dist/index.html
- **Fix:** Added `is:inline` directive to script tag in DownloadSection.astro
- **Files modified:** src/components/DownloadSection.astro
- **Verification:** Rebuilt, confirmed script appears in dist/index.html with api.github.com URL
- **Committed in:** 4c4c222 (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (blocking)
**Impact on plan:** Fix required for functionality. No scope creep.

## Issues Encountered

None beyond the deviation documented above.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Download section is fully functional with GitHub API integration
- Landing page now has complete marketing content (hero, carousel, downloads)
- Ready for Plan 02-03: Installation guides with platform-specific instructions
- Users can now discover and download BARAS from the landing page

---
*Phase: 02-landing-downloads*
*Completed: 2026-01-20*
