# BARAS Documentation Site

Documentation website for BARAS (Battle Analysis and Raid Assessment System), a combat log parser for Star Wars: The Old Republic.

**Live site:** https://baras-app.github.io

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
.
├── public/              # Static assets (favicon)
├── src/
│   └── content/
│       └── docs/        # Documentation pages (Markdown/MDX)
├── astro.config.mjs     # Astro + Starlight configuration
├── package.json
└── tsconfig.json
```

## Built With

- [Astro](https://astro.build) - Static site generator
- [Starlight](https://starlight.astro.build) - Documentation theme

## Related

- [BARAS Application](https://github.com/baras-app/baras) - The main BARAS application
