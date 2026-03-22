# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run test     # Run all tests (Vitest)
npx vitest run tests/path/to/test.tsx  # Run a single test file
```

## Architecture

**Pocket Heist** is a Next.js 16 app (App Router) for a workplace micro-missions game. Currently a frontend-only starter — no backend, database, or auth implementation yet.

### Route Groups

Routes are organized into two groups that share separate layouts:

- `app/(public)/` — unauthenticated pages (`/`, `/login`, `/signup`, `/preview`). The root `page.tsx` is a splash page intended to redirect to `/heists` when logged in or `/login` when not.
- `app/(dashboard)/` — authenticated pages (`/heists`, `/heists/create`, `/heists/[id]`). Layout includes the `Navbar` component.

### Styling

- **Tailwind CSS v4** — theme colors, fonts, and design tokens are defined via CSS `@theme` in `app/globals.css` (not in a `tailwind.config.js`).
- **CSS Modules** for component-scoped styles. Use `@reference "../../../app/globals.css"` at the top of module files to access global theme tokens with `@apply`.

### Components

Components live in `components/` with the pattern: `ComponentName/ComponentName.tsx`, `ComponentName/ComponentName.module.css`, `ComponentName/index.ts` (barrel export). Import via `@/components/ComponentName`.

### Path Aliases

`@/` resolves to the project root (configured in `tsconfig.json`).

### Testing

Tests live in `tests/`. Uses Vitest + React Testing Library + `@testing-library/jest-dom`. Test environment is `jsdom`.
