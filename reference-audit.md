# Exact reference audit

Sources verified on 2026-10-06:

- https://dentel.framer.website/
- https://dentalone.framer.ai/

## Result

The implementation no longer recreates either site with substitute React sections. It renders each original Framer experience directly in a full-viewport frame and switches the complete experience only through the local V1/V2 selector. This preserves the references' own:

- Pages and internal navigation
- Text and content
- Image assets and media
- Typography and layout
- CSS and responsive behavior
- Animations, hover states, transitions, and motion
- Forms, accordions, carousels, and other reference runtime behavior

Both source URLs and the preview return HTTP 200. The preview was visually checked after loading Version Two and Version One; each displayed the original reference content and interactions.

## Intentional local layer

The only added UI is the small fixed V1/V2 selector required to switch between the two complete websites. It does not replace, restyle, or approximate either reference page.
