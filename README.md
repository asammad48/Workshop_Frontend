# Workshop Frontend — React Architecture (Vite + TS + NSwag)

This repo is a **full React frontend structure** prepared for a workshop management system.

## Stack
- React + TypeScript (Vite)
- React Router (routing)
- TanStack Query (server-state, caching)
- Zustand (auth/session + small UI state)
- NSwag (generate TypeScript API client from backend swagger)

## Quick start
```bash
npm install
cp .env.example .env
npm run api:gen
npm run dev
```

## Where things go (strict)
- `src/app/`           → app shell, providers, routing
- `src/pages/`         → route-level pages (thin)
- `src/features/`      → feature modules (auth, jobcards, inventory...)
- `src/components/ui/` → reusable UI atoms (Button, Input, Dialog, Toast...)
- `src/components/`    → shared components (layout, tables, forms...)
- `src/hooks/`         → shared hooks
- `src/api/`           → http layer + NSwag wrapper + repositories
- `src/state/`         → zustand stores
- `src/utils/`         → helpers (date, money, validation, etc.)

## Rules (don’t break)
- Do not move/rename folders: prompts and future modules assume this structure.
- Pages must not call fetch directly. Use repositories + hooks.
- Repositories must be the only layer that touches NSwag generated clients.
- UI primitives live in `components/ui` (no feature-specific UI in there).

