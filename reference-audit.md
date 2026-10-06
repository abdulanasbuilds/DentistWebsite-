# Reference parity audit

Sources inspected on 2026-10-06:

- https://dentel.framer.website/
- https://dentel.framer.website/about
- https://dentel.framer.website/service
- https://dentel.framer.website/blog
- https://dentel.framer.website/member
- https://dentel.framer.website/contact
- https://dentalone.framer.ai/

## Dentel reference findings
The homepage uses an icy-blue honeycomb hero, a compact tooth wordmark, pill navigation, oversized navy/italic-serif hero copy, a mostly white/faded clinic image, About Us statistics, Services cards for Oral Surgery / Braces Treatment / Root Canal, six common dental problems, a five-item treatment flow, before/after transformations, an expert team section, testimonials, blog preview, appointment/contact UI, and footer. Inner routes include About Us, Our Services, Blog, Contact/Appointment Inquiry, and Expert Dentists/Member pages. Contact fields include full name, email, age, preferred date, phone, service, doctor, gender, and message.

## DentalOne reference findings
The homepage uses a white/cyan hero with a large tooth illustration wrapped by a blue orbit, floating Modern Dentistry and Easy Process labels, two pill CTAs, avatar proof, complete service categories with bullet detail lists, a three-step process, a three-person dental team with bios, Why Us, a General Dentistry before/after section, a full services detail section, Expert Care features, Reviews, a second team teaser, FAQ, appointment fields, hours, and footer. The implemented version now includes the major equivalent sections and the locally downloaded orbit/tooth assets.

## Current intentional differences
The original Framer runtime includes builder-specific hover/parallax/loading behavior and free-template badges/branding. The implementation keeps the authorized visual/content roles but removes builder badges and uses local responsive React/CSS behavior. Appointment forms remain frontend-only and do not claim submission.
