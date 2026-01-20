# Roadmap: BARAS Documentation Site

## Overview

This roadmap transforms BARAS from a GitHub-only project into a polished documentation site that non-technical SWTOR players can discover, download, and learn from. We start with infrastructure (Astro + Starlight + GitHub Pages), then build the landing page with downloads (the conversion funnel), then core documentation (metrics and overlays that users need most), and finally scaffold the extended reference docs.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3, 4): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation** - Astro + Starlight setup, GitHub Pages deployment, UX foundations
- [ ] **Phase 2: Landing & Downloads** - Marketing landing page with hero, platform downloads, installation guides
- [ ] **Phase 3: Core Documentation** - Quickstart guide, metrics reference, overlays reference, FAQ
- [ ] **Phase 4: Extended Documentation** - Timers, alerts, effects, and configuration reference docs (scaffolded)

## Phase Details

### Phase 1: Foundation
**Goal**: Infrastructure exists and site deploys to GitHub Pages with navigation structure and core UX features
**Depends on**: Nothing (first phase)
**Requirements**: INFRA-01, INFRA-02, INFRA-03, UX-01, UX-02, UX-03, UX-04
**Success Criteria** (what must be TRUE):
  1. User can visit baras-app.github.io and see a live site
  2. Site has dark mode toggle that persists preference and respects system setting
  3. Site is readable on mobile with hamburger menu navigation
  4. Search box exists and finds content across documentation
  5. Code blocks have copy-to-clipboard buttons
**Plans**: 3 plans

Plans:
- [ ] 01-01-PLAN.md — Initialize Astro + Starlight with navigation structure
- [ ] 01-02-PLAN.md — GitHub Actions deployment to GitHub Pages
- [ ] 01-03-PLAN.md — Theme customization and UX feature verification

### Phase 2: Landing & Downloads
**Goal**: Users can discover BARAS, understand its value, and download it for their platform
**Depends on**: Phase 1
**Requirements**: LAND-01, LAND-02, LAND-03, LAND-04, INST-01, INST-02, INST-03
**Success Criteria** (what must be TRUE):
  1. Landing page has hero section with clear value proposition and BARAS branding
  2. Screenshots showcase BARAS overlays, meters, and timers in action
  3. User can click platform-specific download button (Windows/macOS/Linux) and download starts
  4. Download buttons show current version number pulled from GitHub Releases API
  5. User can find and follow installation instructions for their platform (including macOS quarantine, Linux NVIDIA workaround)
**Plans**: TBD

Plans:
- [ ] 02-01: Landing page with hero and visuals
- [ ] 02-02: Downloads with GitHub Releases API integration
- [ ] 02-03: Platform-specific installation guides

### Phase 3: Core Documentation
**Goal**: New users can get BARAS running and understand its most-used features
**Depends on**: Phase 2
**Requirements**: GUID-01, DOCS-01, DOCS-02, FAQ-01
**Success Criteria** (what must be TRUE):
  1. User can follow quickstart guide from enabling combat logging to seeing first overlay
  2. User can look up any metric and understand what it means
  3. User can look up any overlay and understand what it shows (with screenshots)
  4. User can find answers to common problems in FAQ section
**Plans**: TBD

Plans:
- [ ] 03-01: Quickstart guide
- [ ] 03-02: Metrics and overlays reference documentation
- [ ] 03-03: FAQ/troubleshooting section

### Phase 4: Extended Documentation
**Goal**: Documentation structure is complete with scaffolded reference pages for all features
**Depends on**: Phase 3
**Requirements**: DOCS-03, DOCS-04, DOCS-05, DOCS-06
**Success Criteria** (what must be TRUE):
  1. Timers reference page exists with structure for trigger types and usage
  2. Alerts/audio reference page exists with structure for audio cue configuration
  3. Effects reference page exists with structure for effect tracking explanation
  4. Configuration reference page exists with structure for TOML settings management
**Plans**: TBD

Plans:
- [ ] 04-01: Scaffolded reference docs (timers, alerts, effects, configuration)

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/3 | Not started | - |
| 2. Landing & Downloads | 0/3 | Not started | - |
| 3. Core Documentation | 0/3 | Not started | - |
| 4. Extended Documentation | 0/1 | Not started | - |

---
*Roadmap created: 2026-01-20*
*Depth: quick (3-5 phases)*
