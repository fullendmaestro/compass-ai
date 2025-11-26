# Compass AI - Copilot Instructions

## Project Overview

Compass AI is a geographic exploration assistant built with Next.js, featuring an interactive Leaflet map. The project uses a pnpm workspace monorepo managed by Turborepo.

## Architecture

### Monorepo Structure

- **apps/web**: Next.js 15 application (App Router) with Leaflet map integration
- **packages/ui**: Shared React component library built on Radix UI primitives and Tailwind CSS
- **packages/eslint-config**: ESLint configurations for Next.js and React
- **packages/typescript-config**: Shared TypeScript configurations

### Package Naming Convention

Internal packages use the `@compass/*` namespace (e.g., `@compass/ui`, `@compass/eslint-config`). The web app is simply named `web`.

## Development Workflow

### Running the Project

```bash
pnpm dev          # Start all apps in dev mode (Turbo)
pnpm build        # Build all apps and packages
pnpm lint         # Lint all workspaces
pnpm format       # Format code with Prettier
```

### Adding Dependencies

- App dependencies: `cd apps/web && pnpm add <package>`
- UI package dependencies: `cd packages/ui && pnpm add <package>`
- Workspace dependencies: Use `workspace:*` or `workspace:^` protocol

### Development Server

The web app runs on Next.js dev server. Use `turbo dev` from root to enable parallel development of multiple apps if needed.

## Key Technical Patterns

### Map Component (Leaflet + Next.js)

Leaflet requires client-side rendering. Always use dynamic imports with `ssr: false`:

```tsx
const MapCanvas = dynamic(() => import("@/components/MapCanvas"), {
  ssr: false,
});
```

See `apps/web/app/home/page.tsx` for the reference pattern.

### Component Library Usage

Import from `@compass/ui` using subpath exports:

```tsx
import { Button } from "@compass/ui/components/button";
import { cn } from "@compass/ui/lib/utils";
import "@compass/ui/globals.css"; // Import global styles in layout.tsx
```

### Styling Approach

- Tailwind CSS v4 (with `@tailwindcss/postcss` plugin)
- `cn()` utility (clsx + tailwind-merge) for conditional classes
- Radix UI primitives for accessible, unstyled components
- Theme support via `next-themes` (see `apps/web/components/providers.tsx`)

### TypeScript Configuration

- Root extends `@compass/typescript-config/base.json`
- Web app extends `@compass/typescript-config/nextjs.json`
- Use path aliases: `@/*` for app-level imports, `@compass/ui/*` for direct UI package access

### ESLint Configuration

- Next.js apps: Import from `@compass/eslint-config/next-js`
- React libraries: Import from `@compass/eslint-config/react-internal`
- All configs use flat ESLint config format (not legacy `.eslintrc`)

## External Dependencies & Integration

### Key Dependencies

- **CopilotKit**: AI integration framework (`@copilotkit/react-*`)
- **Leaflet**: Map rendering (loaded via CDN in `layout.tsx` head)
- **Radix UI**: Accessible component primitives
- **React Hook Form + Zod**: Form validation
- **Framer Motion**: Animations
- **Lucide React & Tabler Icons**: Icon libraries

### External Scripts

Leaflet CSS and JS are loaded from CDN in `apps/web/app/layout.tsx` using Next.js `<Script>` and `<link>` tags for CSP compatibility.

## Critical Conventions

### File Organization

- Use lowercase kebab-case for directories (`app/home`, `components/map-canvas.tsx`)
- Component files use PascalCase (`.tsx`)
- Utility/config files use kebab-case (`.ts`, `.js`)

### Component Patterns

- All UI components export named functions (not default)
- Use `"use client"` directive for client components (providers, interactive maps)
- Prefer composition over prop drilling (see Radix UI patterns in `packages/ui/src/components/*`)

### Turborepo Task Dependencies

- `build` depends on `^build` (builds dependencies first)
- `dev` is persistent and non-cached
- Turbo caches build outputs in `.next/**` (excluding cache directory)

## Common Tasks

### Adding a New UI Component

1. Create in `packages/ui/src/components/<component>.tsx`
2. Export via `packages/ui/package.json` exports field: `"./components/<component>": "./src/components/<component>.tsx"`
3. Import in web app: `import { Component } from "@compass/ui/components/<component>"`

### Working with the Map

- Never import Leaflet directly in SSR context
- Use `react-leaflet` components (`MapContainer`, `TileLayer`, `Marker`)
- Map state lives in client component hooks (see `MapCanvas.tsx`)

### Type Safety

- Run `pnpm typecheck` in `apps/web` to check types without building
- Shared types should live in package lib files, not component files
- Use Zod for runtime validation, TypeScript for compile-time safety
