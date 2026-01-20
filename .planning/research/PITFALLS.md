# Domain Pitfalls

**Domain:** Documentation/Marketing site for desktop gaming software (BARAS)
**Researched:** 2026-01-19
**Confidence:** HIGH (multiple sources, domain-specific research)

---

## Critical Pitfalls

Mistakes that cause rewrites, major user abandonment, or fundamental project failure.

---

### Pitfall 1: GitHub API Rate Limiting Breaks Download Button

**What goes wrong:** Client-side JavaScript fetches release data from GitHub API on every page load. Unauthenticated requests are limited to 60/hour per IP. Popular ISPs share IPs, gaming cafe users share IPs, and mobile users rotate through carrier NAT pools. Users hit rate limits and see broken download buttons or error messages.

**Why it happens:** Developers test on their own connection, never hitting rate limits. They assume "it's just fetching JSON" is trivial. But 60 requests/hour per IP address is easily exhausted in shared-IP environments.

**Consequences:**
- Download button shows "Error" or stale data
- Users think the site is broken and leave
- Gaming community word-of-mouth spreads quickly: "the download doesn't work"

**Prevention:**
1. **Build-time fetching:** Fetch release data during static site build, not client-side
2. **Cache with CDN:** If client-side is needed, cache responses aggressively (localStorage with TTL)
3. **Fallback display:** Always show a direct GitHub releases link as fallback
4. **Conditional requests:** Use ETags to reduce API calls

**Detection (warning signs):**
- Console shows 403 errors during testing
- Download section appears blank/broken on first visit after long absence
- Users report "download doesn't work" but it works for you

**Phase relevance:** Must address in **Phase 1 (Foundation)** when building download section. Not something to defer.

**Sources:**
- [GitHub REST API Rate Limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)
- [GitHub API Rate Limit Exceeded Problem](https://dev.to/codexam/github-api-rate-limit-exceeded-problem-502f)

---

### Pitfall 2: Non-Technical Users Don't Trust Unknown Downloads

**What goes wrong:** Gamers arrive at a site offering a desktop application download. The site has no trust signals. Users who regularly avoid malware see a random .exe download and bounce immediately. Windows SmartScreen warns "Unknown publisher." macOS quarantine blocks execution.

**Why it happens:** Developers focus on functionality, not trust. They assume users will download because the tool is useful. But non-technical users have been trained to fear downloads from unknown sites.

**Consequences:**
- High bounce rate on download page
- Users download but can't run (SmartScreen/Gatekeeper blocks)
- Negative reviews: "site looks sketchy" or "Windows blocked it"
- SWTOR community warns others away

**Prevention:**
1. **Trust signals on landing page:**
   - Real screenshots of BARAS in action (not stock photos)
   - Clear attribution to the developer
   - Link to GitHub source code ("open source, you can verify")
   - Mention of community adoption if applicable
2. **Platform-specific warnings:**
   - Windows: "SmartScreen may warn because we're a new publisher. Click 'More info' then 'Run anyway'"
   - macOS: Step-by-step quarantine removal instructions with screenshots
   - Linux: Explain AppImage permissions
3. **Download page clarity:**
   - Show file size, version number, release date
   - Checksum/hash for verification (for technical users who want it)
   - Changelog link so users see active development
4. **Visual consistency:** Professional design signals legitimacy

**Detection (warning signs):**
- Analytics show high bounce on download page
- GitHub issues: "Is this safe?" or "SmartScreen blocked it"
- Low conversion from landing page to download

**Phase relevance:** Address in **Phase 1 (Foundation)** for download section, and **Phase 2 (Visual Polish)** for overall trust aesthetic.

**Sources:**
- [The Risk of Downloading Software from the Internet](https://www.visma.com/resources/content/the-risk-of-downloading-software-from-the-internet)
- [How App Downloads Became a Trust Signal](https://visionary-finance.com/how-app-downloads-became-a-trust-signal/)

---

### Pitfall 3: Mixed Audience, Mixed Message

**What goes wrong:** The site tries to serve two audiences simultaneously:
1. **New users:** Want quick "what is this?" and frictionless download
2. **Existing users:** Want detailed documentation on specific features

Result: Landing page is cluttered with feature docs, OR docs are hidden and new users can't evaluate the product. Neither audience is served well.

**Why it happens:** Single-page mentality or flat site structure. Developer knows everything so they don't feel the information overload.

**Consequences:**
- New users feel overwhelmed and don't download
- Existing users can't find the specific doc they need
- High bounce rates across all pages
- Support questions about things that ARE documented (but hidden)

**Prevention:**
1. **Clear separation of concerns:**
   - Landing page: Marketing focus (what it does, why you want it, download CTA)
   - Docs section: Reference focus (how to use every feature)
   - Quickstart: Bridge (get running in 5 minutes)
2. **Progressive disclosure:**
   - Landing page shows benefits, not every feature
   - "Learn more" links lead to docs for those who want depth
3. **Navigation that reflects user journeys:**
   - "New? Start Here" path
   - "Already using BARAS?" path to docs
4. **Single primary CTA per page:**
   - Landing page: Download button
   - Quickstart: "Next step" progression
   - Doc pages: No competing CTAs

**Detection (warning signs):**
- Users ask "where do I download?" on a page that has docs and download
- Analytics show users bouncing from landing page without scrolling
- Long time-on-page but no conversions (users are confused, not engaged)

**Phase relevance:** Information architecture must be established in **Phase 1 (Foundation)**. Very hard to restructure later.

**Sources:**
- [Creating A Persona Website Content Strategy](https://www.leanlabs.com/blog/persona-website-content-strategy)
- [How to Design a Persona-Centric Website Experience](https://blog.hubspot.com/blog/tabid/6307/bid/32434/how-to-design-a-persona-centric-website-experience.aspx)

---

## Moderate Pitfalls

Mistakes that cause delays, technical debt, or poor user experience.

---

### Pitfall 4: Documentation Written for the Developer, Not the User

**What goes wrong:** Docs use BARAS internal terminology, assume knowledge of combat logging, reference config options by their TOML keys, and explain "what" without "why" or "how."

**Why it happens:** Developer writes docs while deeply familiar with the system. Curse of knowledge prevents seeing it from a new user's perspective.

**Consequences:**
- Users don't understand docs
- Support burden increases (answering questions the docs "answer")
- Users give up on features they'd love if they understood them

**Prevention:**
1. **User-first language:**
   - "DPS breakdown" not "damage_output_metrics"
   - "When to use" sections before "How to configure"
2. **Explain the "why":**
   - Not just "Timers trigger on ability names"
   - But "Timers let you know when a boss is about to use a dangerous attack"
3. **SWTOR-native examples:**
   - Use real SWTOR boss names, ability names, class names
   - Screenshots showing BARAS with actual SWTOR combat
4. **Glossary for shared terms:**
   - Define DPS, HPS, APM, etc. for newer players
   - Don't assume everyone knows endgame terminology
5. **Task-oriented organization:**
   - "How do I track my DPS?" not "Metrics System Architecture"

**Detection (warning signs):**
- Docs reference code/config names instead of UI labels
- No screenshots showing real SWTOR context
- FAQ questions are about things documented in detail elsewhere

**Phase relevance:** Address throughout **documentation phases**. Establish style guide early.

**Sources:**
- [10 Common Developer Documentation Mistakes](https://document360.com/blog/developer-documentation-mistakes/)
- [Breaking Down Common Documentation Mistakes](https://www.mintlify.com/blog/breaking-down-common-documentation-mistakes)

---

### Pitfall 5: Poor Navigation / Information Architecture

**What goes wrong:** Documentation is organized by implementation structure (how the code is organized) instead of user tasks (what users want to do). Users can't find what they need, give up, and either abandon the tool or flood support channels.

**Why it happens:** Developer mirrors code structure in docs ("here's the timers module docs, here's the overlays module docs"). Or, docs grow organically without planning and become a maze.

**Consequences:**
- Users can't find information even when it exists
- Support burden ("How do I...?" for documented features)
- Docs feel overwhelming even when content is good

**Prevention:**
1. **Task-based organization:**
   - "Getting Started" (install, first use)
   - "Core Features" (the main things you'll use)
   - "Advanced Features" (power user stuff)
   - "Troubleshooting" (when things go wrong)
2. **Consistent navigation:**
   - Sidebar visible on all doc pages
   - Breadcrumbs showing current location
   - "On this page" table of contents for long pages
3. **Search that works:**
   - Good search is essential for docs
   - Bad search is worse than no search (leads users astray)
4. **Cross-linking:**
   - Related topics link to each other
   - "See also" sections connect related content
5. **Don't organize by company/code structure:**
   - Users don't care about your internal module boundaries

**Detection (warning signs):**
- Users ask where things are that exist
- Analytics show users visiting many pages before finding target
- High bounce rate on doc landing page

**Phase relevance:** Establish structure in **Phase 1 (Foundation)**. Easier to fill good structure than restructure bad structure.

**Sources:**
- [Top 10 Information Architecture Mistakes](https://www.nngroup.com/articles/top-10-ia-mistakes/)
- [Building Navigation for Documentation Sites](https://idratherbewriting.com/files/doc-navigation-wtd/design-principles-for-doc-navigation/)

---

### Pitfall 6: Images Destroy Page Performance

**What goes wrong:** Documentation includes many high-resolution screenshots. Each page loads 5-10MB of images. Users on slower connections wait 10+ seconds for pages. Mobile users burn data. Core Web Vitals tank.

**Why it happens:** Developer captures screenshots at native resolution, drops them in without optimization. "It looks fine on my fast connection."

**Consequences:**
- Slow page loads drive users away (53% leave after 3 seconds)
- Poor Core Web Vitals hurt SEO
- Mobile users have bad experience
- GitHub Pages bandwidth limits could be hit

**Prevention:**
1. **Optimize at build time:**
   - Use image optimization in static site generator (Astro, Hugo, etc.)
   - Convert to WebP/AVIF formats
   - Generate responsive srcsets
2. **Right-size screenshots:**
   - Full-width screenshots don't need to be 4K
   - Crop to relevant area
   - Use consistent dimensions
3. **Lazy loading:**
   - Below-fold images load on scroll
   - `loading="lazy"` attribute
4. **Image quality settings:**
   - 80% quality is usually indistinguishable and 4x smaller
5. **Consider image CDN:**
   - Even with GitHub Pages, can use Cloudinary/imgix free tier

**Detection (warning signs):**
- PageSpeed Insights shows poor LCP (Largest Contentful Paint)
- Network tab shows multi-MB image files
- Pages feel slow on mobile or throttled connections

**Phase relevance:** Establish image pipeline in **Phase 1 (Foundation)**. Retrofitting optimization is painful.

**Sources:**
- [Image Optimization Web Performance](https://www.debugbear.com/blog/image-optimization-web-performance)
- [How To Optimize Images for Web](https://kinsta.com/blog/optimize-images-for-web/)

---

### Pitfall 7: SEO Neglect Makes Site Undiscoverable

**What goes wrong:** Beautiful static site is invisible to search engines. Users searching "SWTOR combat log parser" or "SWTOR DPS meter" find Reddit posts about other tools, not the BARAS site.

**Why it happens:** Developer assumes people will find the site through GitHub or direct links. SEO feels like marketing, not development. Static site generators don't automatically handle SEO.

**Consequences:**
- New users never discover BARAS
- Competitors with worse products but better SEO win mindshare
- Community growth stalls

**Prevention:**
1. **Basic SEO hygiene:**
   - Unique title and meta description on every page
   - Semantic HTML (proper headings hierarchy)
   - XML sitemap submitted to Google Search Console
2. **SWTOR-specific keywords:**
   - "SWTOR combat log parser"
   - "SWTOR DPS meter"
   - "SWTOR raid analysis"
   - "SWTOR parse tool"
3. **Content that ranks:**
   - Docs with good structure rank for long-tail queries
   - "How to enable combat logging in SWTOR" could bring traffic
4. **Internal linking:**
   - Pages link to related pages
   - No orphan pages
5. **Mobile optimization:**
   - Google prioritizes mobile-friendly sites

**Detection (warning signs):**
- Zero organic search traffic in analytics
- Searching "SWTOR combat log parser" doesn't show site
- Pages missing from Google index

**Phase relevance:** Establish SEO foundations in **Phase 1**. Build on them in every phase. SEO grows over time.

**Sources:**
- [SEO for Static Sites Expert Strategy](https://statichunt.com/blog/seo-for-static-sites)
- [Common SEO Mistakes to Avoid 2025](https://www.siegemedia.com/seo/common-seo-mistakes)

---

## Minor Pitfalls

Mistakes that cause annoyance but are fixable without major rework.

---

### Pitfall 8: Stale Documentation After Updates

**What goes wrong:** BARAS ships a new version with UI changes or new features. Site still shows old screenshots and outdated instructions. Users follow docs but see different behavior.

**Why it happens:** Docs are decoupled from app releases. No process to update docs when app changes.

**Prevention:**
1. **Docs checklist in release process:**
   - Every BARAS release triggers doc review
   - "Does this change affect any docs?" as release gate
2. **Version indicators:**
   - "As of BARAS 1.2.0" on docs where version matters
   - Note when features were added
3. **Screenshot automation (stretch goal):**
   - If possible, generate screenshots programmatically
   - At minimum, maintain a "screenshots to update" list

**Detection (warning signs):**
- Screenshots show old UI
- Users report "docs don't match what I see"
- Version numbers in docs are old

**Phase relevance:** Establish process in **Phase 3+ (Documentation)**. Document the documentation process.

---

### Pitfall 9: Broken Links Over Time

**What goes wrong:** Internal links break when pages are moved. External links break when other sites change. Users hit 404s.

**Why it happens:** Organic site growth without link auditing. External links rot naturally.

**Prevention:**
1. **Link checking in CI:**
   - Build-time broken link detection
   - Fail build on internal broken links
2. **Permalinks:**
   - Establish URL structure early
   - Don't change URLs without redirects
3. **External link monitoring:**
   - Periodically check external links
   - Archive important external resources

**Detection (warning signs):**
- 404s in server logs
- Users report broken links
- Search Console reports crawl errors

**Phase relevance:** Establish link checking in **Phase 1 (Foundation)** build pipeline.

---

### Pitfall 10: Platform-Specific Instructions Are Incomplete

**What goes wrong:** Windows instructions work great. macOS mentions quarantine but not how to fix it. Linux doesn't mention NVIDIA driver issues. Users on non-Windows platforms have bad first experience.

**Why it happens:** Developer primarily uses one platform. Tests on that platform. Other platforms get less attention.

**Consequences:**
- macOS users can't run BARAS (quarantine blocks it)
- Linux users with NVIDIA GPUs hit known issue
- Users blame BARAS, not the platform quirk

**Prevention:**
1. **Platform-specific pages or sections:**
   - Dedicated installation guide per platform
   - Screenshots from that platform
2. **Known issues documented:**
   - macOS quarantine removal steps (with screenshots)
   - Linux NVIDIA workaround (mentioned in PROJECT.md)
   - Windows SmartScreen bypass
3. **Test on all target platforms:**
   - Or recruit community testers

**Detection (warning signs):**
- GitHub issues cluster around one platform
- "Works on Windows, can't get it running on Mac" reports

**Phase relevance:** Cover in **Phase 1 (Quickstart)** and **Phase 3 (Documentation)**.

---

## Phase-Specific Warnings Summary

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Download Section | API rate limiting (#1) | Build-time fetch, caching, fallback |
| Download Section | Trust signals (#2) | Screenshots, version info, platform warnings |
| Landing Page | Mixed audience (#3) | Clear separation, single CTA |
| Site Foundation | Navigation (#5) | Task-based IA, establish early |
| Site Foundation | Image performance (#6) | Optimization pipeline from day 1 |
| Site Foundation | SEO (#7) | Meta tags, sitemap, semantic HTML |
| Documentation | Dev-speak (#4) | User-first language, SWTOR examples |
| Documentation | Staleness (#8) | Release checklist, version indicators |
| All Phases | Broken links (#9) | Link checking in CI |
| Quickstart | Platform gaps (#10) | Platform-specific guides |

---

## Sources Summary

**Documentation Best Practices:**
- [Mintlify: Common Documentation Mistakes](https://www.mintlify.com/blog/breaking-down-common-documentation-mistakes)
- [Document360: Developer Documentation Mistakes](https://document360.com/blog/developer-documentation-mistakes/)
- [NN/G: Information Architecture Mistakes](https://www.nngroup.com/articles/top-10-ia-mistakes/)

**GitHub Pages & API:**
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub API Rate Limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)

**Performance & SEO:**
- [DebugBear: Image Optimization](https://www.debugbear.com/blog/image-optimization-web-performance)
- [Statichunt: SEO for Static Sites](https://statichunt.com/blog/seo-for-static-sites)

**Landing Page & Conversion:**
- [Fibr: Landing Page Mistakes](https://fibr.ai/landing-page/mistakes)
- [Moosend: Landing Page Mistakes 2025](https://moosend.com/blog/landing-page-mistakes/)

**Trust & Security:**
- [Visma: Risk of Downloading Software](https://www.visma.com/resources/content/the-risk-of-downloading-software-from-the-internet)
- [SignMyCode: Software Security](https://signmycode.com/blog/how-to-check-software-security-to-prevent-dangers-of-downloading-software)
