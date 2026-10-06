# StyleIQ Web — Mobile Design Carryover

Captured: 2026-10-06. Purpose: carry the existing StyleIQ **mobile-screen identity** into a landing page that explains the application. This is a design reference; website implementation is a later task.

## Source and scope

Source project: `/Users/aboelkheirmohamed/code/StyleIQ`.

- Active UI: `index.html`, `styles.css`, `app.js`.
- Existing written reference: `docs/STYLEIQ_DESIGN_SYSTEM.md`.
- Browser review: `#D-02` (Today), `#C-01` (Closet), `#S-01` (Welcome), using the actual rendered content and computed styles.
- Preserve the current working source, including its latest local changes. Archived versions in `old/` and `_archive_not_used_by_zero_html/` are outside this reference.
- Extract only the application inside the phone. The screen inventory sidebar, scenario switches, notes panel, stage background, device border, notch, and device shadow are prototype presentation tools, not website identity.

Authority: current rendered mobile screen → final applicable CSS rules → written design-system document. `styles.css` contains successive design passes; an earlier `:root` or generic rule is not necessarily the current result. Do not copy the entire prototype stylesheet into the website.

## Visual identity

Calm fashion editorial: warm ivory, opaque white content, espresso text, subtle gold details, generous whitespace, serif editorial headlines, precise sans-serif controls, and photography that carries the visual story.

The signature comes from the contrast between editorial content and translucent navigation/overlays. Avoid turning every section into a glass card. Feature content generally has no shadow; media overlays and navigation can have glass depth.

The visible product wordmark is **StyleIQ**, with that capitalization. On the welcome screen it is text set in Playfair Display, regular, white over film. Do not take the heavier wordmark in the prototype sidebar as the product logo reference.

## Palette — exact source values

| Role | Value | Source / application |
| --- | --- | --- |
| Warm app canvas | `#f8f6f3` | `--siq-bg`; principal brand canvas |
| Editorial content | `#ffffff` | `.app.siq-editorial` overrides `--siq-surface`; Closet content is also explicitly white |
| Warm off-white | `#fffdfa` | Root surface before the editorial override; glass tint and fallback |
| Subtle surface | `#f1ede8` | `--siq-surface-subtle`; subdued controls/background grouping |
| Cream guidance | `#fff9ed` | `--siq-surface-warm` |
| Cream boundary | `#e8d7b4` | `--siq-border-warm` |
| Primary text / CTA | `#1b1716` | `--siq-text`; espresso, not pure black |
| Secondary text | `#6f675f` | `--siq-text-secondary` |
| Tertiary text | `#978c82` | `--siq-text-tertiary` |
| Content divider / border | `#ece7e1` | Editorial content override of `--siq-border` |
| Strong content border | `#d6ccc2` | Editorial content override |
| Root border | `#ded8d1` | Used outside the scoped editorial content override |
| Editorial gold | `#c89b45` | Content labels/decorative details; latest scoped override |
| Readable functional accent | `#9a6f28` | `--siq-accent`; links/functional emphasis |
| Strong accent | `#745018` | `--siq-accent-strong` |
| Soft accent | `#f5ead2` | `--siq-accent-soft` |
| Dark-surface secondary text | `#e4dcd3` | `--siq-on-dark-secondary` |
| Dark-surface accent | `#ebc77e` | `--siq-accent-on-dark` |
| Success | `#3f6455` / `#e7f0e9` | Foreground / soft background; feedback only |
| Error | `#923c32` / `#f7e9e6` | Foreground / soft background; feedback only |
| Focus token | `#8a641f` | `--siq-focus`; some editorial fields override to `#c89b45` |
| Scrim | `rgba(27, 23, 22, 0.46)` | `--siq-overlay` |

Gold is a restrained detail, not the main button fill. The root editorial gold remains `#cc9b40`, but editorial content overrides it to `#c89b45`; the website should carry the content value. Small important text should use the darker functional accent with contrast checked on its actual background.

Route-specific nuance is allowed when reproducing real screens: Trips uses `#f4f0eb`; Today’s photographic hero has a `#282421` fallback. Neither replaces the shared palette.

## Typography

| Role | Family | Mobile reference |
| --- | --- | --- |
| Editorial display | Playfair Display, Georgia, serif | 32–40px, weight 500, line-height 1.04, tracking `-0.035em` |
| Welcome headline | Playfair Display | Rendered headline 34px / 500; splash copy 38px / 500 |
| Page editorial title | Playfair Display | 25px / 500, line-height 1.14, tracking `-0.025em` |
| Section editorial title | Playfair Display | 19px / 500; selected major sections use 28px |
| Body | Inter, system sans-serif | 14px, line-height 1.6 |
| Controls / navigation | Inter, system sans-serif | Buttons 13px / 650; labels generally 12px / 600 |
| Secondary text | Inter | 12px |
| Caption / helper | Inter | 11px, line-height 1.45 |
| Eyebrow | Inter | 11px, uppercase, tracking `0.075em`, line-height 1.35 |

Important scope rule: `--font-display` at the root is Inter from an older auth pass. `.app.siq-editorial` resets it to **Playfair Display**, while `.siq-header` deliberately resets it to **Inter**. Current Today and Closet root headers render as Inter 31px / 500; do not impose the older generic 18px header rule on those screens. Today’s hero heading renders as Playfair Display 24px / 500.

Loaded fonts in `index.html`: Inter 300–700; Playfair Display regular 400/500/600 and italic 400; Manrope 400–700; Caveat 400–700. **Inter + Playfair Display are the main carryover pair.** Manrope remains in some auth/utility selectors; Caveat is loaded but is not established as a main brand role. Keep those only when recreating a component that actually uses them. If retaining source declarations at weight 650, preserve font rendering consistently rather than silently substituting a different family.

For the future web layout, keep these families, weights, tracking, and hierarchy. Larger desktop headline sizes can be introduced responsively; they are web adaptation choices, not measured mobile values. Avoid enlarging mobile mockup typography independently of its screen scale.

## Spacing and geometry

- Spacing tokens: **4, 8, 12, 16, 20, 24, 32, 40, 48px**.
- Editorial page inset: **24px**; feature body inset: **20px**; utility inset: **12–16px**.
- General section rhythm: 32px; current editorial recipe overrides `.siq-section` to **24px**.
- Field label gap: 8px; field-to-field rhythm: 20px.
- Main feature/content corners: **24px** in editorial content, rather than the root token’s older 22px.
- Utility radii: 8/12/16px; inputs: **14px**; primary buttons: **16px**; pills/circles: 999px.
- Borders are usually 1px; no default content-card shadow.
- Floating elevation token: `0 12px 34px rgba(73,57,45,.1)`.
- Overlay elevation token: `0 24px 72px rgba(27,23,22,.2)`.
- Buttons: minimum height **48px**, horizontal padding 20px. Inputs: **52px**. Interactive hit target: at least **44px**.
- Reference device: 375 × 812. The prototype’s 680px content maximum is an app constraint, not a prescribed website container width.

Keep route-specific silhouettes when showing the actual app: Today’s full photographic hero has 30px lower corners; Closet’s compact garment tiles are more square than feature cards. Do not normalize every asset into a 24px card.

## Component recipes

**Primary action:** espresso `#1b1716`, white label, Inter 13px / 650, 16px radius, no shadow. Normally one dominant action per context.

**Secondary action:** white surface, subtle warm border, espresso label, same sizing. Ghost actions are transparent and quieter. Icons are Lucide outline icons from the active prototype, with accessible names on icon-only buttons; preserve their light stroke appearance.

**Feature content:** large fashion image above an attached white caption/body, or editorial copy over image with a readability shade. Use whitespace and rules for page grouping; avoid decorative nested cards.

**Closet:** current view has three columns of garment cutouts on white, subtle tile boundaries, horizontal category tabs, and a photographic top strip dissolving into the white content. Garments use containment; people and lifestyle photography use cover. Preserve original image proportions and composition.

**Tabs:** current Closet categories are plain text with a dark underline for the active category. Do not assume all tab sets are filled pill controls.

**Guidance / stylist content:** cream context surfaces and subtle gold cues; generic AI panels have a restrained accent edge. The current Today hero instead places its stylist note in a translucent media overlay. Preserve this distinction when depicting that screen.

**Forms:** opaque bordered grouping, warm translucent fields, 14px field radius, visible labels and focus. No glass form-card backdrop in the latest editorial auth recipe.

**Sheets / dialogs:** white elevated surfaces, warm border, rounded corners; sheets round the upper corners. These remain app references rather than required landing-page sections.

## Liquid Glass — preserve the current implementation

Default glass transparency is **50%**, controlled by `settingsPreferences.liquidGlass` in `app.js` and `--siq-liquid-glass-opacity` in CSS. Shared tint: `rgba(255,253,250,.5)`; glass edge token: `rgba(255,255,255,.78)`.

The latest bottom navigation is **not** the older floating rounded rectangle described in the generic design system. It is an 84px-high scalloped surface with a raised circular Lens action. The glass is on `::before`; the container itself is transparent. Browser review confirmed SVG refraction via `url("#navigation-glass-surface") blur(3px) saturate(1.3)`. The fallback is `blur(10px) saturate(130%) brightness(1.04)`. It also uses inset white highlights, a subtle warm lower edge, and restrained drop shadows.

The refraction filter is defined in `index.html`, referencing `images/navigation-glass-surface.png`. Reproducing the glass requires the relevant filter/layers/assets, not only `background` and blur. Reduced-transparency fallback is opaque `#fffdfa` with no backdrop filter.

Current Today and Closet headers sit over photographic media with white Inter titles and translucent utility controls. Do not apply a uniform frosted header bar everywhere based on the earlier shared rule. Transfer glass selectively to a future web navigation or media overlay; keep the literal app bottom navigation inside screen demonstrations.

## Imagery, media, and welcome behavior

Use the existing product media from the active app as the visual source. Source locations are `images/`, `videos/`, and `app videos/`; resolve assets actually referenced by `app.js` and CSS before selecting or copying them. No assets have been copied into this website folder in this task.

Examples of active source references: `images/look-coffee-meeting-cairo.png`, `images/look-soft-tailoring-cairo.png`, `images/look-evening-cairo.png`, `images/look-menswear-studio-cairo.png`, `images/trip-packing-cairo.png`, and garment cutouts such as `images/item_silk_shell.png` / `images/item_blazer.png`. These are reference assets, not a fixed landing-page asset list.

Photography is warm, natural, fashion-led, with cream tailoring, neutral interiors, realistic people, and clean wardrobe cutouts. Preserve the app’s media rather than introducing unrelated stock imagery or a different visual treatment.

Welcome uses full-screen cycling films, white editorial text, and a transparent refracting introduction card. Account actions are a separate group beneath the card. Source card styling includes a 9px blur, subtle white gradient tint, specular highlights, and SVG refraction where supported. This is an intentional media-overlay exception to opaque content cards.

Motion is restrained: fades and short upward reveals. Welcome overlay transitions last roughly 480–560ms and must keep already-mounted films playing continuously; reduced motion removes these animations. Carry the feel to the landing page without inventing excessive parallax or scroll effects.

## Applying this identity to the landing page

The page should explain StyleIQ: choosing outfits from clothes you already own, building a digital wardrobe, discovering and saving Looks, daily styling, planning events/trips, and receiving help from the personal stylist. Introduce the product and its benefit before introducing the stylist.

Use the actual welcome visual language for a hero direction, then warm ivory/white editorial sections, serif headlines, Inter explanations, real app demonstrations, espresso CTAs, and restrained gold details. Desktop layout can gain breathing room and wider compositions while keeping the same palette, material roles, typography, imagery, and component character.

Confirmed public stylist name: **Olivia**. Historical prototype screenshots may still show **Livia**; internal `muse-*` class/asset names are retained for compatibility. All website text and accessible labels use Olivia.

Do not invent release status, pricing, App Store links, testimonials, customer counts, or unverified capabilities. Final landing-page copy and conversion destination are outside this design-extraction task.

## Fidelity checklist for implementation

- Compare only the mobile-screen content with the source, excluding the prototype shell.
- Preserve Playfair Display editorial / Inter utility roles and exact core colors.
- Keep white content opaque and glass limited to deliberate navigation/media layers.
- Keep espresso CTAs, subtle warm boundaries, restrained gold accents, and no default content shadows.
- Use current rendered screen layouts; respect route-specific media, radii, tabs, and header exceptions.
- Verify font loading, readable contrast, keyboard focus, 44px hit targets, reduced motion/transparency, and narrow-screen overflow.
- Treat web headline scaling, desktop containers, and section composition as adaptations that must remain visually consistent with the mobile app.

Verification for this capture: source tokens, scoped overrides, and selected computed styles reviewed; Today, Closet, and Welcome visually inspected in the browser. No application files or behavior were changed, and no website has been implemented yet.
