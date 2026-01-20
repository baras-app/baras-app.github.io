# Project Research Summary

**Project:** BARAS Documentation & Marketing Site
**Domain:** Documentation/marketing site for desktop gaming software (SWTOR combat log parser)
**Researched:** 2026-01-19
**Confidence:** HIGH

## Executive Summary

BARAS needs a documentation and marketing site hosted on GitHub Pages. Based on research, this is a well-understood domain with established patterns. The recommended approach is **Astro with Starlight** for the framework, which provides a docs-first architecture with the flexibility to create a custom marketing landing page. The zero-JavaScript-by-default philosophy ensures excellent performance on static hosting, while Astro Islands allow selective hydration for the GitHub Releases API integration needed on the downloads page.

The site must serve two distinct audiences: new users who need to quickly understand what BARAS does and download it, and existing users who need detailed documentation for configuration and troubleshooting. Research strongly indicates these audiences must be architecturally separated (landing page vs. docs section) with clear navigation paths. The landing page should focus exclusively on conversion (download CTA), while docs should be task-organized with a persistent sidebar.

The primary risks are (1) GitHub API rate limiting breaking the downloads section, (2) trust signals being insufficient for users wary of downloading gaming software, and (3) documentation written for developers instead of SWTOR players. All three are preventable with deliberate design choices established in Phase 1. Build-time release fetching with static fallback, prominent screenshots with open-source attribution, and user-first language standards should be established from the start.

## Key Findings

### Recommended Stack

Astro 5.x with Starlight 0.37+ is the recommended stack for this project. Starlight provides a full-featured documentation theme with built-in search (Pagefind), navigation, dark mode, and Markdown/MDX support. Unlike Docusaurus, it is not locked to React and achieves Lighthouse performance scores of 92+ versus Docusaurus's ~53. The Astro Islands architecture allows the downloads page to fetch from GitHub's Releases API while keeping the rest of the site fully static.

**Core technologies:**
- **Astro 5.16+**: Static site generator with zero-JS default, islands architecture for selective hydration
- **Starlight 0.37+**: Documentation theme with built-in Pagefind search, sidebar navigation, dark mode
- **Tailwind CSS 3.4+**: Utility-first styling, standard choice for Astro landing pages
- **Pagefind**: Static search bundled with Starlight, no external service or API keys needed
- **Fetch API**: Browser-native for GitHub Releases integration, no dependencies

### Expected Features

**Must have (table stakes):**
- Hero section with clear value proposition and screenshot
- Platform-specific download buttons (Windows .exe, macOS .dmg, Linux .AppImage)
- Quickstart guide (enable logging, basic overlay setup)
- Core reference docs (at minimum: overlays and metrics)
- Sidebar navigation with breadcrumbs
- Mobile-responsive layout
- Fast loading (<3 seconds)

**Should have (competitive):**
- Dark/light mode toggle (gaming audience expects this)
- Auto-detect platform for downloads
- GitHub stars/download count display (social proof)
- FAQ section
- Copy-to-clipboard on code blocks

**Defer (v2+):**
- Advanced search with filters
- Comparison page (BARAS vs StarParse)
- Visual annotation guides
- Localization/i18n
- Video tutorials

### Architecture Approach

The site architecture separates marketing (landing page) from documentation (Starlight-managed docs section). The landing page sits at the root and is a custom Astro page with full-width layout optimized for conversion. The docs section uses Starlight's built-in navigation and follows a two-part structure: task-oriented guides (Quickstart, Configuration, Troubleshooting) and lookup-oriented reference (Metrics, Timers, Overlays, Effects, Alerts). Maximum sidebar depth is 2 levels.

**Major components:**
1. **Landing Page** (/) — Marketing entry point with hero, feature showcase, download CTA
2. **Downloads Section** (/download/) — Platform detection, GitHub releases integration, installation instructions
3. **Guides Section** (/docs/guides/) — Task-oriented content (Quickstart, Configuration, Troubleshooting)
4. **Reference Section** (/docs/reference/) — Lookup content (Metrics, Timers, Overlays, Effects, Alerts)
5. **FAQ** (/docs/faq/) — Self-service support with collapsible Q&A

### Critical Pitfalls

1. **GitHub API Rate Limiting** — Unauthenticated requests limited to 60/hour per IP. Use build-time fetching via GitHub Action, cache aggressively, always provide direct GitHub releases link as fallback.

2. **Trust Signals Missing** — Gaming software downloads trigger user caution. Include real screenshots, link to GitHub source code, add platform-specific warnings about SmartScreen/Gatekeeper, show version and file size.

3. **Mixed Audience Confusion** — Landing page cluttered with docs OR docs hidden from evaluators. Architecturally separate marketing (landing) from documentation (Starlight), use progressive disclosure, single CTA per page.

4. **Developer-Speak in Docs** — Documentation uses internal terminology instead of SWTOR player language. Use "DPS breakdown" not "damage_output_metrics", include SWTOR boss/ability names, add glossary for endgame terminology.

5. **Image Performance** — Unoptimized screenshots destroy page load time. Establish image optimization pipeline from day 1 (WebP conversion, lazy loading, proper sizing).

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation & Infrastructure

**Rationale:** Site scaffolding, build pipeline, and navigation structure must exist before any content. This phase also establishes the image optimization pipeline and GitHub deployment workflow that everything else depends on.

**Delivers:**
- Astro + Starlight project setup with Tailwind
- GitHub Actions deployment to GitHub Pages
- Sidebar navigation structure (empty pages)
- Image optimization pipeline
- Basic responsive layout

**Addresses:** Mobile responsive design, fast loading, semantic HTML
**Avoids:** Image performance issues (#6), broken links (#9), SEO neglect (#7)

### Phase 2: Landing Page & Downloads

**Rationale:** This is the entry point for all users. A user cannot become a BARAS user without downloading the software. The landing page must establish trust and convert visitors to downloads before they need documentation.

**Delivers:**
- Marketing landing page with hero, feature showcase
- Downloads page with platform detection
- GitHub Releases API integration (build-time fetch)
- Installation instructions per platform
- Trust signals (screenshots, version info, open source link)

**Addresses:** Hero section, platform-specific downloads, social proof, trust
**Avoids:** API rate limiting (#1), trust signals missing (#2), mixed audience confusion (#3)

### Phase 3: Core Documentation

**Rationale:** After downloading, users need to get running quickly. Quickstart is the bridge from download to productive use. Core reference docs (metrics, overlays) cover what users ask about most.

**Delivers:**
- Quickstart guide (enable logging, first overlay, basic usage)
- Metrics reference documentation
- Overlays reference documentation
- FAQ section (even if minimal)

**Addresses:** Quickstart guide, core reference docs, FAQ
**Avoids:** Developer-speak (#4), poor navigation (#5), platform gaps (#10)

### Phase 4: Extended Documentation

**Rationale:** With core docs in place, expand to full feature coverage. This phase completes the reference documentation and adds the configuration guide.

**Delivers:**
- Timers reference documentation
- Effects reference documentation
- Alerts reference documentation
- Configuration guide
- Troubleshooting section

**Addresses:** Full reference coverage, configuration documentation
**Avoids:** Documentation staleness (#8) by establishing patterns

### Phase 5: Polish & Optimization

**Rationale:** With all content in place, optimize for discoverability and user experience. This phase adds SEO improvements, cross-linking, and any deferred enhancements.

**Delivers:**
- SEO optimization (meta tags, sitemap, keyword targeting)
- Cross-linking between related docs
- Dark mode toggle refinement
- Performance audit and fixes
- Analytics integration (if desired)

**Addresses:** SEO basics, internal linking, performance
**Avoids:** SEO neglect (#7), broken links over time (#9)

### Phase Ordering Rationale

- **Foundation before content:** Build pipeline, navigation structure, and image optimization must exist before writing pages. Retrofitting is painful.
- **Landing page before docs:** Users arrive at landing page first. They must be able to download before they need documentation.
- **Downloads with landing:** These are coupled because the landing page CTA leads directly to download. Trust signals and platform handling are part of the same conversion flow.
- **Quickstart before reference:** New users follow Quickstart. Reference is for lookup after they are already using BARAS.
- **Polish last:** SEO and optimization are most effective after content exists. Cross-linking requires pages to link to.

### Research Flags

**Phases likely needing deeper research during planning:**
- **Phase 2 (Downloads):** GitHub Releases API integration specifics, platform detection edge cases, SmartScreen/Gatekeeper bypass instructions need verification
- **Phase 3 (Core Docs):** Content requires user-provided screenshots and SWTOR-specific examples; research cannot substitute for domain expertise

**Phases with standard patterns (skip research-phase):**
- **Phase 1 (Foundation):** Astro + Starlight setup is well-documented with official guides
- **Phase 4 (Extended Docs):** Same patterns as Phase 3, just more content
- **Phase 5 (Polish):** Standard SEO and performance optimization patterns

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Official Astro/Starlight docs verified. Used by Cloudflare, Google, Microsoft. Clear winner over alternatives. |
| Features | HIGH | Multiple sources (NN/g, documentation best practices, landing page guides) align on recommendations. |
| Architecture | HIGH | Standard documentation site patterns with strong IA research backing. Two-part docs structure is established best practice. |
| Pitfalls | HIGH | GitHub API limits verified in official docs. Trust/security concerns well-documented. IA mistakes backed by NN/g research. |

**Overall confidence:** HIGH

### Gaps to Address

- **SWTOR-specific content:** Research identified what content structure is needed but cannot provide SWTOR boss names, ability names, or domain-specific examples. User must provide this context during documentation phases.
- **Screenshots:** All phases depend on real BARAS screenshots. Research recommends annotated screenshots but cannot generate them.
- **GitHub repository specifics:** Downloads integration needs the actual repository name/owner. Current research uses placeholders.
- **Community validation:** Trust signals like "used by X guilds" or testimonials require real community data if available.

## Tensions and Tradeoffs

**Stack tension (resolved):** ARCHITECTURE.md initially leaned toward Hugo given user familiarity, but STACK.md research found Astro + Starlight superior for this specific use case (docs + marketing + API integration). Recommendation: Go with Astro. The learning investment pays off in better tooling.

**Build-time vs. runtime fetch:** STACK.md and PITFALLS.md both flag GitHub API rate limiting. Options are build-time fetch (always stale but reliable) or client-side fetch (fresh but can fail). Recommendation: Build-time fetch with manual trigger on releases, plus client-side refresh with fallback. Best of both worlds.

**Scope control:** FEATURES.md identifies many "should have" features. Risk of scope creep. Recommendation: Phases 1-3 are MVP. Phases 4-5 are enhancements. Ship after Phase 3 if time-constrained.

## Sources

### Primary (HIGH confidence)
- [Starlight Getting Started](https://starlight.astro.build/getting-started/) — framework setup, features
- [Astro 2025 Year in Review](https://astro.build/blog/year-in-review-2025/) — ecosystem health, adoption
- [GitHub REST API Rate Limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) — API constraints
- [NN/g Information Architecture](https://www.nngroup.com/articles/top-10-ia-mistakes/) — navigation best practices

### Secondary (MEDIUM confidence)
- [Starlight vs Docusaurus - LogRocket](https://blog.logrocket.com/starlight-vs-docusaurus-building-documentation/) — framework comparison
- [Document360: Documentation Mistakes](https://document360.com/blog/developer-documentation-mistakes/) — pitfall identification
- [KlientBoost: SaaS Landing Pages](https://www.klientboost.com/landing-pages/saas-landing-page/) — landing page patterns

### Tertiary (LOW confidence)
- Competitive analysis of StarParse, ACT, Parsely — feature expectations (sites may change)

---
*Research completed: 2026-01-19*
*Ready for roadmap: yes*
