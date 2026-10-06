# Divine. – Frontend Developer Portfolio

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit your content
Everything lives in `src/lib/data.ts`. **Replace every line marked `PLACEHOLDER`**:
GitHub, LinkedIn, each project's live/GitHub link. Project years, stacks and
experience summaries are drafts, so adjust them to match your real history.

## Project visuals
Project previews are interface mock-ups drawn in code (`components/projects/ProjectVisual.tsx`).
To use real screenshots, drop images in `public/projects/` and swap the visual for `next/image`.

## Structure
```
src/components/
  navigation/  hero/  about/  experience/  projects/  skills/  services/  contact/  footer/
  ui/          SmoothScroll, Cursor, Magnetic, SplitText, ScrubText, Counter, Reveal, Button
```

## Notes
- Custom cursor is pointer-only (hidden on touch); smooth scroll, marquees and all Framer Motion
  transforms respect `prefers-reduced-motion`.
- Animations use transform/opacity; pointer-driven effects use motion values (no React re-renders).
