# Testing

## Overview

This project uses [Vitest](https://vitest.dev/) as the test runner, integrated with
[@nuxt/test-utils](https://nuxt.com/docs/getting-started/testing) for Nuxt-aware testing.

## Running Tests

```bash
# Run all tests once
make test

# Run tests in watch mode
npm run test:watch
```

## Test Structure

Tests are colocated with the code they test or placed in a top-level `tests/` directory:

```
tests/
  unit/          # Unit tests for utilities, composables, data
  components/    # Component tests
```

## Writing Tests

- Use `describe` / `it` blocks.
- Name test files `*.test.ts` or `*.spec.ts`.
- Keep tests focused and independent.

## CI

Tests run as part of `make test` which is required to pass before every commit.
The CI pipeline (GitHub Actions) runs `make lint` and `make test` on every pull request.
