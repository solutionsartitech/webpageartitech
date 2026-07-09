# ARTITECH

Marketing site for ARTITECH Solutions, built with React + Vite + TypeScript.
Implemented from the Claude Design source (`Home v2`, `Services`, `About`,
`Contact`).

## Stack

- React 19 + TypeScript
- Vite
- React Router (client-side routing)
- Plain CSS design system (`src/index.css`, CSS variables for the palette)

## Pages / routes

| Route       | Page       | Design source        |
| ----------- | ---------- | -------------------- |
| `/`         | Home       | `Home v2.dc.html`    |
| `/services` | Services   | `Services.dc.html`   |
| `/about`    | About      | `About.dc.html`      |
| `/contact`  | Contact    | `Contact.dc.html`    |

The original `Home.dc.html` was intentionally discarded in favour of Home v2.

## Notable implementation details

- **Animated globe** (`src/components/Globe.tsx`) — the hero's rotating dot-cloud
  globe, ported from the design's canvas script to a React `useEffect` + rAF loop.
- **Contact form** (`src/pages/Contact.tsx`) — controlled inputs with required-field
  and email validation, a submitted/success state, and reset. Wire the `submit`
  handler to a real endpoint to send messages.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

Fonts (Chakra Petch, IBM Plex Mono, IBM Plex Sans) load from Google Fonts in
`index.html`. `vercel.json` adds the SPA rewrite so deep links work when hosted.
