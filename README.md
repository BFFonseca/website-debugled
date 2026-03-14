# DebugLED

Personal site — about, projects, and blog. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed via GitHub Pages.

## Stack

- **Framework**: Astro 4
- **Styling**: Tailwind CSS
- **Hosting**: GitHub Pages (custom domain)

## Project Structure

```
src/
├── components/
│   ├── Nav.astro          # Site navigation
│   └── Footer.astro       # Site footer
├── layouts/
│   └── BaseLayout.astro   # Shared page wrapper (head, nav, footer)
├── pages/
│   ├── index.astro        # Home / About
│   ├── projects.astro     # Projects
│   ├── contact.astro      # Contact
│   └── blog/
│       ├── index.astro    # Blog listing
│       └── hello-world.astro  # Sample post
├── content/
│   └── blog/
│       └── hello-world.md # Sample post content
└── styles/
    └── global.css         # Tailwind base + custom classes
public/
└── favicon.svg
.github/
└── workflows/
    └── deploy.yml         # Auto-deploy to GitHub Pages on push to main
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages** in your repo
3. Under *Source*, select **GitHub Actions**
4. Push to `main` — the workflow handles the rest

### Custom Domain

1. Add a `CNAME` file to `public/` containing your domain (e.g. `debugled.dev`)
2. Update `site` in `astro.config.mjs` to match
3. Configure your domain's DNS to point to GitHub Pages

## Adding Blog Posts

For now, add a new `.astro` file under `src/pages/blog/` and a matching `.md` in `src/content/blog/`.

> When the blog grows, migrate to [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) for proper Markdown-driven posts with type safety.

## Customise

- **Brand colours**: `tailwind.config.mjs` → `colors.led`
- **Fonts**: `src/styles/global.css` → `@import` + `tailwind.config.mjs` → `fontFamily`
- **Nav links**: `src/components/Nav.astro`
- **Social links**: `src/components/Footer.astro`
- **Projects**: `src/pages/projects.astro` → `projects` array
