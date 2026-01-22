// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://baras-app.github.io",
  integrations: [
    starlight({
      title: "BARAS",
      description: "Battle Analysis and Raid Assessment System",
      favicon: "/favicon.ico",
      customCss: ["./src/styles/custom.css"],
      // Dark mode only - no theme toggle
      components: {
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/baras-app/baras",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Features",
          items: [
            { label: "Overview", slug: "features/overview" },
            { label: "Data Explorer", slug: "features/data-explorer" },
            { label: "Overlays", slug: "features/overlays" },
            { label: "Encounter Builder", slug: "features/encounter-builder" },
            { label: "Effects Tracker", slug: "features/effects-tracker" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Encounter Builder", slug: "reference/encounter-builder" },
            { label: "Triggers", slug: "reference/triggers" },
            { label: "Encounter Timers", slug: "reference/encounter-timers" },
            { label: "Effects Tracker", slug: "reference/effects-tracker" },
          ],
        },
        {
          label: "Configuration",
          items: [{ label: "Overview", slug: "configuration/overview" }],
        },
        {
          label: "Troubleshooting",
          items: [{ label: "FAQ", slug: "troubleshooting/faq" }],
        },
      ],
    }),
  ],
});
