# DentalOne Dual Experience

A frontend-only, Vite + React reconstruction of two authorized dental reference experiences in one cohesive website. The navigation bar is the only place to switch between Version One (Dentel) and Version Two (DentalOne).

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

The production output is `dist/`.

## Configuration

Edit `src/config/site.config.ts` first. It contains the shared contact details and the independent content model for both versions: navigation, hero content, service cards, process steps, testimonials, team records, and FAQ items.

## Assets

Reference-derived local assets live in `public/images/`. Replace them there and update the paths in `site.config.ts`. Images include descriptive `alt` text in the page components and use fixed aspect-ratio containers to protect layout.

## Routes and features

The project currently exposes `/` and uses anchor sections for each reference's nav destinations. The nav-only selector persists the active version in `localStorage` and returns to the top when switching. Appointment buttons intentionally scroll to the contact section only; no booking, CRM, form submission, or payment integration is connected.

## Deployment

Use any static host that supports a Vite build and SPA fallback. Build with `npm run build` and publish `dist/`. For Cloudflare Pages, use build command `npm run build` and output directory `dist`.

## Validation

Before delivery, run the typecheck and production build, request `/manus-routes.json`, test direct `/` loading, inspect desktop/mobile widths, keyboard navigation, the mobile menu, details/FAQ expansion, and `prefers-reduced-motion: reduce` behavior.
