# Workshop Frontend

## Overview
A React + TypeScript workshop management frontend application built with Vite. Features a login interface and is designed to connect to a backend API.

## Tech Stack
- React 18.3
- TypeScript 5.5
- Vite 5.4
- React Router DOM 6.26
- TanStack React Query 5.59
- Zustand 4.5 (state management)

## Project Structure
```
src/
├── api/          # API client and service layer
├── app/          # App-level components
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── pages/        # Page components
├── state/        # Zustand state stores
├── styles/       # CSS styles
└── main.tsx      # Application entry point
```

## Development
- Run: `npm run dev` (starts Vite dev server on port 5000)
- Build: `npm run build` (outputs to dist/)
- Lint: `npm run lint`

## Configuration
- Frontend runs on port 5000 with host 0.0.0.0
- Configured for Replit proxy compatibility (allowedHosts: true)

## Recent Changes
- 2026-02-05: Initial import and Replit environment setup
  - Configured Vite for port 5000 with proxy support
  - Set up npm dependencies
  - Configured static deployment
