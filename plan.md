# DentalOne Dual Experience — Implementation Plan

## Product scope
A frontend-only Vite + React website that presents two authorized dental website experiences in one cohesive product. Version One follows the Dentel reference and Version Two follows the DentalOne reference. The only version-switching control is in the shared navigation bar; both versions retain their own content and section rhythm.

## Design direction
- **Design movement:** editorial clinical minimalism with soft, premium healthcare cues.
- **Core principles:** generous whitespace, high-confidence type hierarchy, calming clinical color, and human-centered interactions.
- **Color philosophy:** Version One uses icy blue, navy, and white for a clean modern clinic mood. Version Two uses white, cyan-blue, and deep ink for a brighter, more energetic care journey.
- **Layout paradigm:** asymmetric editorial sections, oversized display headlines, rounded media cards, and staggered content bands rather than a generic centered grid.
- **Signature elements:** pill navigation, oversized italic emphasis words, floating circular arrow buttons, and soft blue organic shapes behind content.
- **Interaction philosophy:** version switching is deliberate and contained in the nav; buttons use small lift/arrow feedback; sections reveal on scroll without blocking content.
- **Animation:** fade/translate section entrances, soft hover lift, image scale on cards, and reduced-motion fallbacks.
- **Typography:** display serif italic accents paired with a neutral sans body. Version One is navy/blue editorial; Version Two is bold black/blue modern.
- **Brand essence:** approachable modern dental care for people who want clear, comfortable, confidence-building treatment. Personality: calm, expert, optimistic.
- **Brand voice:** concise, reassuring, human. Example lines: “Your smile deserves the best quality.” “Modern care, made comfortable.”
- **Wordmark:** compact tooth + wordmark lockup rendered in CSS/SVG-like inline mark.
- **Signature color:** bright dental cyan `#1687e8`.

## Architecture
- `src/config/site.config.ts`: typed configuration and content records for both versions.
- `src/main.tsx`: React entry, version state, shared header, page composition, and route-safe anchors.
- `src/styles.css`: responsive visual system, motion, buttons, cards, and version-specific theme tokens.
- `public/manus-routes.json`: `/` route manifest.
- `reference/`: captured reference HTML used as evidence only; not runtime dependency.
- `README.md`: customization, assets, route, integration, and deployment guide.

## Runtime behavior
- The app starts on Version One and persists the chosen version in `localStorage`.
- The shared header includes the sole version selector. On mobile it remains accessible in the compact nav.
- Appointment actions are frontend-only and scroll to the contact/appointment section; they do not submit or claim a backend integration.
- Content, cards, service records, testimonials, and team records are data-driven per version.
- Reduced-motion users receive static transitions and no ambient transforms.

## Delivery
- Vite production build outputs `dist`.
- Preview runtime uses port 3000.
- Git branch is `main`; the requested GitHub remote is configured as `origin` when access permits.
