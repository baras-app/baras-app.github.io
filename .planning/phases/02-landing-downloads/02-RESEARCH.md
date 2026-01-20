# Phase 2: Landing & Downloads - Research

**Researched:** 2026-01-20
**Domain:** Starlight landing pages, GitHub Releases API integration, platform detection, installation guides
**Confidence:** HIGH

## Summary

Phase 2 requires building a marketing landing page with hero section, screenshot carousel, platform-aware downloads, and installation guides within the existing Astro/Starlight framework. The research confirms this is well-supported by Starlight's existing features.

Key findings:
1. **Landing page**: Use Starlight's `template: splash` with enhanced hero frontmatter. The existing `src/content/docs/index.mdx` already uses this template - extend it rather than replace it.
2. **Downloads**: Fetch GitHub Releases API client-side using vanilla JavaScript in a `<script>` tag (no framework island needed). The BARAS releases use CalVer (v2026.1.1901) with platform-specific asset naming.
3. **Platform detection**: Use `navigator.userAgent` with fallback patterns. Highlight detected platform's download button while showing alternatives.
4. **Installation guides**: Use Starlight's built-in `<Tabs>` component with `syncKey` for platform switching. Include Asides for platform-specific warnings (macOS quarantine, Linux NVIDIA).

**Primary recommendation:** Build on the existing splash page structure. Use client-side JavaScript for dynamic release fetching without React/Vue islands - keep the zero-JS static approach where possible, hydrating only the download component.

## Standard Stack

The established libraries/tools for this phase:

### Core (Already Installed)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| @astrojs/starlight | ^0.37.3 | Documentation framework | Already configured, provides splash template, Tabs, Cards |
| astro | ^5.6.1 | Static site generator | Foundation from Phase 1 |

### Supporting (Built-in to Starlight)
| Component | Import | Purpose | When to Use |
|-----------|--------|---------|-------------|
| Tabs, TabItem | `@astrojs/starlight/components` | Platform-specific content | Installation instructions |
| Card, CardGrid | `@astrojs/starlight/components` | Feature highlights | Value proposition section |
| Icon | `@astrojs/starlight/components` | Platform icons | Download buttons |
| Aside | Markdown `:::note` / `:::caution` | Callout boxes | Platform quirks |

### No Additional Dependencies Needed
| Instead of | Don't Use | Reason |
|------------|-----------|--------|
| React/Vue carousel | astro-swiper, astro-carousel | CSS scroll-snap handles this; no hydration needed |
| Fetch wrapper library | axios, ky | Native fetch() sufficient for single API call |
| Platform detection library | platform.js | Simple userAgent check sufficient |

**Installation:** No new packages required.

## Architecture Patterns

### Project Structure (Additions to Phase 1)
```
src/
├── content/docs/
│   └── index.mdx           # Enhanced landing page (exists, modify)
├── components/
│   ├── ThemeProvider.astro # Exists from Phase 1
│   ├── DownloadSection.astro    # NEW: Download buttons with API fetch
│   ├── ScreenshotCarousel.astro # NEW: CSS scroll-snap carousel
│   └── InstallationGuide.astro  # NEW: Tabbed platform instructions
├── assets/
│   └── screenshots/        # NEW: Placeholder images for carousel
└── styles/
    └── custom.css          # Extend with carousel and download styles
```

### Pattern 1: Client-Side Release Fetching

**What:** Fetch GitHub Releases API on page load, update download buttons
**When to use:** Dynamic data that changes frequently (release versions)
**Why:** Static site can't build-time fetch changing data; client fetch is appropriate here

```astro
---
// DownloadSection.astro - Server part (runs at build)
// No server-side data fetching needed
---

<div class="download-section" id="downloads">
  <div class="download-primary" id="primary-download">
    <!-- Populated by JS -->
    <span class="loading">Loading latest release...</span>
  </div>
  <div class="download-alternatives" id="alt-downloads">
    <!-- Populated by JS -->
  </div>
</div>

<script>
  // Client-side fetch - runs in browser
  const API_URL = 'https://api.github.com/repos/baras-app/baras/releases/latest';

  async function loadReleases() {
    try {
      const response = await fetch(API_URL);
      const release = await response.json();
      const version = release.tag_name; // e.g., "v2026.1.1901"

      // Detect user platform
      const platform = detectPlatform();

      // Find matching assets
      const assets = mapAssetsToplatforms(release.assets);

      // Update DOM
      renderDownloadButtons(assets, platform, version);
    } catch (error) {
      renderFallbackLinks();
    }
  }

  function detectPlatform() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('win')) return 'windows';
    if (ua.includes('mac')) return 'macos';
    if (ua.includes('linux')) return 'linux';
    return 'unknown';
  }

  document.addEventListener('DOMContentLoaded', loadReleases);
</script>
```

### Pattern 2: CSS Scroll-Snap Carousel

**What:** Pure CSS carousel using scroll-snap
**When to use:** Image galleries, screenshots
**Why:** No JavaScript hydration, works with JS disabled, accessible

```astro
---
// ScreenshotCarousel.astro
const screenshots = [
  { src: '/screenshots/overlay.webp', alt: 'DPS overlay in action' },
  { src: '/screenshots/explorer.webp', alt: 'Data explorer view' },
];
---

<div class="carousel-container">
  <div class="carousel" role="group" aria-label="Screenshots">
    {screenshots.map((img, i) => (
      <div class="carousel-slide" aria-label={`Slide ${i + 1}`}>
        <img src={img.src} alt={img.alt} loading="lazy" />
      </div>
    ))}
  </div>
  <nav class="carousel-nav" aria-label="Carousel navigation">
    {screenshots.map((_, i) => (
      <a href={`#slide-${i}`} aria-label={`Go to slide ${i + 1}`}></a>
    ))}
  </nav>
</div>

<style>
  .carousel {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  .carousel-slide {
    flex: 0 0 100%;
    scroll-snap-align: center;
  }

  .carousel-nav {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .carousel-nav a {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--sl-color-gray-4);
  }
</style>
```

### Pattern 3: Platform Tabs with syncKey

**What:** Starlight Tabs synchronized across page
**When to use:** Platform-specific installation instructions
**Why:** Built-in component, accessible, persists user preference

```mdx
import { Tabs, TabItem } from '@astrojs/starlight/components';

<Tabs syncKey="platform">
  <TabItem label="Windows" icon="seti:windows">
    1. Download `BARAS_x64-setup.exe`
    2. Run the installer
    3. Launch BARAS from Start Menu
  </TabItem>
  <TabItem label="macOS" icon="apple">
    1. Download `BARAS_aarch64.dmg` (Apple Silicon) or `BARAS_x64.dmg` (Intel)
    2. Open the DMG and drag BARAS to Applications

    :::caution[Gatekeeper Warning]
    If macOS blocks the app, run:
    ```bash
    xattr -dr com.apple.quarantine /Applications/BARAS.app
    ```
    :::
  </TabItem>
  <TabItem label="Linux" icon="linux">
    1. Download `BARAS_amd64.AppImage`
    2. Make executable: `chmod +x BARAS*.AppImage`
    3. Run: `./BARAS*.AppImage`

    :::caution[NVIDIA GPU Users]
    If you see a blank/white screen, set environment variable:
    ```bash
    WEBKIT_DISABLE_DMABUF_RENDERER=1 ./BARAS*.AppImage
    ```
    :::
  </TabItem>
</Tabs>
```

### Anti-Patterns to Avoid

- **React/Vue for simple interactivity:** Don't add framework islands for a single fetch call. Use vanilla JS in `<script>` tags.
- **Build-time release fetching:** Releases change frequently; would require rebuilds. Client-side fetch is correct here.
- **Custom Hero component override:** The splash template hero is sufficient; use frontmatter customization instead.
- **External carousel library:** CSS scroll-snap is well-supported and requires no JavaScript.

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Tabbed content | Custom tab JS | `<Tabs>` from Starlight | Built-in, accessible, syncKey persistence |
| Warning callouts | Custom styled divs | `:::caution` / `:::note` Asides | Markdown syntax, styled consistently |
| Feature cards | Custom card CSS | `<Card>` / `<CardGrid>` | Built-in responsive grid |
| Platform icons | Custom SVGs | `<Icon name="apple">` etc | Built-in icon set |
| Sticky header button | Custom scroll handler | CSS `position: sticky` | Native CSS, no JS |

**Key insight:** Starlight has components for most documentation UI patterns. Check the [Components docs](https://starlight.astro.build/components/) before building custom solutions.

## Common Pitfalls

### Pitfall 1: CORS Issues with GitHub API
**What goes wrong:** Fetch fails silently or throws CORS error
**Why it happens:** GitHub API allows CORS for unauthenticated requests, but rate limits are stricter (60/hour)
**How to avoid:**
- Use public API endpoint (no auth needed for public repos)
- Implement graceful fallback to static link
- Consider caching in localStorage with expiry
**Warning signs:** Fetch errors in console, download buttons never populate

### Pitfall 2: Platform Detection Edge Cases
**What goes wrong:** Windows detected on Mac (user agent spoofing), Linux not detected
**Why it happens:** User agent strings vary; some browsers lie
**How to avoid:**
- Show ALL platform downloads, just highlight detected one
- Don't hide non-matching downloads
- Default to "Windows" if detection fails (largest user base)
**Warning signs:** Users report wrong platform highlighted

### Pitfall 3: macOS Quarantine Confusion
**What goes wrong:** Users can't open app, don't know about xattr
**Why it happens:** macOS Gatekeeper blocks unsigned apps silently
**How to avoid:**
- Put quarantine fix PROMINENTLY in macOS instructions
- Use `:::caution` Aside for visual emphasis
- Exact command: `xattr -dr com.apple.quarantine /Applications/BARAS.app`
**Warning signs:** Support requests about "app won't open"

### Pitfall 4: Linux NVIDIA Blank Screen
**What goes wrong:** Tauri app shows white/blank screen on NVIDIA GPUs
**Why it happens:** WebKitGTK DMA-BUF renderer incompatible with NVIDIA drivers
**How to avoid:**
- Document `WEBKIT_DISABLE_DMABUF_RENDERER=1` environment variable
- Provide .desktop file template with env var
- Mention this is a known upstream WebKitGTK issue
**Warning signs:** Linux users report "blank screen" or "white window"

### Pitfall 5: Hero Image Performance
**What goes wrong:** Large hero background image blocks rendering
**Why it happens:** Background images don't get Astro's image optimization
**How to avoid:**
- Use Astro `<Image>` component for hero visuals
- Or keep hero minimal (gradient background, no image)
- If using screenshot in hero, lazy-load carousel below fold
**Warning signs:** Lighthouse flags LCP issues

## Code Examples

Verified patterns from official sources:

### GitHub Releases API Response Structure
```javascript
// Source: https://api.github.com/repos/baras-app/baras/releases/latest
// Verified 2026-01-20

const release = {
  tag_name: "v2026.1.1901",  // CalVer version
  name: "BARAS v2026.1.1901",
  assets: [
    {
      name: "BARAS_2026.1.1901_x64-setup.exe",     // Windows
      browser_download_url: "https://github.com/baras-app/baras/releases/download/v2026.1.1901/BARAS_2026.1.1901_x64-setup.exe"
    },
    {
      name: "BARAS_2026.1.1901_aarch64.dmg",      // macOS Apple Silicon
      browser_download_url: "..."
    },
    {
      name: "BARAS_2026.1.1901_amd64.AppImage",   // Linux
      browser_download_url: "..."
    },
    {
      name: "BARAS_2026.1.1901_amd64.deb",        // Linux (Debian)
      browser_download_url: "..."
    },
    // Also: .sig files, BARAS_aarch64.app.tar.gz, latest.json
  ]
};

// Asset naming pattern: BARAS_{version}_{arch}.{ext}
// Platform mapping:
// - Windows: *_x64-setup.exe
// - macOS ARM: *_aarch64.dmg
// - macOS Intel: (not present - may need *_x64.dmg check)
// - Linux: *_amd64.AppImage (recommended) or *_amd64.deb
```

### Platform Detection Function
```javascript
// Source: MDN + community best practices
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent

function detectPlatform() {
  const ua = navigator.userAgent;

  // Check in order of specificity
  if (/Windows/i.test(ua)) return 'windows';
  if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(ua)) return 'macos';
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) return 'linux';

  // Fallback: check navigator.platform (deprecated but widely supported)
  const platform = navigator.platform?.toLowerCase() || '';
  if (platform.includes('win')) return 'windows';
  if (platform.includes('mac')) return 'macos';
  if (platform.includes('linux')) return 'linux';

  return 'windows'; // Default to Windows (largest user base)
}
```

### Starlight Hero Frontmatter (Extended)
```yaml
# Source: https://starlight.astro.build/reference/frontmatter/
---
title: BARAS
description: Real-time combat analysis for Star Wars: The Old Republic
template: splash
hero:
  title: Real-time Combat Analysis for SWTOR
  tagline: Native. Fast. Cross-platform. The combat log parser that keeps up with your gameplay.
  image:
    # Option A: Single image
    file: ../../assets/hero-screenshot.webp
    alt: BARAS overlay showing DPS meters during raid combat

    # Option B: Theme-aware images
    # dark: ../../assets/hero-dark.webp
    # light: ../../assets/hero-light.webp

    # Option C: Custom HTML (for more control)
    # html: '<div class="hero-visual">...</div>'
  actions:
    - text: Download
      link: '#downloads'
      icon: download
      variant: primary
    - text: View on GitHub
      link: https://github.com/baras-app/baras
      icon: github
      variant: minimal
---
```

### macOS Quarantine Removal
```bash
# Source: Apple Developer Documentation
# https://developer.apple.com/documentation/security/gatekeeper

# Remove quarantine attribute from app bundle
xattr -dr com.apple.quarantine /Applications/BARAS.app

# Flags:
# -d = delete attribute
# -r = recursive (important for .app bundles)

# Alternative if drag-to-Applications doesn't work:
# Right-click > Open (bypasses first-launch block)
```

### Linux NVIDIA Workaround
```bash
# Source: https://github.com/tauri-apps/tauri/issues/9394
# Verified: Known WebKitGTK issue with NVIDIA DMA-BUF

# Environment variable to disable DMA-BUF renderer
WEBKIT_DISABLE_DMABUF_RENDERER=1 ./BARAS*.AppImage

# For .desktop file:
[Desktop Entry]
Name=BARAS
Exec=env WEBKIT_DISABLE_DMABUF_RENDERER=1 /path/to/BARAS.AppImage
Type=Application
Categories=Game;Utility;

# Alternative for Wayland-specific issues:
WEBKIT_DISABLE_COMPOSITING_MODE=1 ./BARAS*.AppImage
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| JS carousel libraries | CSS scroll-snap | 2019+ (broad support) | No JavaScript needed for carousels |
| navigator.platform | navigator.userAgent | Ongoing | platform deprecated but still works |
| React islands for any interactivity | Vanilla JS for simple cases | Astro 2.0+ philosophy | Avoid hydration for simple fetch |
| Custom tab implementations | Starlight Tabs component | Starlight 0.x | Built-in accessibility |

**Deprecated/outdated:**
- `navigator.platform`: Deprecated but still widely used; userAgent is more reliable
- `navigator.userAgentData`: Too new, limited browser support (Chrome/Edge only)

## Open Questions

Things that couldn't be fully resolved:

1. **macOS Intel DMG availability**
   - What we know: Current release has `_aarch64.dmg` for Apple Silicon
   - What's unclear: Whether Intel Macs use `_x64.dmg` or same file
   - Recommendation: Check actual release assets; may need to offer tar.gz for Intel

2. **Starlight Windows icon**
   - What we know: `apple` and `linux` icons exist; `seti:windows` mentioned but may require Seti preset
   - What's unclear: Exact icon name for Windows in default Starlight
   - Recommendation: Test `seti:windows` or use generic download icon for Windows

3. **CSS carousel browser support**
   - What we know: scroll-snap-type has excellent support (98%+)
   - What's unclear: ::scroll-button pseudo-element is Chrome 135+ only
   - Recommendation: Use scroll-snap for carousel; skip auto-generated buttons, use manual nav links

## Sources

### Primary (HIGH confidence)
- [Starlight Frontmatter Reference](https://starlight.astro.build/reference/frontmatter/) - hero options
- [Starlight Pages Guide](https://starlight.astro.build/guides/pages/) - StarlightPage component
- [Starlight Tabs Component](https://starlight.astro.build/components/tabs/) - TabItem props, syncKey
- [GitHub REST API - Releases](https://docs.github.com/en/rest/releases) - endpoint structure
- GitHub API response from `baras-app/baras` - verified asset naming

### Secondary (MEDIUM confidence)
- [MDN Browser Detection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) - userAgent patterns
- [MDN CSS Carousels](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels) - scroll-snap patterns
- [Tauri NVIDIA Issue #9394](https://github.com/tauri-apps/tauri/issues/9394) - Linux workarounds

### Tertiary (LOW confidence)
- WebSearch results for carousel libraries - many options exist but not needed
- WebSearch results for macOS Gatekeeper - xattr command verified with multiple sources

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Starlight components verified, no new dependencies
- Architecture: HIGH - Patterns documented in official Starlight docs
- Pitfalls: HIGH - NVIDIA issue verified in Tauri GitHub, macOS quarantine well-documented
- GitHub API: HIGH - Verified by direct API call to baras-app/baras

**Research date:** 2026-01-20
**Valid until:** 60 days (Starlight stable, GitHub API stable)

---

*Phase: 02-landing-downloads*
*Research completed: 2026-01-20*
