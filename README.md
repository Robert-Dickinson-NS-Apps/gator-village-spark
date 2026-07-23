# Gator Village Spark

> _README added by Robert Dickinson via Comet._

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn--ui-000000?logo=shadcnui&logoColor=white)

## About

**Gator Village Spark** is a single-page community website built with React and TypeScript. It presents a community/village ("Diamond Village") through a hero banner, a history timeline, leadership profiles, a community gallery, feature highlights, a SWMM career section, and a contact section.

The site is part of the SWMMEnablement collection and is built on a modern Vite + React + TypeScript frontend styled with Tailwind CSS and shadcn/ui components.

## What's Inside

| Area | Description |
| --- | --- |
| `src/components/DiamondVillageHero.tsx` | Hero / landing banner section |
| `src/components/HistoryTimeline.tsx` | Community history timeline |
| `src/components/LeadershipSection.tsx` | Leadership / team profiles |
| `src/components/CommunityFeatures.tsx` | Highlighted community features |
| `src/components/CommunityGallery.tsx` | Image gallery section |
| `src/components/SwmmCareerSection.tsx` | SWMM-focused career / professional section |
| `src/components/ContactSection.tsx` | Contact information and form |
| `src/components/ui/` | shadcn/ui reusable UI primitives |
| `src/assets/` | Images and static assets |
| `public/` | Public static files |

## Tech Stack

| Layer | Technology |
| --- | --- |
| Language | TypeScript |
| Framework | React |
| Build tool | Vite |
| Styling | Tailwind CSS |
| UI components | shadcn/ui |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/SWMMEnablement/gator-village-spark.git
cd gator-village-spark

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL printed by Vite (typically http://localhost:5173) in your browser.

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## License

Released under the MIT License.
