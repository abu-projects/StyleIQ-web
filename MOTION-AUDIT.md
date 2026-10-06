# StyleIQ motion audit — 6 October 2026

Baseline: published main 533fb09. Vanilla HTML/CSS/JS; no motion libraries.

| Section | Existing motion / weakness | Treatment |
|---|---|---|
| Navigation | Hover lift, mobile toggle; usable | Keep logic, unify micro timings |
| Hero | Whole phone tilts with scroll; no entrance choreography | Visual first, masked headline lines, restrained depth |
| About | Two garment slides plus generic fade | Quiet editorial garment handoff |
| How it works | Identical fade-up cards, identical phone poses | Closet cutouts converge; other cards settle quietly |
| Features | Sticky phone, observer screen swap with 180ms blank gap; reverse scroll can retain wrong screen | Position-derived state, decoded overlapping crossfade; Olivia context and planner demonstration |
| Travel | Fade-up on full background photo | Capsule assembly and day labels |
| App tour | Four buttons, whole-image blank swap | Preserve controls; add dedicated stable Studio scroll demonstration |
| FAQ | Native details, rotating plus | Preserve, minimal motion |
| Download | Same reveal and rotating phone | Visual arrival, headline scale, status last |
| Twin / Olivia / Discover / intelligence | No independent showcases | Compact additions using product reference; illustrative metrics labelled |

Architecture: existing IntersectionObserver reveals unobserve once; video visibility observer; chapter observer; passive scroll/rAF rotates all phones ±28deg. No keyframes or library. Layout reads and writes are interleaved. Screenshot timer is race-prone. CSS durations vary from .2 to 1s.

Visual baseline reviewed on desktop and mobile; tablet shares the desktop sticky layout with tighter columns. Full-height cleaned phone captures are retained. Mobile already removes feature pinning but still applies the same phone motion. Film occasionally shows an empty-looking frame: retain a permanent poster fallback while media is unavailable.

Whering reviewed as a pacing benchmark: dominant imagery, restrained text, distinct narrative beats and native scrolling. Do not borrow its shapes, typography, branding or compositions.

Six signature moments: hero choreography; Twin Transform; Wardrobe Assemble; Olivia outfit assembly; Studio scene; final arrival. Planner, packing, Discover and metrics use smaller supporting treatments. Native sticky layout only, no scroll interception. All content remains available without motion or JS. Reduced motion removes sticky sequences and uses static previews plus functioning controls.

Validation: 1440, 1280, 1024, 768, 430, 390; reverse / fast scroll, resizing, images, keyboard controls, reduced motion and console. Compare with untouched production before publishing.
