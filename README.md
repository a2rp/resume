# Ashish Ranjan | Resume

A responsive personal resume website built with React and Vite. It includes a full site page, a resume-only view, recent public GitHub projects, and a print-ready layout.

![Resume website preview](screenshot.png)

## Live pages

- [Public resume](https://a2rp.github.io/resume/)
- [Resume only](https://a2rp.github.io/resume/resume-only)
- [Download the latest resume PDF](https://github.com/a2rp/resume/releases/latest/download/Ashish_Ranjan_Resume.pdf)

## Features

- Responsive resume layout for desktop, tablet, and mobile.
- Separate resume-only route without the site header or footer.
- Recent public projects loaded from the GitHub API, with a link to browse all repositories.
- Header and footer with portfolio, contact, social, and support links.
- Print styles for a clean resume printout.
- Lazy-loaded routes and a shared resume component.

## Built with

- React and React Router
- Vite
- CSS Modules
- React Icons

## Run locally

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

Useful project commands:

```bash
npm run lint
npm run build
npm run preview
```

## Update the resume PDF

The header download link always targets the latest GitHub release. To publish a new PDF:

1. Upload the PDF to a GitHub release as `Ashish_Ranjan_Resume.pdf`.
2. Mark that release as **Latest**.

The download button will then serve the new file through the stable latest-release URL above.

The local copy used by the project is `public/pdf/Ashish_Ranjan_Resume.pdf`.

## Deploy

Pushing to `main` starts the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. The Vite configuration also creates a `404.html` fallback for client-side routes.

## Project structure

```text
src/
  appRoutes/       Route definitions and lazy loading
  components/      Header, footer, loader, and back-to-top control
  layouts/         Shared site layout
  pages/           Home and resume-only pages
  resume/          Shared resume content and styles
public/
  pdf/             Local resume PDF
```
