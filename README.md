# Exact Dental Reference Host

This project renders the two authorized Framer references directly, preserving their original pages, content, images, typography, CSS, animations, motion, responsive behavior, and interactive runtime:

- Version One: https://dentel.framer.website/
- Version Two: https://dentalone.framer.ai/

The only local layer is the small fixed V1/V2 selector. It changes the complete reference experience without rebuilding or altering the referenced pages.

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

This is intentionally not a hand-authored recreation. The iframe source URLs are the original authorized websites, which is the only reliable way to preserve the source sites' exact pages, assets, animations, motion, and runtime behavior instead of producing another approximation.
