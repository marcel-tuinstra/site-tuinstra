.PHONY: dev build generate lint lint-fix typecheck test

## Development
dev:
	npm run dev

## Build
build:
	npm run build

generate:
	npm run generate

## Quality
lint:
	npm run lint
	npm run typecheck

lint-fix:
	npm run lint:fix

typecheck:
	npm run typecheck

## Testing
test:
	npm run test
