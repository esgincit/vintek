# VINTEK — Futuristic Rebuild

A ground-up, futuristic rebuild of [vint3k.com](https://vint3k.com/) — SAP solutions consulting, reimagined as a dark, neon "mission-control" experience.

## Tech Stack

- **Vite 7** — instant HMR dev server, optimized production builds
- **React 19 + TypeScript** — strict typed component architecture
- **Tailwind CSS v4** — custom design tokens, glassmorphism & neon utilities
- **Framer Motion** — page transitions, scroll reveals, animated timeline
- **React Router 7** — full multi-page routing
- **Lucide Icons** — crisp icon system

## Pages

| Route | Content |
|---|---|
| `/` | Hero + stats + about + services + case-study carousel + why-choose + news + CTA |
| `/about`, `/why-choose-us`, `/we-support` | About family (original copy preserved) |
| `/services` + `/services/:slug` | All 6 service lines with detail pages |
| `/technologies` + `/technologies/:slug` | 8 tech practices (SAP, Oracle, Microsoft, Cloud, Big Data, BI, UI, RPA) with animated 5-step delivery timeline |
| `/clients` | 18 enterprise clients + marquee |
| `/careers` | 8 open roles with expandable detail panels |
| `/contact` | Form + HQ info + animated locator |
| `/disclaimer`, `/company-terms`, `/privacy-policy` | Legal pages |

All copy, contact details, client profiles, jobs and case studies were extracted directly from the original site.

## Futuristic design details

- Interactive particle-network hero canvas (pointer-attracted)
- Glassmorphism cards, neon glow shadows, gradient text & shimmer headings
- Scroll-triggered reveals and an animated number counter band
- Orbiting tech nodes, floating HUD chips, animated grid overlays
- Custom neon scrollbar, cursor glow, back-to-top, page transitions
- "Systems operational" status pulse, giant footer wordmark, 404 hyperspace page

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle → dist/
npm run preview  # serve the production build
```
