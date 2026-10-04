<p align="center">
  <img src="assets/dev-tools-banner.png" alt="dev-tools — By ZenYukti Labs" width="100%">
</p>

<h3 align="center">
  Focused, free, open-source developer utilities.
</h3>

<p align="center">
  <a href="https://labs.zenyukti.in">
    <img src="https://img.shields.io/badge/ZenYukti_Labs-Visit_Labs-111827?style=flat-square" alt="ZenYukti Labs">
  </a>
  <a href="https://github.com/ZenYukti-Labs">
    <img src="https://img.shields.io/badge/GitHub-Organization-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/Contributing-Guide-2563EB?style=flat-square" alt="Contributing">
  </a>
  <a href="https://go.zenyukti.in/discord">
    <img src="https://img.shields.io/badge/Community-Discord-5865F2?style=flat-square&logo=discord&logoColor=white" alt="ZenYukti Discord Community">
  </a>
</p>

---

## Tools

Each utility is independently accessible and deployable.

| Tool | Description | Live |
|---|---|---|
| **QR Studio** | Generate QR codes for URLs, text, Wi-Fi and more. | [Open](https://qr-generator.zenyukti.in) |
| **JSON Formatter** | Format, validate and inspect JSON with a structured view. | [Open](https://json-formatter.zenyukti.in) |
| **OG Preview** | Preview how links appear across social platforms and search. | [Open](https://og-preview.zenyukti.in) |
| **UTM Builder** | Build and inspect campaign URLs without spreadsheets. | [Open](https://utm-builder.zenyukti.in) |
| **Image Optimizer** | Compress, resize and convert images directly in the browser. | [Open](https://image-optimizer.zenyukti.in) |
| **Favicon Generator** | Generate favicon assets for websites and applications. | [Open](https://favicon-generator.zenyukti.in) |
| **README Generator** | Create polished GitHub README files with live preview. | [Open](https://readme-generator.zenyukti.in) |

## Repository

This is a monorepo containing the tools as independent Vite applications.

```text
dev-tools/
├── apps/
│   ├── favicon/
│   ├── image/
│   ├── json/
│   ├── og-preview/
│   ├── qr/
│   ├── readme/
│   └── utm/
├── scripts/
├── CONTRIBUTING.md
├── LICENSE
├── package.json
└── README.md
```

Each application contains its own source, build configuration, and public assets.

## Development

Requirements:

- Node.js
- npm

Install dependencies:

```bash
npm install
```

Build the applications using the repository's configured scripts:

```bash
npm run build:all
```

For development, work from the relevant application directory under `apps/`.

## Principles

The tools in this repository are built around a few simple principles:

- **Focused** — solve a specific problem without unnecessary complexity.
- **Fast** — keep interactions responsive and lightweight.
- **Private** — prefer browser-side processing and data minimization where practical.
- **Accessible** — build interfaces that remain usable with different input methods and devices.
- **Open** — keep the implementation available for inspection, contribution, and reuse.
- **Free** — core functionality remains freely accessible.

Individual tools may differ in their implementation and processing model; see the relevant application for its specific behaviour.

## Contributing

Contributions are welcome.

For changes:

1. Check existing issues and discussions.
2. Before creating a PR, an [issue](https://github.com/ZenYukti-Labs/dev-tools/issues) must be created and assigned.
3. Keep the change scoped to the relevant application.
4. Avoid unnecessary dependencies or external services.
5. Test the affected application locally.
6. Update relevant documentation when behaviour changes.

See [CONTRIBUTING.md](CONTRIBUTING.md) for repository contribution guidance.

## ZenYukti Labs

This repository is part of **ZenYukti Labs**, the software arm of [ZenYukti](https://zenyukti.in).

Explore the wider Labs ecosystem, projects, and software at [labs.zenyukti.in](https://labs.zenyukti.in).

## Legal & community

- [Privacy](https://zenyukti.in/privacy)
- [Terms](https://zenyukti.in/terms)
- [Code of Conduct](https://zenyukti.in/code-of-conduct)

## License

See [LICENSE](LICENSE) for the applicable license.
