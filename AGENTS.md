# AGENTS.md — site-tuinstra

## Project Overview

**site-tuinstra** is the shared landing page for Marcel & Daan Tuinstra.
It serves as a family hub / directory at [tuinstra.dev](https://tuinstra.dev),
routing visitors to the right profile.

## Tech Stack

- **Framework:** Nuxt 4 (Vue 3, TypeScript)
- **UI Library:** Nuxt UI v4 (Tailwind CSS v4)
- **Linting:** ESLint via `@nuxt/eslint`
- **Testing:** Vitest + `@nuxt/test-utils`
- **CI:** GitHub Actions (lint, typecheck, build on PRs)
- **Hosting:** Static site generation (SSG) via `nuxt generate`

## Project Structure

```
app/
  assets/css/       # Tailwind / global styles
  components/       # Vue components
  composables/      # Vue composables
  data/             # Static data (profiles, etc.)
  layouts/          # Nuxt layouts
  pages/            # File-based routing
  types/            # TypeScript type definitions
docs/               # Project documentation
public/             # Static assets (favicon, images)
tests/              # Test files
  unit/             # Unit tests
  components/       # Component tests
```

## Coding Conventions

### General
- TypeScript strict mode.
- Use Vue 3 `<script setup lang="ts">` for all components.
- Prefer composition API over options API.
- No `any` types; define proper interfaces in `app/types/`.

### Naming
- Components: PascalCase (`ProfileCard.vue`).
- Composables: camelCase with `use` prefix (`useProfiles.ts`).
- Types/interfaces: PascalCase (`Profile`, `ProfileData`).
- Files: kebab-case for pages, PascalCase for components.

### Styling
- Use Tailwind CSS utility classes via Nuxt UI.
- Avoid custom CSS unless necessary; use `app/assets/css/main.css` for globals.
- Use Nuxt UI components (`UButton`, `UCard`, etc.) over custom implementations.

## Commit & PR Conventions

### Commit Messages
- Format: `<type>(<scope>): <description>`
- Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `ci`
- Keep messages concise and descriptive.

### PR Titles
- Format: `<type>[SC-<id>] <title>`
- Example: `feat[SC-182] Hub foundation: routes, layout en profieldata model`

### Branch Naming
- Format: `<type>/SC-<id>`
- Example: `feat/SC-182`, `chore/SC-186`

## Quality Gates

Before every commit:
1. `make lint` must pass (ESLint + typecheck).
2. `make test` must pass (Vitest).

Before merging a PR:
1. All CI checks must be green.
2. PR body must include a summary and Shortcut link.

## Useful Commands

```bash
make dev          # Start dev server
make build        # Production build
make generate     # Static site generation
make lint         # ESLint + typecheck
make lint-fix     # Auto-fix lint issues
make test         # Run tests
```
