# Verification — 6 October 2026

- Chromium: 1440 × 900, 390 × 844, 320 × 740.
- No horizontal overflow at the three checked widths.
- No page JavaScript errors or failing HTTP responses during the checks.
- All referenced image assets return successfully.
- Product tour changes the selected screen and pressed state.
- FAQ expands through its native disclosure control.
- Mobile navigation opens and closes; Escape returns focus to its toggle.
- Reduced-motion browser context starts the hero film paused.
- JavaScript syntax check passed.
- Visually reviewed desktop hero, mobile hero, How it works, sticky feature sequence, product tour, and final download composition.

## Phone frame and 3D scroll revision

- Recaptured five app screens with prototype outer clipping disabled; source app files were not edited.
- Visually reviewed clean shared shells, complete step phones, mobile step framing, and sticky feature framing.
- Chromium at 1440, 1024, 768, 390, and 320px: no horizontal overflow; step frames preserve the source screen aspect ratio and fit inside their cards.
- Verified that scrolling changes the computed device pose and that the sticky feature screen progresses through Closet, Today, and Calendar.
- Switching reduced motion on while viewing the page removes every device transform; switching it off restores scroll motion.
- Existing tour, FAQ, mobile navigation, asset, video, and JavaScript checks passed again.

The directory is not a Git repository, so a Git diff check is unavailable. This is a local implementation; download destinations and release facts remain pending as recorded in CONTENT.md.
