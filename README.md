# Khaled Ameen — Portfolio

A bilingual (Arabic / English) personal portfolio built with React, TypeScript,
Tailwind CSS, and Framer Motion.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Where things live

- **All text content** (bio, projects, skills, education...) is in
  `client/src/data/portfolio.ts` — both the Arabic and English versions, in
  one place. Edit there, nothing else needs to change.
- **Colors** are in `client/src/index.css`, right at the top. There's a single
  `--accent` variable with a comment showing alternative shades — change that
  one line to change the whole site's accent color.
- **Dark / light mode** is already wired up (toggle button in the navbar, top
  right). The default on load is dark; change `defaultTheme` in `App.tsx` if
  you'd rather default to light.
- **Stats section** ("+4 Projects", "+6 Skills") was intentionally removed
  from the live design but the data still exists in `portfolio.ts` under
  `stats`, with the commented-out JSX ready to paste back in `About.tsx` if
  you ever want it again.

## Things to add yourself

- `client/public/cv-en.pdf` and `client/public/cv-ar.pdf` — the "Download CV"
  button on the About section links to these paths. They don't exist yet;
  drop your actual CV files there with these exact names.
- Your photo is already at `client/public/Profil.png`. Swap the file (keep
  the same name) to update it.

## Deploying

This is a static Vite app — it deploys to Vercel, Netlify, or GitHub Pages
with zero configuration. For Vercel specifically: build command `npm run
build`, output directory `dist/public` (Vite's default for this template).
