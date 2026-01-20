# Architecture Patterns

**Domain:** Documentation/marketing site for desktop application (BARAS combat log parser)
**Researched:** 2026-01-19
**Confidence:** HIGH (well-established patterns, multiple authoritative sources)

## Recommended Architecture

```
+---------------------------+
|     Landing Page (/)      |  <-- Marketing entry point
|  Hero | Features | CTA    |
+---------------------------+
            |
     +------+------+
     |             |
     v             v
+----------+  +------------+
|   Docs   |  | Downloads  |
|  /docs/  |  | /download/ |
+----------+  +------------+
     |
     +-- Guides (task-oriented)
     |     +-- Quickstart
     |     +-- Configuration
     |     +-- Troubleshooting
     |
     +-- Reference (lookup-oriented)
           +-- Metrics
           +-- Timers
           +-- Overlays
           +-- Effects
           +-- Alerts
```

### Component Boundaries

| Component | Responsibility | Dependencies | Data Source |
|-----------|---------------|--------------|-------------|
| Landing Page | Marketing, first impression, conversion | None | Static content |
| Downloads | Platform detection, release links | GitHub Releases API | Client-side fetch or build-time |
| Docs Navigation | Sidebar, breadcrumbs, prev/next | Content structure | Static (from SSG) |
| Guides Section | Task-oriented tutorials | Screenshots | Static content |
| Reference Section | Feature documentation | Screenshots | Static content |
| FAQ/Troubleshooting | Common problems, solutions | None | Static content |

### Data Flow

```
Build Time:
  Markdown files --> SSG --> Static HTML/CSS/JS --> Deploy to GitHub Pages

Runtime (Downloads page only):
  Browser --> fetch() --> GitHub Releases API --> Render download buttons
                              |
                              v
                         Rate limit: 60 req/hour unauthenticated
```

**Key insight:** Almost everything is static. Only the Downloads page needs runtime data fetching from GitHub API. This can alternatively be done at build-time with a GitHub Action to avoid rate limits.

## Content Architecture

### Two-Part Documentation Structure

Documentation sites typically organize content into two complementary structures:

**1. Guides (Task-Oriented)**
- Answer: "How do I accomplish X?"
- Linear progression through tasks
- User follows start-to-finish
- Examples: Quickstart, Installation, Configuration

**2. Reference (Lookup-Oriented)**
- Answer: "What does X do?"
- Non-linear, accessed as needed
- User jumps to specific topic
- Examples: Metrics Reference, API docs, Feature catalogs

For BARAS, this maps to:

| Guide (task) | Reference (lookup) |
|--------------|-------------------|
| Quickstart Guide | Metrics Reference |
| Configuration Guide | Timers Reference |
| Troubleshooting | Overlays Reference |
| | Effects Reference |
| | Alerts Reference |

### Sidebar Navigation Depth

**Recommendation:** Maximum 2 levels deep.

Research shows deeper hierarchies hurt usability. Structure as:

```
Guides                    <-- Level 1 (section)
  Quickstart              <-- Level 2 (page)
  Installation            <-- Level 2 (page)
    (headings on page)    <-- Level 3 (in-page anchors, not nav)
  Configuration           <-- Level 2 (page)

Reference                 <-- Level 1 (section)
  Metrics                 <-- Level 2 (page)
  Timers                  <-- Level 2 (page)
  ...
```

## Page Types and Templates

### 1. Landing Page Template

**Purpose:** Marketing conversion - visitor becomes user

**Sections (in order):**
1. Hero: Headline + screenshot + primary CTA (Download)
2. Value proposition: 3-4 key benefits with icons
3. Feature showcase: Screenshots with descriptions
4. Social proof: User testimonials or community size (if available)
5. Secondary CTA: Links to docs, GitHub

**Layout:** Full-width, no sidebar

### 2. Documentation Page Template

**Purpose:** Information delivery - user learns or looks up

**Structure:**
- Left sidebar: Navigation tree
- Main content: Markdown-rendered documentation
- Right sidebar (optional): Table of contents for current page
- Footer: Prev/Next navigation links

**Layout:** Three-column (nav | content | TOC) or two-column (nav | content)

### 3. Downloads Page Template

**Purpose:** Conversion - visitor downloads correct version

**Sections:**
1. Platform detection: Auto-detect OS, highlight recommended download
2. Download buttons: Windows, macOS, Linux with version numbers
3. Installation instructions: Platform-specific (collapsible or tabs)
4. Release notes link: To GitHub releases for changelog

**Layout:** Centered, focused on download action

### 4. FAQ Page Template

**Purpose:** Self-service support

**Structure:**
- Collapsible Q&A pairs grouped by category
- Search/filter capability (optional)
- Links to full documentation for detailed answers

**Layout:** Single column, accordion-style

## Directory Structure Recommendation

For a Hugo-based site (user mentioned familiarity with Hugo):

```
baras-app.github.io/
  _config.yml           # If staying with Jekyll
  config.toml           # If migrating to Hugo

  content/              # All content lives here
    _index.md           # Landing page

    docs/               # Documentation section
      _index.md         # Docs landing (optional overview)

      guides/           # Task-oriented content
        _index.md
        quickstart.md
        installation.md
        configuration.md
        troubleshooting.md

      reference/        # Lookup content
        _index.md
        metrics.md
        timers.md
        overlays.md
        effects.md
        alerts.md

    download/           # Downloads page
      _index.md

    faq/                # FAQ section
      _index.md

  layouts/              # Template overrides
    _default/
      baseof.html
    index.html          # Landing page layout
    docs/
      single.html       # Doc page layout
      list.html         # Section listing
    download/
      single.html       # Downloads layout

  static/               # Static assets
    images/
      screenshots/      # App screenshots
      icons/            # Feature icons
    js/
      downloads.js      # GitHub API fetch logic

  assets/               # Processed assets (SCSS, etc.)
    scss/
```

## Patterns to Follow

### Pattern 1: Progressive Disclosure

**What:** Show summary first, details on demand
**When:** Landing page features, FAQ answers, installation options
**Example:**
```html
<!-- Landing page feature -->
<div class="feature">
  <h3>Real-time DPS Tracking</h3>
  <p>See your damage output live during combat.</p>
  <a href="/docs/reference/metrics/">Learn more</a>
</div>
```

### Pattern 2: Platform-Aware Downloads

**What:** Detect user's OS, pre-select appropriate download
**When:** Downloads page
**Example:**
```javascript
// Detect platform and highlight appropriate download
const platform = navigator.platform.toLowerCase();
if (platform.includes('win')) {
  highlightDownload('windows');
} else if (platform.includes('mac')) {
  highlightDownload('macos');
} else if (platform.includes('linux')) {
  highlightDownload('linux');
}
```

### Pattern 3: Build-Time Release Fetching

**What:** Fetch GitHub releases during build, not at runtime
**When:** To avoid API rate limits and improve page load
**Example (Hugo data template):**
```yaml
# data/releases.yaml (generated by GitHub Action)
latest:
  version: "1.2.3"
  date: "2026-01-15"
  assets:
    windows: "https://github.com/.../baras-1.2.3.exe"
    macos: "https://github.com/.../baras-1.2.3.dmg"
    linux: "https://github.com/.../baras-1.2.3.AppImage"
```

### Pattern 4: Contextual Navigation

**What:** Show where user is in doc hierarchy
**When:** All documentation pages
**Elements:**
- Breadcrumbs: Home > Docs > Reference > Metrics
- Active state in sidebar
- Prev/Next links at page bottom

## Anti-Patterns to Avoid

### Anti-Pattern 1: Deep Navigation Hierarchies

**What:** More than 3 levels of nesting in sidebar
**Why bad:** Users lose context, harder to navigate, mobile unfriendly
**Instead:** Flatten to 2 levels max; use in-page headings for depth

### Anti-Pattern 2: Runtime API Fetching Without Fallback

**What:** Downloads page that fails if GitHub API is unavailable
**Why bad:** Rate limits (60/hour unauthenticated), API outages block downloads
**Instead:**
- Build-time fetching with cached data
- OR client-side with static fallback links
- OR direct links to GitHub releases as fallback

### Anti-Pattern 3: One Giant Documentation Page

**What:** All documentation in a single long page
**Why bad:** Slow to load, hard to link to specific sections, poor SEO
**Instead:** One page per major topic, use anchor links for sections

### Anti-Pattern 4: Marketing Language in Documentation

**What:** "Our amazing feature does incredible things!"
**Why bad:** Users reading docs want facts, not sales pitch
**Instead:** Clear, factual descriptions: "The DPS overlay displays damage-per-second in real-time."

### Anti-Pattern 5: Assuming Technical Knowledge

**What:** "Configure the TOML file with the overlay parameters"
**Why bad:** Target audience is non-technical SWTOR players
**Instead:** "Open the settings file and change these values: [screenshot]"

## Build Order Implications

Based on architecture dependencies, recommended build order:

```
Phase 1: Foundation
  - Site scaffolding (SSG setup, theme/layouts)
  - Navigation structure (sidebar, header)
  - Basic page templates

  Rationale: Everything else depends on working site structure

Phase 2: Landing Page
  - Marketing content
  - Hero section
  - Feature showcase

  Rationale: Entry point for users, establishes visual identity
  No dependencies on other content existing

Phase 3: Downloads
  - Downloads page
  - GitHub API integration (or build-time fetching)
  - Platform detection
  - Installation instructions

  Rationale: Critical path - users need to download before they need docs
  Depends on: Phase 1 (site structure)

Phase 4: Core Documentation
  - Quickstart guide (highest priority doc)
  - Reference docs (metrics, overlays - what users ask about most)

  Rationale: Quickstart is immediate need after download
  Depends on: Phase 1 (site structure)
  Needs: Screenshots from user

Phase 5: Extended Documentation
  - Remaining reference docs
  - Configuration guide
  - FAQ/Troubleshooting

  Rationale: Important but not blocking user success
  Depends on: Phase 4 patterns established
```

## Technology Choices

### SSG Recommendation: Hugo

Given user familiarity with Hugo and project requirements:

| Requirement | Hugo Capability |
|-------------|-----------------|
| GitHub Pages hosting | Native support |
| Documentation with sidebar | Docsy theme or custom |
| Marketing landing page | Custom layout, full-width |
| Build-time data fetching | Data templates, getJSON |
| Fast builds | Extremely fast |
| Markdown content | Native |

**Alternative considered:** Astro with Starlight
- Pro: More modern, excellent docs theme
- Con: User less familiar, more setup
- Verdict: Hugo is appropriate for scope

### Theme Recommendation: Custom or Docsy-inspired

For a project this size (10-20 pages), a custom theme built on Hugo's base is reasonable. Docsy is excellent but may be overkill.

**Minimum custom theme needs:**
- Landing page layout (full-width, no nav)
- Docs layout (sidebar nav, optional TOC)
- Downloads layout (centered, platform buttons)
- Shared header/footer
- Mobile-responsive navigation

## Sources

- [Jekyll Directory Structure](https://jekyllrb.com/docs/structure/)
- [GitHub Pages and Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)
- [Docusaurus](https://docusaurus.io/)
- [Hugo Directory Structure](https://gohugo.io/getting-started/directory-structure/)
- [Docsy Theme](https://www.docsy.dev/)
- [Building Navigation for Documentation Sites](https://idratherbewriting.com/files/doc-navigation-wtd/design-principles-for-doc-navigation/)
- [Information Architecture vs Navigation (NN/G)](https://www.nngroup.com/articles/ia-vs-navigation/)
- [CloudCannon: Hugo Documentation Themes](https://cloudcannon.com/blog/twelve-amazing-free-hugo-documentation-themes/)
