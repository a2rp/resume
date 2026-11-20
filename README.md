<div align="center">

<h1>Ashish Ranjan</h1>

<h3>Full-Stack Developer | React &amp; Node.js</h3>

<p>Responsive resume website with recent projects, a print-ready layout, and a downloadable PDF.</p>

<p>
  <a href="https://a2rp.github.io/resume/"><img alt="Public Resume" src="https://img.shields.io/badge/OPEN-PUBLIC_RESUME-0D6694?style=for-the-badge" /></a>
  <a href="https://a2rp.github.io/resume/resume-only"><img alt="Resume Only" src="https://img.shields.io/badge/OPEN-RESUME_ONLY-102237?style=for-the-badge" /></a>
  <a href="https://github.com/a2rp/resume/releases/latest/download/Ashish_Ranjan_Resume.pdf"><img alt="Download PDF" src="https://img.shields.io/badge/DOWNLOAD-LATEST_PDF-B42318?style=for-the-badge" /></a>
</p>

<p>
  <a href="https://github.com/a2rp/resume/actions/workflows/deploy.yml"><img alt="Deploy to GitHub Pages" src="https://github.com/a2rp/resume/actions/workflows/deploy.yml/badge.svg?branch=main" /></a>
  <img alt="React" src="https://img.shields.io/badge/React-149ECA?style=flat-square&amp;logo=react&amp;logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&amp;logo=vite&amp;logoColor=white" />
  <img alt="CSS Modules" src="https://img.shields.io/badge/CSS_Modules-264DE4?style=flat-square" />
</p>

<br />

<img src="screenshot.png" alt="Preview of Ashish Ranjan's resume website" width="820" />

</div>

## About

This project presents my experience, skills, education, and selected work in a responsive web resume. The resume content is shared between the full site and a clean, standalone view. Recent public projects are loaded from the GitHub API.

## Features

- Responsive layout for desktop, tablet, and mobile.
- Standalone resume page without site navigation.
- Recent GitHub projects with descriptions, update dates, and demo links where available.
- Print styles for a clean resume printout.
- Header and footer with portfolio, contact, social, and support links.
- Lazy-loaded routes and a shared resume component.

## Run locally

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

Available checks and preview:

```bash
npm run lint
npm run build
npm run preview
```

## Publish a new resume PDF

The Download PDF buttons use GitHub's latest-release URL, so the link stays the same when the resume changes.

1. Create a new release in this repository.
2. Attach the PDF as `Ashish_Ranjan_Resume.pdf`.
3. Mark the release as **Latest** and publish it.

The local PDF copy is stored at `public/pdf/Ashish_Ranjan_Resume.pdf`.

## Deployment

Pushing to `main` triggers [the GitHub Pages workflow](.github/workflows/deploy.yml). It builds the site and publishes the `dist` output. The Vite build also creates a `404.html` fallback for client-side routes.

## Project structure

```text
src/
|-- appRoutes/       Route definitions and lazy loading
|-- components/      Header, footer, loader, and back-to-top control
|-- layouts/         Shared site layout
|-- pages/           Home and resume-only pages
\-- resume/          Shared resume content and styles
public/
\-- pdf/             Local resume PDF
```

## Built with

React | React Router | Vite | CSS Modules | React Icons
