# Exact Dental Reference Host

This project contains local mirrored copies of the two authorized reference pages. Their original Framer HTML/runtime/assets are preserved locally, while the original visible footer and builder badge are replaced with the requested Abdul Anas builder credit:

- Version One: https://dentel.framer.website/
- Version Two: https://dentalone.framer.ai/

The small fixed V1/V2 selector changes the complete reference experience. Version One includes local copies of the linked About, Service, Blog, Member, and Contact pages.

## Run

```bash
npm install
npm run dev
```

The preview runs on `http://localhost:3000`.

## Build and checks

```bash
npm run typecheck
npm run build
```

The production output is `dist/`. The static route manifest exposes only `/`; all page navigation inside each original Framer experience remains owned by that reference runtime.

## Exactness note

This is intentionally not a hand-authored recreation. The files under `public/mirror/` are fetched copies of the authorized reference HTML/runtime pages. This preserves the original pages, assets, animations, motion, and runtime behavior while allowing the visible footer and builder badge to be customized locally.
