# Rishi Pandey — Portfolio

Single-page dark portfolio, built with React + Vite + TypeScript + Tailwind
CSS + GSAP + Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Opens at http://localhost:5173.

## Build for deployment

```bash
npm run build
```

Outputs a static site to `dist/` — deployable to Vercel, Netlify, GitHub
Pages, or any static host.

## What's real vs. adapted from the original spec

- **Featured projects**: 6 real projects (`src/data/projects.ts`), pulled
  from actual work — freezone-advisor (deployed, live link), plus 5 other
  local demo projects (agentic-rag-langgraph, agent-orchestration,
  llm-cost-autopilot, prompt-ab-testing, rag-hybrid-search).
- **Stats**: real, verifiable numbers (6 projects, 87 passing tests, 1 live
  deployment) — not the placeholder "20+ years experience" from the
  original template, since that would be a fabricated claim.
- **Hero/footer background**: an animated CSS gradient instead of a video.
  The original spec pointed at a specific Mux-hosted video that belongs to
  someone else's real deployed portfolio — reusing it would mean hotlinking
  another person's private asset, so it was swapped for a gradient instead.
  If you have your own video/photo, it's a straightforward swap in
  `Hero.tsx` and `Contact.tsx`.
- **Journal and Explorations sections**: left out of this build. Both
  need real content (blog posts, design shots) that doesn't exist yet —
  built as empty/placeholder sections would look unfinished rather than
  polished. Easy to add back once there's real content for them.
- **Nav links**: "Home / Work / Contact" instead of "Home / Work /
  Resume", since there's no resume file wired in yet.
- **Contact links**: your real GitHub (github.com/rustyz), LinkedIn
  (linkedin.com/in/rishi-pandey-aiengineer), and email
  (prishi34@gmail.com). No Twitter/Dribbble since those weren't provided.

## Structure

```
src/
  components/
    LoadingScreen.tsx   — counter + rotating word intro
    Navbar.tsx           — floating pill nav
    Hero.tsx             — name, rotating role words, CTA
    SelectedWorks.tsx    — bento grid of the 6 real projects
    Stats.tsx            — real numbers row
    Contact.tsx           — footer, marquee, contact links
  data/
    projects.ts          — the 6 project entries (edit this to update the grid)
  index.css             — design tokens, fonts, custom animations
  App.tsx               — assembles everything
tailwind.config.js       — color/font/animation tokens matching the design system
```
