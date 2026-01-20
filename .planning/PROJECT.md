# BARAS Documentation Site

## What This Is

A documentation and marketing website for BARAS (Battle Analysis and Raid Assessment System), a combat log parser for SWTOR. The site makes BARAS accessible to non-technical SWTOR players by showing what it does, making downloads frictionless, and explaining how all features work.

## Core Value

Non-technical SWTOR players can discover BARAS, understand what it does, download it for their platform, and learn how to use every feature — all without touching GitHub.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Landing page with visuals showcasing BARAS in action
- [ ] Download section with platform-specific buttons (Windows .exe, macOS .dmg, Linux .AppImage)
- [ ] Auto-pull latest release artifacts from GitHub Releases API
- [ ] Platform-specific installation instructions (Windows, macOS with quarantine removal, Linux with NVIDIA workaround)
- [ ] Quickstart guide (enable combat logging, point to logs, configure overlays)
- [ ] Metrics reference documentation (what each metric means)
- [ ] Timers reference documentation (trigger types, how they work)
- [ ] Alerts/audio reference documentation (how audio cues work)
- [ ] Overlays reference documentation (what each overlay does, with screenshots)
- [ ] Effects system reference documentation (how effect tracking works)
- [ ] Configuration guide (managing custom settings, TOML files)
- [ ] FAQ/troubleshooting section (initial common issues, expandable over time)

### Out of Scope

- Video tutorials — screenshots and text docs only for v1
- User accounts/authentication — static site, no backend
- Comments/community features — use GitHub issues for that
- Localization/i18n — English only for v1

## Context

**Parent project:** ~/baras — Rust/Tauri desktop app for parsing SWTOR combat logs

**Current state:** BARAS has a GitHub README with installation instructions and feature list, but:
- Non-technical users find GitHub intimidating
- README doesn't explain features in depth
- No visual showcase of the app in action
- Release downloads require navigating GitHub releases page

**Target audience:** SWTOR endgame players (raiders, PvPers) who want to analyze their performance. Mix of technical and non-technical users, but the site optimizes for non-technical.

**Assets needed:** Screenshots and possibly video of BARAS in action — user will capture these separately.

## Constraints

- **Hosting**: GitHub Pages (repo is baras-app.github.io)
- **Tech stack**: Static site generator (familiar with Hugo, open to alternatives like Astro)
- **Releases**: Must pull dynamically from GitHub Releases API (baras-app/baras repo)
- **No backend**: Pure static site, any dynamic behavior via client-side JS

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static site generator | Familiar tooling, GitHub Pages compatible, good for docs | — Pending |
| Auto-pull releases from GitHub API | Avoid manual updates when new versions ship | — Pending |

---
*Last updated: 2026-01-19 after initialization*
