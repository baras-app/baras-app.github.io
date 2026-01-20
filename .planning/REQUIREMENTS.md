# Requirements: BARAS Documentation Site

**Defined:** 2026-01-19
**Core Value:** Non-technical SWTOR players can discover, download, and learn BARAS without touching GitHub.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Landing Page

- [ ] **LAND-01**: Hero section with clear value proposition and BARAS branding
- [ ] **LAND-02**: Screenshots/visuals showcasing BARAS in action (overlays, meters, timers)
- [ ] **LAND-03**: Platform-specific download buttons (Windows .exe, macOS .dmg, Linux .AppImage)
- [ ] **LAND-04**: Auto-pull latest release artifacts from GitHub Releases API

### Installation

- [ ] **INST-01**: Windows installation instructions
- [ ] **INST-02**: macOS installation instructions (including quarantine removal steps)
- [ ] **INST-03**: Linux installation instructions (including NVIDIA workaround)

### Guides

- [ ] **GUID-01**: Quickstart guide (enable combat logging, select log directory, configure first overlay)

### Reference Documentation

- [ ] **DOCS-01**: Metrics reference — what each metric means (full content)
- [ ] **DOCS-02**: Overlays reference — what each overlay does with screenshots (full content)
- [ ] **DOCS-03**: Timers reference — trigger types, how they work (scaffolded, content later)
- [ ] **DOCS-04**: Alerts/Audio reference — how audio cues work (scaffolded, content later)
- [ ] **DOCS-05**: Effects reference — how effect tracking works (scaffolded, content later)
- [ ] **DOCS-06**: Configuration reference — managing TOML settings (scaffolded, content later)

### FAQ

- [ ] **FAQ-01**: FAQ/troubleshooting section with initial common issues

### User Experience

- [ ] **UX-01**: Dark mode toggle (persists preference, respects system setting)
- [ ] **UX-02**: Mobile responsive layout (hamburger menu, readable on phones)
- [ ] **UX-03**: Search functionality across documentation
- [ ] **UX-04**: Copy-to-clipboard buttons on code blocks and paths

### Infrastructure

- [ ] **INFRA-01**: Static site built with Astro + Starlight
- [ ] **INFRA-02**: GitHub Pages deployment via GitHub Actions
- [ ] **INFRA-03**: Image optimization pipeline (WebP, lazy loading)

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Enhancements

- **LAND-05**: Auto-detect user's platform and highlight appropriate download
- **LAND-06**: Social proof (GitHub stars, download count from releases API)
- **DOCS-07**: Full content for timers reference
- **DOCS-08**: Full content for alerts/audio reference
- **DOCS-09**: Full content for effects reference
- **DOCS-10**: Full content for configuration reference
- **UX-05**: Annotated screenshots with numbered callouts
- **UX-06**: "On this page" table of contents for long pages
- **COMM-01**: Comparison page (BARAS vs other tools)
- **COMM-02**: Changelog/release notes page

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Video tutorials | High production effort, goes stale quickly — text/screenshots first |
| User accounts/authentication | Static site constraint, no backend needed |
| Comments on documentation | Spam magnet, moderation burden — use Discord/GitHub |
| Built-in forum | Maintenance nightmare — use existing platforms |
| Localization/i18n | English only for v1; small community, multiplies maintenance |
| Chat widget/live support | Requires staffing — FAQ + Discord link instead |
| Email signup/newsletter | GDPR compliance burden — GitHub "Watch" for notifications |
| Multiple download mirrors | GitHub releases is reliable enough |
| Complex animations/parallax | Slows page load, accessibility issues |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| LAND-01 | Phase 2 | Pending |
| LAND-02 | Phase 2 | Pending |
| LAND-03 | Phase 2 | Pending |
| LAND-04 | Phase 2 | Pending |
| INST-01 | Phase 2 | Pending |
| INST-02 | Phase 2 | Pending |
| INST-03 | Phase 2 | Pending |
| GUID-01 | Phase 3 | Pending |
| DOCS-01 | Phase 3 | Pending |
| DOCS-02 | Phase 3 | Pending |
| DOCS-03 | Phase 4 | Pending |
| DOCS-04 | Phase 4 | Pending |
| DOCS-05 | Phase 4 | Pending |
| DOCS-06 | Phase 4 | Pending |
| FAQ-01 | Phase 3 | Pending |
| UX-01 | Phase 1 | Pending |
| UX-02 | Phase 1 | Pending |
| UX-03 | Phase 1 | Pending |
| UX-04 | Phase 1 | Pending |
| INFRA-01 | Phase 1 | Pending |
| INFRA-02 | Phase 1 | Pending |
| INFRA-03 | Phase 1 | Pending |

**Coverage:**
- v1 requirements: 22 total
- Mapped to phases: 22
- Unmapped: 0

---
*Requirements defined: 2026-01-19*
*Last updated: 2026-01-20 after roadmap creation*
