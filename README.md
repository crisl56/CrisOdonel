# CrisOdonel — Portfolio Site

Personal portfolio site for Cris Laurence Odonel, showcasing gameplay programming work in Unity and Unreal Engine.

**Live site:** https://crisl56.github.io/CrisOdonel/

## Overview

A single-page portfolio built with React and TypeScript, covering:

- **Landing** — hero section with a crossfading background of blurred project screenshots/clips, and quick contact info.
- **About Me** — bio with a hover-swappable photo frame.
- **Skills & Programs** — horizontal rows of skill/tool icons with hover labels.
- **Projects** — a grid of featured projects with hover previews and an expandable "show more" list. Clicking a project opens a detail popup with a case study (Problem / Decisions / Results style sections), a screenshot gallery, and optional links to a published build (Steam / itch.io / etc.) and a demo video.
- **Contact** — links to LinkedIn, GitHub, email, and phone.

Sections fade in on scroll via `IntersectionObserver`, and each section is its own component with a co-located CSS module.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool / dev server
- [React Router](https://reactrouter.com/) + `react-router-hash-link` — in-page navigation
- [react-icons](https://react-icons.github.io/react-icons/) — icon set
- CSS Modules — per-component styling, no CSS framework
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) — linting
- [gh-pages](https://www.npmjs.com/package/gh-pages) — deployment to GitHub Pages

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/crisl56/CrisOdonel.git
cd CrisOdonel
npm install
```

## Project Structure

```
CrisOdonel/
├── public/ # mainly static images (about photos, project 
│   ├── about/
│   ├── caseStudies/
│   └── CrisResume2026.pdf
└── src/
    ├── App.tsx
    ├── assets/
    │   ├── hero.png
    │   ├── react.svg
    │   └── vite.svg
    ├── components/
    │   └── Navbar/
    │       ├── Navbar.module.css
    │       └── Navbar.tsx
    ├── main.tsx
    ├── sections/
    │   └── Portfolio/
    │       ├── Portfolio.tsx
    │       ├── AboutMe/
    │       │   ├── AboutMe.module.css
    │       │   └── AboutMe.tsx
    │       ├── Contact/
    │       │   ├── Contact.module.css
    │       │   └── Contact.tsx
    │       ├── LandingPage/
    │       │   ├── LandingPage.module.css
    │       │   └── LandingPage.tsx
    │       ├── Projects/
    │       │   ├── ProjectCard.tsx
    │       │   ├── ProjectModal.tsx
    │       │   ├── Projects.module.css
    │       │   ├── Projects.tsx 
    │       │   └── projectsData.ts # edit this to add/update projects
    │       └── SkillsPrograms/
    │           ├── SkillsPrograms.module.css
    │           └── SkillsPrograms.tsx
    └── styles/
        ├── App.css
        └── index.css
```

NOTE: Compressed for essential files only.

## Adding a Project

Projects are data-driven — no component changes needed to add one. Open `src/components/Projects/projectsData.ts` and add a new entry to the `projects` array with the project's name, role, description, duration, team size, tags, thumbnail/screenshot image paths, an optional video/published-build link, and a case study broken into sections (e.g. Problem, Decisions, Results).

## License

all rights reserved by default.

## Contact

Cris Laurence Odonel — reach out via the links on the [live site](https://crisl56.github.io/CrisOdonel/).