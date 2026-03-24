# Pocket Heist

> Your boss won't know what hit them.

A workplace micro-missions game built with Next.js. Assemble your crew, plan your move, and pull off covert office heists — one stolen donut at a time.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4** — design tokens via `@theme` in `globals.css`
- **CSS Modules** — component-scoped styles
- **Vitest** + React Testing Library — unit tests

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run test` | Run all tests |
| `npx vitest run tests/path/to/test.tsx` | Run a single test file |

## Project Structure

```
app/
  (public)/        # Unauthenticated pages: /, /login, /signup, /preview
  (dashboard)/     # Authenticated pages: /heists, /heists/create, /heists/[id]
components/        # ComponentName/ComponentName.tsx + .module.css + index.ts
tests/             # Vitest + React Testing Library
```

## Components

| Component | Description |
|---|---|
| `Avatar` | Circular initials badge + name label. PascalCase-aware (`JohnDoe` → `JD`) |
| `Skeleton` | Animated loading placeholder card |

## Preview

Visit [http://localhost:3000/preview](http://localhost:3000/preview) to browse UI components.
