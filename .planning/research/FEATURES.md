# Feature Landscape

**Domain:** Documentation and marketing site for desktop gaming tool (SWTOR combat log parser)
**Researched:** 2026-01-19
**Confidence:** HIGH (based on established patterns in documentation sites and comparable tools like ACT, StarParse)

## Table Stakes

Features users expect. Missing = users leave or feel the site is incomplete/unprofessional.

### Landing Page / Marketing

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Hero section with clear value proposition | Users decide in seconds whether to stay; "what does this do and why should I care" must be immediately clear | Low | Outcome-focused copy, not feature lists. SWTOR players need to see "analyze your raid performance" not "combat log parser" |
| Visual showcase (screenshots) | Gaming tools are visual; users need to see the app before downloading | Low | Screenshots of overlays, meters, timers in action. User will capture these. |
| Clear primary CTA (Download button) | Single goal optimization; landing pages with one CTA convert 266% better than multiple | Low | Prominent, platform-aware download button in hero |
| Platform-specific downloads | Users need their platform's installer without hunting | Medium | Windows .exe, macOS .dmg, Linux .AppImage with auto-detection |
| Social proof | Builds trust, especially for niche tools | Low | GitHub stars, download count from releases API, community endorsements |

### Navigation & Information Architecture

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Persistent sidebar navigation | Documentation sites need visible "sense of the whole" for orientation | Low | Categories: Getting Started, Reference, Configuration, Troubleshooting |
| Breadcrumbs | Users need context of where they are in hierarchy | Low | Essential for deep documentation pages |
| Mobile-responsive hamburger menu | 70%+ traffic is mobile; documentation must work on phones | Medium | Collapse sidebar to hamburger on mobile |
| Logo links to homepage | Web convention users expect | Low | Universal pattern |
| Consistent header/footer | Reduces cognitive load, professional appearance | Low | Same across all pages |

### Documentation Content

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Quickstart guide | Users want to get running fast; "getting started in 5 minutes" | Medium | Enable logging, point to logs, basic overlay setup |
| Reference documentation | Users need to know what each feature does | Medium | Metrics, timers, overlays, effects, alerts - all need explanation |
| Installation instructions | Platform-specific setup is non-obvious (macOS quarantine, Linux NVIDIA issues) | Medium | Platform-specific pages with screenshots |
| FAQ / Troubleshooting | Users expect self-service answers to common problems | Medium | Start with known issues, expand based on real questions |
| Screenshots in documentation | "Show don't tell" - visual learners need images | Low | Annotated screenshots showing UI elements being documented |

### Technical Requirements

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Mobile responsive design | Google mobile-first indexing; 70%+ mobile traffic | Medium | All pages usable on phones, breakpoints at 480px/768px/1024px |
| Fast loading (<3 seconds) | 53% abandon sites that take >3 seconds | Low | Static site generators handle this well |
| Semantic HTML / Accessibility | Legal requirements (EAA 2025), ethical obligation | Low | Proper headings, alt text, ARIA labels |
| SEO basics | Users search for "SWTOR DPS meter" or "SWTOR combat parser" | Low | Meta tags, semantic headings, descriptive URLs |

## Differentiators

Features that set the site apart. Not expected, but valued and remembered.

### User Experience Enhancements

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Dark/light mode toggle | Gaming audience often prefers dark mode; accessibility for light-sensitive users | Medium | Persist preference in localStorage; respect system preference |
| Auto-detect platform for downloads | Reduces friction - user sees their platform's button first | Low | Client-side JS to detect OS, highlight appropriate download |
| Copy code snippets | Documentation often includes paths/commands users need to copy | Low | Click-to-copy buttons on code blocks |
| "On this page" table of contents | Long reference pages benefit from quick jump navigation | Low | Auto-generated from headings |
| Expandable/collapsible sections | FAQ and troubleshooting work better as accordions | Low | Reduces visual overload, users expand what they need |

### Dynamic Features

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Live release info from GitHub API | Always shows current version without manual updates | Medium | Client-side fetch from releases API, show version/date |
| Download count / popularity indicator | Social proof - "50,000+ downloads" builds trust | Low | Pull from GitHub releases API |
| Changelog / release notes | Users want to know what changed before updating | Low | Either fetch from GitHub or link to releases page |

### Documentation Quality

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Searchable documentation | Large docs need search; GitBook/Algolia patterns | High | Likely defer to later phase; client-side search or Algolia integration |
| Visual guides with annotations | Annotated screenshots showing exactly what to click | Medium | Numbered callouts on images, step-by-step visual walkthroughs |
| Comparison with other tools | Users often search "BARAS vs StarParse" - own that conversation | Medium | Honest feature comparison, when to use what |
| Keyboard shortcuts reference | Power users want quick reference cards | Low | Single page with all shortcuts |

### Community Connection

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Link to Discord/community | Users want help from real people | Low | Prominent link in header/footer |
| GitHub issues link | Technical users can report bugs/request features | Low | Link in footer or dedicated page |
| Contribution guide | Open source projects benefit from contributor docs | Low | How to report issues, suggest features |

## Anti-Features

Features to deliberately NOT build. Common mistakes in this domain.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| User accounts / authentication | Adds massive complexity for minimal value; static site constraint | All content public, use GitHub for issue tracking |
| Comments on documentation | Spam magnet, moderation burden, rarely useful | Direct users to Discord or GitHub discussions |
| Built-in forum | Maintenance nightmare, splits community | Use existing platforms (Discord, Reddit, GitHub Discussions) |
| Video tutorials for v1 | High production effort, goes stale quickly, harder to update | Start with screenshots/text; video can be added later |
| Localization/i18n for v1 | Multiplies content maintenance, small SWTOR community | English only initially; add translations if community volunteers |
| Analytics dashboard | Over-engineering; Google Analytics or simple alternatives exist | Use Plausible, Fathom, or GA if needed |
| Auto-updating docs from code | Complex build system, easy to break | Manual doc updates are fine for this scale |
| Chat widget / live support | Requires staffing, sets expectations site can't meet | FAQ + Discord link for async support |
| Multiple download mirrors | Complexity without benefit; GitHub releases is reliable | Single source from GitHub releases |
| Inline editing / wiki-style | Maintenance nightmare, vandalism risk | Docs in repo, PRs for changes |
| Complex search with filters | Over-engineering for doc site of this size | Simple search or just good navigation |
| Animated hero / parallax effects | Slows page load, distracts from content, accessibility issues | Clean, fast-loading static images |
| Popup modals for downloads | Annoying UX pattern, interrupts flow | Direct download links |
| Email signup / newsletter | Maintenance burden, GDPR compliance, low value for tool docs | GitHub releases have "Watch" for notifications |

## Feature Dependencies

```
Landing Page (hero, downloads)
    |
    +-- Platform Detection (enhances download UX)
    |
    +-- GitHub Releases API Integration
            |
            +-- Auto-pull release artifacts
            +-- Version display
            +-- Download counts

Navigation Structure
    |
    +-- Sidebar (requires defined IA)
    |
    +-- Breadcrumbs (requires page hierarchy)
    |
    +-- Mobile Menu (requires responsive CSS)

Documentation Content
    |
    +-- Quickstart (can be written first, standalone)
    |
    +-- Reference Docs (can be parallel, independent sections)
    |       +-- Metrics
    |       +-- Timers
    |       +-- Overlays
    |       +-- Effects
    |       +-- Alerts
    |
    +-- Configuration Guide (depends on reference docs existing)
    |
    +-- FAQ/Troubleshooting (can start minimal, grow over time)

Theme System
    |
    +-- Base styles (required first)
    |
    +-- Dark mode toggle (enhancement, not blocking)
```

## MVP Recommendation

For MVP, prioritize in this order:

### Must Ship (Table Stakes)

1. **Landing page with hero** - Value proposition, screenshots, download CTA
2. **Platform-specific download buttons** - With GitHub releases integration
3. **Quickstart guide** - Enable logging, basic setup, first overlay
4. **Core reference docs** - At minimum: overlays (visual) and metrics (numbers)
5. **Basic installation instructions** - Per-platform with known gotchas
6. **Mobile-responsive layout** - Hamburger menu, readable on phones
7. **Sidebar navigation** - Users need to find pages

### Should Ship (High-Value Differentiators)

8. **Dark mode toggle** - Gaming audience expects this
9. **FAQ section** - Even if minimal initially
10. **GitHub stars/download count** - Social proof

### Defer to Post-MVP

- **Search functionality** - Nice to have but navigation can substitute
- **Comparison page** - Can add once docs are stable
- **Visual annotation guides** - Screenshots first, annotations later
- **Full reference coverage** - Ship with core features, expand later
- **Changelog integration** - Link to GitHub releases initially

## Complexity Budget

| Complexity | Features | Time Estimate |
|------------|----------|---------------|
| **Low** | Hero, CTAs, static content, sidebar, breadcrumbs, mobile menu, social proof links, dark mode toggle, code copy buttons | ~40% of effort |
| **Medium** | GitHub releases API, platform detection, quickstart guide, reference docs (quantity), responsive layout, FAQ accordions | ~50% of effort |
| **High** | Search functionality, complex animations, build systems | ~10% (defer most) |

## Sources

### Documentation Site Patterns
- [I'd Rather Be Writing - Doc Navigation Principles](https://idratherbewriting.com/files/doc-navigation-wtd/design-principles-for-doc-navigation/)
- [GitBook - Documentation Structure Tips](https://gitbook.com/docs/guides/docs-best-practices/documentation-structure-tips)
- [FluidTopics - Technical Documentation Trends 2025](https://www.fluidtopics.com/blog/industry-insights/technical-documentation-trends-2025/)
- [FluidTopics - Technical Documentation Trends 2026](https://www.fluidtopics.com/blog/industry-insights/technical-documentation-trends-2026/)

### Landing Page Conversion
- [KlientBoost - High-Converting SaaS Landing Pages](https://www.klientboost.com/landing-pages/saas-landing-page/)
- [Userpilot - Best SaaS Landing Pages](https://userpilot.com/blog/saas-landing-pages/)
- [Landingi - Software Landing Page Examples](https://landingi.com/landing-page/software-examples/)

### FAQ/Troubleshooting UX
- [NN/g - FAQ UX Deconstructed](https://www.nngroup.com/articles/faq-ux-deconstructed/)
- [Orbit Media - FAQ Page Design Best Practices](https://www.orbitmedia.com/blog/faq-page-design-best-practices/)

### Quickstart Guide Patterns
- [Document360 - Quick Start Guide](https://document360.com/blog/quick-start-guide/)
- [Talkdesk - Quick Start Guide](https://www.talkdesk.com/blog/a-quick-start-guide-what-it-is-and-why-your-customers-need-one/)

### Mobile Responsive Design
- [WebStacks - Mobile Website Design Best Practices 2025](https://www.webstacks.com/blog/mobile-website-design-best-practices)
- [MDN - Responsive Web Design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)

### Dark Mode Implementation
- [CSS-Tricks - Complete Guide to Dark Mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- [web.dev - Theme Switch Patterns](https://web.dev/patterns/theming/theme-switch)

### GitHub Releases Integration
- [GitHub Docs - About Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases)
- [GitHub Docs - Linking to Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/linking-to-releases)

### Competitive Analysis
- [Advanced Combat Tracker](https://advancedcombattracker.com/) - Established MMO parser with plugin ecosystem
- [StarParse / Ixparse](http://ixparse.com/features/) - SWTOR-specific parser with timers, overlays, raid features
- [Parsely](https://parsely.io/) - SWTOR combat log viewer with rotation visualization
