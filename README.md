# TestAutomationFrameworkPOC
# ApplicationName
Google Search 

A small proof-of-concept Playwright test automation framework showing a root TypeScript Playwright setup and a JavaScript demo in `playwright-demo/`.

## Overview

This repository contains two Playwright test setups:
- Root: TypeScript-based Playwright configuration and example tests.
- `playwright-demo/`: a separate demo using JavaScript and an alternate Playwright config.

## Prerequisites

- Node.js v16+ (LTS recommended)
- npm (bundled with Node.js)

## Install

Install dependencies for the root project:

```bash
npm install
```

If you want to run the demo project as well:

```bash
cd playwright-demo
npm install
cd ..
```

## Running tests

Run all tests in the root project:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/example.spec.ts
```

Run the demo project's tests:

```bash
cd playwright-demo
npx playwright test
```

## Project structure

- `playwright.config.ts` — root Playwright configuration
- `tests/` — root tests (TypeScript)
- `playwright-demo/` — JS demo with its own `package.json` and config
	- `playwright-demo/playwright.config.js` — demo config
	- `playwright-demo/tests/` — demo test files

## Notes

- If Playwright browsers are not installed, run `npx playwright install`.
- The repository contains mixed TypeScript and JavaScript examples to demonstrate multiple setups.

## Next steps

- Add instructions for CI integration (GitHub Actions) if you want automated runs.
- I can also add example GitHub Actions workflow and a contributing guide.
