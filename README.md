# StyleIQ landing page

Static HTML/CSS/JavaScript implementation of DESIGN.md, CONTENT.md, and MOTION.md. No build step or package installation required.

## Local preview

From this directory run:

`python3 -m http.server 4174 --bind 127.0.0.1`

Open http://127.0.0.1:4174/. A static host can serve the same directory.

## Assets

Fashion images and welcome film are copied from the active StyleIQ prototype. Photos and garment cutouts are optimised as WebP. Product screens are authentic captures of the #app element, excluding the prototype shell, from Today, Closet, Studio, Calendar, and Trips packing.

Fonts: Playfair Display and Inter, loaded from Google Fonts with local serif/sans-serif fallbacks.

## Client preview

GitHub Pages serves the repository root from `main` at https://abu-projects.github.io/StyleIQ-web/. Updates pushed to `main` trigger a new deployment. `.nojekyll` keeps the site served as plain static files.

## Before launch

Replace the clearly labelled pending download panel with confirmed store links, then add a QR code only for a real download destination. Confirm launch features, screenshot stylist naming, asset publishing rights, and actual support/legal destinations. Unconfirmed Style Twin and Wishlist marketing has been omitted. No analytics or signup collection is configured.

## Interactions

Mobile navigation, native FAQ disclosure controls, pause/play for the muted welcome film, scroll-linked product screens on desktop, and an interactive four-screen tour. Reduced motion uses the static hero poster by default and removes animated entrances.
