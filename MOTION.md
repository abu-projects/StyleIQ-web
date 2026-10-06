# StyleIQ — Landing page motion direction

Prepared: 6 October 2026.
Companion documents: [DESIGN.md](./DESIGN.md) and [CONTENT.md](./CONTENT.md).

## Implemented motion revision — 6 October 2026

The earlier rotating-phone treatment is superseded. Product screens now stay upright inside their shared clean shells. Native scrolling drives distinct scenes: a choreographed hero with shallow depth, closet and outfit assembly, a three-context Style Twin crossfade, six Style Studio states, planner and packing details, and the final download arrival. Supporting Discover cards and illustrative metrics use quieter one-shot motion.

`motion.css` centralises timing and distances; `motion.js` batches geometry reads before writes in one requested frame per scroll/resize batch. Image replacements decode before crossfading, with request guards for fast and reverse navigation. No animation library or idle animation loop is used.

Below 768px, sticky scenes become normal content with explicit buttons for Twin and Studio. Reduced motion removes entrances, depth and sticky positioning, pauses the film by default, and retains manual controls. Product walkthroughs and metrics are explicitly illustrative.

The remaining storyboard records the original direction; the implemented revision above takes precedence.

## Reference review

Reviewed [the new Whering website](https://www.whering.co/) in a desktop browser, including scrolling through its introduction and feature sequence. These are visual observations, not an audit of its animation code, library, timings, or mobile behaviour.

Observed: a full-screen background video with a pause control; an organic dark mask over the film; a floating rounded navigation bar retaining its download action; large text changing across scroll scenes; small fashion images moving around that narrative; transitions between dark and light backgrounds; and overlapping, slightly rotated feature panels carrying app screens. The panels progress as the visitor scrolls. Navigation also exposes controls for feature groups.

The useful inspiration is the relationship between movement and the story: fashion imagery establishes the mood, scattered pieces introduce the wardrobe problem, and product screens explain the solution. Adapt this relationship using StyleIQ assets and identity.

## Our proposed treatment

الحركة هنا تخدم الفكرة: قطع لبس عندك → تتجمع في دولاب واضح → تتنسّق في إطلالة → تتحفظ في خطتك. نحافظ على إحساس StyleIQ الهادئ والأنيق، ونستخدم حركة واضحة ومحدودة بدل ما تطوّل الطريق للتحميل.

Use warm ivory, espresso, restrained gold, Playfair Display and Inter from DESIGN.md. Keep screen interiors unchanged. Use existing StyleIQ fashion films, photos, and garment cutouts; do not reuse Whering media, shapes, brand colours, or marketing claims.

All durations, distances, and behaviours below are proposed StyleIQ specifications, not measured values from the reference.

## Motion storyboard

| Scene | Content and visual | Proposed movement | Purpose |
| --- | --- | --- | --- |
| Hero | Existing StyleIQ fashion film, hero copy, Today screen, download action | Film plays silently inline; headline and screen enter once with a 16–24px rise and fade over 500–650ms. Use a warm tonal overlay for readable copy. | Establish fashion identity and explain the product immediately. |
| Short wardrobe story | Three or four garment cutouts and original two-line copy | On desktop, cutouts move from a loose arrangement into a simple wardrobe composition as the section enters. Keep translation under 80px and rotation under 4°. | Visually connect clothes already owned to the digital closet. |
| How it works | Add → Style → Plan | Reveal steps with small 80–100ms offsets. Highlight the corresponding app image as each step becomes active. | Make the starting process clear. |
| Main product benefits | Closet → AI stylist / Today → Calendar / Trips | Desktop: one phone stays in view beside three short copy blocks; its screen crossfades as the active block changes. Use 250–350ms crossfades and subtle 12–20px shifts. | Explain three benefits with genuine screens. |
| Supporting features | Studio, Style Twin, Wishlist when confirmed for launch | Cards enter once over 350–450ms; hover lift up to 4px on pointer devices. | Add depth without competing with the core story. |
| Final download | Final headline and platform choices | One quiet fade and rise over 400–500ms. Buttons remain stable and immediately usable. | Finish on a clear action. |

Prefer the phone-and-copy sequence for the main benefits. As an alternative, use three overlapping feature panels with a very small tilt; choose one treatment rather than stacking both effects. Screens must finish upright and readable.

## Original short-story copy

Optional bridge after the hero, before How it works:

**You know the feeling. A full closet. No idea what to wear.**

**See your pieces together. Find a combination you love.**

End the scene on the Closet screen, then continue directly into the three steps. This bridge supplements the existing hero; it does not replace the product description or delay access to download.

## Navigation and conversion

- Use a compact floating navigation surface inspired by the app’s warm glass treatment, with StyleIQ and a persistent “Get the app” action.
- Keep primary copy and download links available from the first render. Animation must never gate navigation or require the user to finish a scene.
- Native scrolling remains in control. Do not intercept the mouse wheel, force snap points, or require several screens of scrolling to reveal one short sentence.
- Bound any desktop sticky benefit section to its three copy blocks. Keep space proportional to the content rather than creating a long blank scroll timeline.

## Mobile and accessibility

- Mobile uses a natural vertical layout: copy followed by its associated screen. Replace the desktop sticky sequence and large cutout movement with small fades or static imagery.
- With `prefers-reduced-motion: reduce`, display every section in its final readable state, disable parallax and animated transforms, and show the film poster by default.
- Offer a visible, keyboard-operable pause/play control for the background film. Keep essential meaning in text and product screenshots, independent of video.
- Hide decorative cutouts from assistive technology. Give meaningful screenshots descriptive alt text. Preserve semantic heading order, focus visibility, and real links.
- Do not auto-advance interactive feature tabs while someone is reading or using them. Any tabs introduced during implementation need keyboard support and a clear selected state.

## Implementation guidance for the next phase

Use CSS transitions and IntersectionObserver for ordinary reveals. If a continuous scroll sequence is retained, choose its implementation after the web project’s stack is set. No animation dependency is selected or installed by this review.

Animate transform and opacity where possible. Avoid repeatedly animating backdrop blur, filter intensity, layout dimensions, or the real app screenshot contents. Use the film poster immediately, reserve image space to prevent shifts, lazy-load lower-page imagery, and pause offscreen video. Reveal each ordinary section once.

Verify desktop and mobile layouts, reduced motion, video pause, keyboard access, and download visibility during implementation. This document specifies the direction; it does not claim those behaviours have already been built or tested.

## Priority

First build: clear hero with film/poster, persistent download, a short garment-to-closet scene, and the three-benefit screen sequence.

Then refine entrances and small interactions. Keep the longer cinematic text sequence out of the initial build unless a later review shows that it improves understanding without making the page feel slow.
