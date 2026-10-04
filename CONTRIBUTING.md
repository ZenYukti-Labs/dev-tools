# Contributing to Dev Tools

Thank you for your interest in contributing to Dev Tools! We welcome contributions that improve existing tools, fix bugs, or add new self-contained utilities. 

This guide will walk you through the process of contributing effectively to this project.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Before You Start](#before-you-start)
- [Reporting Bugs, Issues, or Improvements](#reporting-bugs-issues-or-improvements)
- [Development Setup](#development-setup)
- [Adding a New Tool](#adding-a-new-tool)
- [Submitting Changes](#submitting-changes)
- [Style Guidelines](#style-guidelines)
- [Testing & Verification](#testing--verification)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful, inclusive, and collaborative environment. Be kind, constructive, and focus on improving the project for everyone.

---

## Before You Start

**All contributions must start with an issue.** We do not accept unsolicited pull requests.

- **For new tools:** Open an [issue](https://github.com/ZenYukti-Labs/dev-tools/issues/new) proposing the tool. Wait to be assigned before starting implementation or opening a PR.
- **For bugs, fixes, UI changes, or functionality improvements to existing tools:** Open an [issue](https://github.com/ZenYukti-Labs/dev-tools/issues/new) first describing the problem/idea. Wait to be assigned before opening a PR.

This helps avoid duplicate work, ensures alignment with project goals, and keeps the review process efficient.

---

## Reporting Bugs, Issues, or Improvements

If you find a bug or have a suggestion, please [create an issue](https://github.com/ZenYukti-Labs/dev-tools/issues/new).

When creating an issue, include as much detail as possible:

- **Title:** A clear, descriptive title
- **Description:** What is happening vs. what you expected to happen
- **Steps to Reproduce:** Clear, numbered steps (if reporting a bug)
- **Screenshots/Recordings:** If it's a UI issue, include visuals
- **Environment:** Browser, OS, and any relevant details
- **Proposed Solution:** Optional, but helpful if you have ideas

---

## Development Setup

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/dev-tools.git
   cd dev-tools
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start development server** (for previewing changes):
   ```bash
   npm run dev
   ```

---

## Adding a New Tool

All tools in this project are **100% client-side, self-contained, and static**. Follow these steps carefully when adding a new tool:

### 1. Open an Issue First (Required)
- [Create an issue](https://github.com/ZenYukti-Labs/dev-tools/issues/new) proposing your new tool.
- Wait until a maintainer **assigns** the issue to you before writing code or creating a PR.

### 2. Create the Tool Files
- Create a new directory: `apps/<slug>/`
- Add `apps/<slug>/index.html` as a **single, self-contained file** (no external build dependencies required for the tool itself).
- Add its own `package.json` and `vite.config.ts` inside the tool's directory as needed.
- Ensure the tool runs entirely in the browser with no server-side dependencies.

### 3. Follow Required Structure
Your `index.html` must include:
- Standard header and footer (consistent with existing tools)
- An `<h1>` with the tool name
- A clear description of what the tool does
- A **5-question FAQ** section
- Proper SEO metadata for the tool's own domain:
  - `title` tag
  - `meta name="description"`
  - `link rel="canonical"`
  - `meta property="og:url"`
  - JSON-LD `SoftwareApplication` schema

### 4. Register the Tool
- Add the tool to `labs/src/components/gallery/tools.js` with the following fields:
  - `slug`
  - `domain`
  - `name`
  - `tag`
  - `description`
  - `gradient`

### 5. Update Deployment Configuration
- Add a row for the new domain to `CLOUDFLARE_SETUP.md` following the existing format.

### 6. Verify Your Changes
Before committing, run the required verification commands (see [Testing & Verification](#testing--verification)).

---

## Submitting Changes

1. **Create a feature branch** from your fork:
   ```bash
   git checkout -b feat/<short-description>
   # or fix/<short-description> for bugs
   ```
2. **Make your changes** following this guide and the existing code style.
3. **Test and verify** locally (see [Testing & Verification](#testing--verification)). Both commands must pass.
4. **Commit your changes** with a clear, descriptive commit message.
5. **Push to your fork:**
   ```bash
   git push origin feat/<short-description>
   ```
6. **Open a Pull Request** against the `main` branch of this repository.
7. **Reference the issue** in your PR description (e.g., `Closes #123` or `Fixes #123`). Only open a PR if the corresponding issue is assigned to you.

---

## Style Guidelines

- **Self-contained:** Each tool must be a single HTML file with inline styles/scripts where appropriate. Avoid unnecessary external dependencies.
- **Client-side only:** Tools must work 100% in the browser. No server-side processing.
- **Consistency:** Match the structure, naming conventions, and UI patterns of existing tools.
- **Accessibility:** Use semantic HTML and consider readability, contrast, and keyboard navigation.
- **No unnecessary comments:** Follow the project's code style - avoid adding comments unless explicitly required for clarity.
- **Keep it minimal:** Focus on solving the problem cleanly and simply.

---

## Testing & Verification

Before opening a PR, you **must** verify your changes pass all required checks:

1. **Build all apps:**
   ```bash
   npm run build:all
   ```
   This must complete successfully with no errors.

2. **Run the cleanup/audit script:**
   ```bash
   bash scripts/remove-*.sh
   ```
   This must pass with no legacy references found.

3. **Manual testing:** Test your tool (or fixes) in the browser to ensure it works as expected across common viewports.

If either command fails, fix the issues before submitting your PR.

---

Thank you for contributing to Dev Tools! If you have questions at any point, feel free to ask in the relevant issue or ask here [go.zenyukti.in/discord](https://go.zenyukti.in/discord)