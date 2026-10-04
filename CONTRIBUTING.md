# Contributing to dev-tools

Thank you for considering contributing to **ZenYukti Labs - dev-tools**! This is a collection of several independent, zero-dependency developer utilities deployed as separate sites on Cloudflare Pages.

## Project Structure

```
.
├── apps/
│   ├── favicon/       -> favicon-generator.zenyukti.in
│   ├── image/         -> image-optimizer.zenyukti.in
│   ├── json/          -> json-formatter.zenyukti.in
│   ├── og-preview/    -> og-preview.zenyukti.in
│   ├── qr/            -> qr-generator.zenyukti.in
│   ├── readme/        -> readme-generator.zenyukti.in
│   └── utm/           -> utm-builder.zenyukti.in
├── package.json       # workspace root (npm workspaces)
└── package-lock.json
```

Each app is self-contained:
```
apps/qr/
├── index.html         # entire app - html + css + js in one file
├── vite.config.ts     # copies index.html -> dist/
├── package.json
└── dist/index.html    # build output (gitignored locally, built on CF)
```

## Tech Stack

- **No frameworks** - Vanilla HTML, CSS, JS in a single `index.html`
- **Vite 5** - only for build step (`vite build` copies index.html to dist)
- **npm workspaces** - monorepo management
- **Cloudflare Pages** - hosting (separate Pages projects, monorepo)

## Prerequisites

- Node.js 20+
- npm 10+

## Getting Started

```bash
# Clone
git clone https://github.com/ZenYukti-Labs/dev-tools.git
cd dev-tools

# Install all workspaces
npm install

# Run any tool locally
npx vite apps/qr --open
# or just open apps/qr/index.html directly in browser

# Build all
npm run build:all

# Build single
npm run build --workspace=apps/qr and so on
```

> **Note:** `apps/*/dist` is built output. Don't edit it directly. It's auto-generated and ignored in git, but Cloudflare builds it on deploy.

## Development Workflow

1. Pick a tool in `apps/<tool>/index.html`
2. Edit the single `index.html` - keep everything inline (no external deps)
3. Test locally by opening the file or via `npx vite apps/<tool>`
4. Build to verify: `npm run build --workspace=apps/<tool>`
5. Commit and push - Cloudflare auto-deploys

### Rules for Tools

- **Single file**: All logic must live in `index.html` (HTML + `<style>` + `<script>`)
- **Zero dependency**: No CDN libraries, no npm deps for runtime
- **Offline first**: Must work without internet (except OG preview which fetches URLs)
- **< 20KB**: Keep it lightweight. Gzipped should be < 7KB
- **No tracking**: No analytics, no cookies

## Adding a New Tool

```bash
# 1. Create app folder
mkdir apps/my-tool
cd apps/my-tool

# 2. Create package.json (copy from apps/qr/package.json and rename)
# 3. Create vite.config.ts (copy from apps/qr/vite.config.ts)
# 4. Create index.html with your tool

# 5. Register in root package.json workspaces
# Add "apps/my-tool" to workspaces array

# 6. Install & build
cd ../..
npm install
npm run build --workspace=apps/my-tool
```

> [!IMPORTANT]
> **Deployment is maintainer-only**
> Cloudflare Pages + DNS is managed by the maintainer. After you open your MR/PR, tag **[@ayushHardeniya](https://github.com/ayushHardeniya)** in the MR description / issue and write:
>
> ```
> New tool: my-tool — ready for Pages project + DNS setup
> ```
>
> Once merged to `main`, the maintainer will:
> 1. Create new Pages project (`my-tool`)
> 2. Set build command `npm run build --workspace=apps/my-tool`
> 3. Set output `apps/my-tool/dist`
> 4. Add custom domain `my-tool.zenyukti.in` (auto CNAME)
>
> Your code will go live after that step. Preview deployments still work for testing without DNS.

## Build System

Root `package.json` scripts:

```json
{
  "scripts": {
    "build:all": "npm run build --workspaces --if-present",
    "dev:qr": "vite apps/qr"
  }
}
```

Each app's `vite.config.ts` does only this:

```ts
export default {
  build: {
    outDir: 'dist',
    rollupOptions: { input: './index.html' }
  }
}
```

Vite copies `index.html` -> `dist/index.html`. No bundling needed.

## Deployment

We use **separate Cloudflare Pages projects** connected to same repo `ZenYukti-Labs/dev-tools`.

| App | Pages Project | Custom Domain | Output |
|-----|---------------|---------------|--------|
| qr | qr-generator | qr-generator.zenyukti.in | apps/qr/dist |
| json | json-formatter | json-formatter.zenyukti.in | apps/json/dist |
| og-preview | og-preview | og-preview.zenyukti.in | apps/og-preview/dist |
| utm | utm-builder | utm-builder.zenyukti.in | apps/utm/dist |
| image | image-optimizer | image-optimizer.zenyukti.in | apps/image/dist |
| favicon | favicon-generator | favicon-generator.zenyukti.in | apps/favicon/dist |
| readme | readme-generator | readme-generator.zenyukti.in | apps/readme/dist |

All auto-deploy on push to `main`. See `CLOUDFLARE_SETUP.md` for detailed setup.

## Commit Conventions

- `feat: add <tool> - description`
- `fix: sync lock file after removing labs`
- `chore: clean repo to dev-tools only`
- `docs: update readme with independent domains`

## Pull Request Process

1. Fork and create branch: `feat/my-tool` or `fix/qr-bug`
2. Make changes in `apps/<tool>/index.html` only (unless adding new tool)
3. Run `npm run build:all` - must pass for all projects
4. Ensure no `node_modules` or `dist` is committed
5. Open MR/PR to `main`
6. **If it's a NEW tool:** Tag @ayushHardeniya in MR description for Pages + DNS provisioning. 
Existing tools auto-deploy via preview URL, new tools need manual DNS step and will go live only after maintainer approval post-merge.

## Important Notes

- **Never commit `dist/` or `node_modules/`** - `.gitignore` covers this
- **Keep lock file in sync** - after adding/removing workspaces, run `rm package-lock.json && npm install` and commit new lock file. Cloudflare uses `npm ci` which fails if lock is out of sync
- **One tool = One domain** - no shared routing, each is independent static site

## License

By contributing, you agree your contributions will be licensed under the same [LICENSE](LICENSE) as the project.
