# ZenYukti Dev Tools - 7 Free Offline Open Source Tools

Open-source, 100% client-side developer tools. Each tool is a standalone product with its own subdomain, SEO identity, and can rank independently on Google. No backend, no uploads, no tracking.

| Tool | Name | Subdomain | Local Port | Keyword |
|---|---|---|---|---|
| QR Code Generator | QR Code Generator | [`qr-generator.zenyukti.in`](https://qr-generator.zenyukti.in) | 5173 | qr code generator |
| JSON Formatter | JSON Formatter | [`json-formatter.zenyukti.in`](https://json-formatter.zenyukti.in) | 5174 | json formatter |
| OG Preview Tool | OG Preview Tool | [`og-preview.zenyukti.in`](https://og-preview.zenyukti.in) | 5175 | open graph preview |
| UTM Builder | UTM Builder | [`utm-builder.zenyukti.in`](https://utm-builder.zenyukti.in) | 5176 | utm builder |
| Image Optimizer | Image Optimizer | [`image-optimizer.zenyukti.in`](https://image-optimizer.zenyukti.in) | 5177 | image optimizer |
| Favicon Generator | Favicon Generator | [`favicon-generator.zenyukti.in`](https://favicon-generator.zenyukti.in) | 5178 | favicon generator |
| README Generator | README Generator | [`readme-generator.zenyukti.in`](https://readme-generator.zenyukti.in) | 5179 | readme generator |

## Quick start

```bash
npm install

npm run dev:all      # starts all 7 tools at once, each on its own port
npm run dev:qr       # QR Code Generator only, http://localhost:5173
npm run dev:json     # JSON Formatter only, http://localhost:5174
npm run dev:og       # OG Preview only, http://localhost:5175
npm run dev:utm      # UTM Builder only, http://localhost:5176
npm run dev:image    # Image Optimizer only, http://localhost:5177
npm run dev:favicon  # Favicon Generator only, http://localhost:5178
npm run dev:readme   # README Generator only, http://localhost:5179

npm run build:all    # builds every workspace -> apps/*/dist
```

## Architecture

- **Monorepo** with 7 apps (`apps/*`), each deployable independently
- **Each tool is standalone**: Single self-contained `index.html` using Tailwind via CDN and vanilla JavaScript
- **No dependencies between tools**: Each is fully standalone with its own identity
- **100% client-side**: No backend, no uploads, no tracking, works offline
- **Own SEO identity**: Each tool has its own title, meta description, canonical URL, OG tags, and JSON-LD structured data for independent Google ranking

## Local dev ports

Each workspace owns a fixed port, set in its `vite.config.ts`:

| Workspace | Dev URL | Workspace | Dev URL |
|---|---|---|---|
| `apps/qr` | http://localhost:5173 | `apps/utm` | http://localhost:5176 |
| `apps/json` | http://localhost:5174 | `apps/image` | http://localhost:5177 |
| `apps/og-preview` | http://localhost:5175 | `apps/favicon` | http://localhost:5178 |
| | | `apps/readme` | http://localhost:5179 |

Ports are `strictPort` - a busy port fails loudly instead of moving the tool to a different URL.

## Deployment

This single repo powers **7 subdomains** as **7 separate Cloudflare Pages projects**. Each tool builds independently from the same repository.

- Build command: `npm run build --workspace=apps/<tool-name>`
- Output directory: `apps/<tool-name>/dist`
- Custom domain: Set the corresponding subdomain (e.g., [`qr-generator.zenyukti.in`](https://qr-generator.zenyukti.in))

## SEO Goal

Each tool has an independent identity optimized to rank #1 for its keyword:
- [QR Code Generator](https://qr-generator.zenyukti.in) → rank #1 for "qr code generator"
- [JSON Formatter](https://json-formatter.zenyukti.in) → rank #1 for "json formatter"  
- [OG Preview Tool](https://og-preview.zenyukti.in) → rank #1 for "open graph preview"
- [UTM Builder](https://utm-builder.zenyukti.in) → rank #1 for "utm builder"
- [Image Optimizer](https://image-optimizer.zenyukti.in) → rank #1 for "image optimizer"
- [Favicon Generator](https://favicon-generator.zenyukti.in) → rank #1 for "favicon generator"
- [README Generator](https://readme-generator.zenyukti.in) → rank #1 for "readme generator"

**Note:** The main website `labs.zenyukti.in` lives in a separate repository (`zenyukti-labs/zenyukti-labs`) and acts as a hub that links to these tools.

## Tech

- Vanilla JavaScript + Tailwind CSS (via CDN)
- Vite for dev server and build
- 100% static HTML output
- [MIT licensed](LICENSE)
