# proof-of-learning

Personal site collecting AI engineering projects. Built with Next.js (App
Router) and TypeScript, styled with plain CSS Modules, deployed on Vercel.

## Structure

- `app/page.tsx` — home: role summary, project cards, contact
- `app/about/page.tsx` — name, background, years of experience
- `lib/projects.ts` — single source of truth for the project cards
- `components/` — Header, ProjectCard, ContactSection

## Status — read before deploying

- Search indexing is off (`robots: { index: false, follow: false }` in
  `app/layout.tsx`) while this stays a direct-link-only resume site. Flip
  that when discretion stops being a concern.
- The RAG demo route (`/demo`) isn't built yet. It needs a static export of
  the mongodb-rag-mcp corpus embeddings first, then a Vercel serverless
  function to run the search server-side — no live database connection.
  Once that exists, uncomment `demoUrl: '/demo'` on the mongodb-rag-mcp
  entry in `lib/projects.ts`.
- The `mongo-mcp-server` and `playwright-ada-mcp` pitches in
  `lib/projects.ts` are placeholders. Swap in the real one-liners for those
  repos before this goes on a resume.
- `mailto:you@example.com` in `components/ContactSection.tsx` is a
  placeholder — replace with a real address.
- LinkedIn is intentionally left out of contact for now, since it's a
  one-click path to a full identity that undercuts the noindex approach.
  Add it back in `components/ContactSection.tsx` once that's no longer a
  concern.

## Local dev

```
npm install
npm run dev
```
