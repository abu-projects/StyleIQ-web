# StyleIQ — Landing page content

Prepared: 6 October 2026.
Status: content and asset brief ready for landing-page implementation; store destinations and launch facts remain to be supplied.
Design authority: [DESIGN.md](./DESIGN.md).
Product evidence: the active StyleIQ HTML prototype and its welcome flow, not a verified production release.

## الاتجاه

الصفحة هدفها إن الزائر يفهم StyleIQ بسرعة، يشوف إزاي يخدمه في حياته، وبعدها يحمّل الأب. الرسالة الأساسية: لبس عندك بالفعل، أفكار جديدة لتنسيقه، ومساعدة شخصية في اختيار إطلالتك.

نبدأ بـStyleIQ والفائدة، ثم نعرّف الـAI stylist. المحتوى أدناه بالإنجليزية مبدئيًا ليتماشى مع لغة شاشات الأب الحالية. يمكن تجهيز نسخة عربية مستقلة لاحقًا.

## Reference findings

Reviewed the supplied [Whering website](https://whering.co.uk/) and its [how-it-works page](https://whering.co.uk/how-it-works). The supplied site now displays a notice linking to a newer website; this brief uses the supplied reference.

Useful structure: a benefit-led introduction, visible store links and desktop QR code, explanations paired with app visuals, a product tour, customer evidence, and FAQ. Adapt that conversion structure to StyleIQ. Keep StyleIQ’s visual identity and write original copy.

For the first version, focus navigation and content on understanding the app and downloading it. A blog, newsletter, community section, and extensive company pages can follow when there is real content to support them. Use demonstrated app screens as proof until genuine customer reviews are available.

## Positioning and voice

**Core promise:** Make more of your wardrobe, with a little personal guidance.

**Product description:** StyleIQ brings your wardrobe, outfit ideas, and plans together, with an AI stylist to help you decide what to wear.

Voice: warm, clear, confident, fashion-aware. Explain everyday benefits before feature names. Keep sentences short. Present AI as helpful guidance; avoid promises of perfect results or guaranteed savings.

## Page order and complete draft copy

### Assembly map

This is the intended reading order. The narrative bridge is short; the product benefits carry the main explanation. About StyleIQ introduces the purpose, and Get the app is the mandatory conversion section.

| Section ID | Section | Main elements | Image / screen direction | Action |
| --- | --- | --- | --- | --- |
| `navigation` | Navigation | StyleIQ wordmark, section links, primary button | Warm glass surface | Get the app → `#get-the-app` |
| `hero` | Hero | Eyebrow, headline, description, two buttons | Welcome film with a static fashion poster; Today screen | Get the app / See how it works |
| `about` | About StyleIQ | Short narrative and product introduction | Garment cutouts resolving into Closet | Continue naturally to How it works |
| `how-it-works` | How it works | Three numbered steps | Add item, Studio, Calendar details | No competing conversion |
| `features` | Core benefits | Three image-and-copy blocks | Closet, Today / AI stylist, Calendar / Trips | Get the app |
| `explore` | More to explore | Supporting feature cards | Studio, Style Twin, Wishlist interface crops | No additional primary action |
| `app-tour` | Product tour | Captioned app sequence | Authentic mobile screen captures | Get the app |
| `faqs` | FAQs | Four concise expandable answers | Text-led | No competing conversion |
| `get-the-app` | Get the app — required | Wordmark, headline, description, verified store choices, desktop QR | Fashion image + Today screen | Direct StyleIQ store download |
| `footer` | Footer | Wordmark, tagline, contact and legal links | No decorative media needed | Get the app anchor if useful |

The public primary CTA label is **Get the app** everywhere. Navigation, hero, and mid-page buttons lead to `#get-the-app`; the verified platform choices inside that section complete the download journey.

### 1. Navigation

Brand: **StyleIQ**

Links: **About · How it works · Features · FAQs**

Primary action: **Get the app**

Use section anchors on one landing page. The primary action opens or scrolls to the download choices.

### 2. Hero — establish the product and the benefit

Eyebrow: **YOUR WARDROBE. MORE POSSIBILITIES.**

Headline: **A fresh look at what you already own.**

Body: **Bring your wardrobe into StyleIQ, discover new outfit combinations, and plan what to wear—with your AI stylist by your side.**

Primary action: **Get the app**

Secondary action: **See how it works**

Supporting line: **Your closet. Your taste. Your everyday style.**

Visual: the actual Today screen as the main product image, with a smaller Closet detail. Pair it with an existing StyleIQ fashion image or welcome-film still. Keep the headline and download action visible without waiting for video or animation.

### 2a. About StyleIQ — purpose and short wardrobe story

Anchor: `about`

Narrative line: **You know the feeling. A full closet. No idea what to wear.**

Eyebrow: **ABOUT STYLEIQ**

Headline: **Make more of the wardrobe you already have.**

Body: **StyleIQ brings your clothes, outfit ideas, and plans together. See what you own, explore combinations that feel like you, and get guidance from your AI stylist when you need a little inspiration.**

Closing line: **Your style starts with you. We help you put it together.**

Visual: silk-shell and blazer cutouts, plus a Closet screen capture. The cutouts move into a simple organised composition, as specified in MOTION.md. Keep this compact and continue directly into the three steps. This section also covers the About introduction without requiring a separate company page or invented founder story.

### 3. How it works — make getting started feel manageable

Eyebrow: **HOW IT WORKS**

Headline: **From your closet to your next outfit.**

Intro: **Start with the pieces you own. Then explore what you can do with them.**

| Step | Heading | Body | Product visual |
| --- | --- | --- | --- |
| 01 | Bring your wardrobe together. | Add your clothes to your digital closet so you can see and organise your pieces in one place. | Add item + Closet |
| 02 | Find a combination you love. | Explore outfit ideas with your AI stylist, or put together your own in Style Studio. Save the looks you want to wear again. | Today + Style Studio |
| 03 | Make it part of your day. | Plan looks for upcoming occasions and organise outfits and packing for your next trip. | Calendar + Trips |

Show three short steps. Avoid claiming a specific setup time, automatic imports, or background-removal behaviour unless confirmed for release.

### 4. Main benefits — show the product doing useful work

Section headline: **Less outfit indecision. More you.**

Use three generous image-and-copy sections rather than a dense list of every screen.

**A wardrobe you can actually see.**

**Keep your pieces together in a digital closet. Browse what you own and rediscover the items you want to wear more.**

Visual: Closet, including its category controls and garment thumbnails.

**A little guidance. A look that feels like you.**

**Ask your AI stylist for outfit ideas around your wardrobe, taste, and occasion. Explore combinations, make your own adjustments, and save your favourites.**

Visual: Today and the stylist conversation. Refer to “your AI stylist” in public copy for now; the current UI uses Livia while older guidance uses Muse. Confirm the public name before screenshots and copy are finalised.

**Good outfits, planned ahead.**

**Keep looks ready for the occasions on your calendar. Heading away? Bring your outfit plans and packing list together before you go.**

Visual: Calendar and a real Trips packing screen.

Mid-page action: **Get the app** → `#get-the-app`

### 5. More to explore — supporting features

Headline: **Room to explore your style.**

These features exist as prototype flows. Include each card only if it ships in the launch version.

| Feature | Draft copy | Source route |
| --- | --- | --- |
| Style Studio | Build an outfit your way. Combine pieces on a canvas and save the looks you love. | F-01 |
| Style Twin | Explore a virtual preview of your look with your Style Twin. | H-01 / H-10 |
| Wishlist & Before You Buy | Keep pieces you’re considering in one place and explore how they could work with your wardrobe. | G-08 / G-09 |

Use two or three compact cards with actual interface details. Style Twin is secondary to the core wardrobe story. Do not describe its preview as a sizing, fit, or exact-appearance guarantee. Discover can be added later if its launch content and service are confirmed.

### 6. Product demonstration — evidence through screens

Eyebrow: **SEE STYLEIQ IN ACTION**

Headline: **One wardrobe. A new way to get dressed.**

Body: **Take a closer look at your closet, outfit ideas, and plans—all together in StyleIQ.**

Prepare a short product walkthrough: Closet → Today / stylist → Style Studio → Calendar / Trips. Show recognisable actions and outcomes, with captions. If no walkthrough is ready, use a static sequence of authentic app screenshots. Welcome fashion films support the atmosphere; a screen walkthrough explains the product.

### 7. FAQ — answer practical questions

**What is StyleIQ?**

StyleIQ is a wardrobe and styling app that helps you organise your clothes, explore outfit ideas, and plan what to wear, with guidance from an AI stylist.

**Do I need to buy new clothes to use it?**

Start with the clothes you already own. Add pieces to your digital closet and explore new ways to put them together.

**Can I create my own outfits?**

Yes. Use Style Studio to combine pieces and save your favourite looks.

**Can I plan outfits for occasions and trips?**

Use the calendar to organise upcoming looks and Trips to bring outfit planning and packing together.

The last two answers depend on the released feature set. Add pricing, supported devices, privacy, account requirements, and upload-method answers only after those facts are supplied. Do not infer “free,” iOS/Android availability, or data policies from the prototype.

### 8. Get the app — mandatory CTA section

Anchor: `get-the-app`

Visible section label: **GET THE APP**

Brand element: the existing **StyleIQ** wordmark.

Eyebrow: **MEET YOUR WARDROBE AGAIN**

Headline: **Your next favourite outfit could already be in your closet.**

Body: **Bring it together with StyleIQ. Discover outfit ideas, plan your looks, and make more of the pieces you own.**

Primary action label: **Get the app**

When verified, show official platform badges linking directly to the StyleIQ App Store and Google Play listings. Desktop QR caption: **Scan to get StyleIQ on your phone.**

Visual: Today screen layered over a warm fashion-photo composition using the selected women’s and men’s images. Use an espresso section background, ivory headline, subtle gold detail, and a light action surface so this section feels like the clear destination of the page. On mobile, stack the copy, store choices, and screenshot; the QR is a desktop aid.

The visible headline and body above are the actual copy for this section. Add only verified availability text. Do not insert “free,” “available now,” or a fictitious store badge into the content. Until real links exist, the implementation preview should label the destination as pending rather than send people to another product.

### 9. Footer

**StyleIQ**

**Your wardrobe, thoughtfully styled.**

Links: **How it works · FAQs · Contact · Privacy · Terms**

Add only real support, legal, and social destinations. Keep the footer concise.

## Design application

Follow [DESIGN.md](./DESIGN.md) for exact tokens and mobile identity:

- Warm ivory backgrounds, espresso text and primary buttons, restrained gold accents.
- Playfair Display for editorial headlines; Inter for paragraphs, navigation, and controls.
- Fashion photography, garment cutouts, and authentic app screens as the main visual material.
- Rounded feature surfaces, generous whitespace, subtle borders, and selective glass details drawn from the app.
- Adapt the layout to desktop and mobile while preserving the identity inside the phone screens. Exclude prototype sidebars, route controls, notes, and simulator framing from captures.
- Represent both women’s and men’s styling using the existing relevant assets.

## Our logo, images, and interface elements

### Logo treatment

The active app’s `brandLockup()` renders the text **StyleIQ** in `.brand-lockup-name`; use this same wordmark and exact capitalisation. The design reference is the wordmark inside the mobile welcome screens, with its Playfair Display treatment, rather than the prototype’s sidebar label. Use espresso on light surfaces and ivory/white over dark media. No separate approved logo artwork was identified in the inspected active brand markup and image-directory candidates; do not create a new symbol for this landing page.

Source: [brandLockup in app.js](/Users/aboelkheirmohamed/code/StyleIQ/app.js:2722). Scale the existing wordmark for navigation, the download section, and footer, preserving its letterforms and proportions.

### Selected local assets

These source files were checked to exist. The three main editorial photos below were also viewed to confirm their subject and suitability. They are source references, not yet copied or optimised into the web project.

| Asset | Source file | Landing-page use | Alt text / treatment |
| --- | --- | --- | --- |
| Women’s editorial photo | [look-soft-tailoring-cairo.png](/Users/aboelkheirmohamed/code/StyleIQ/images/look-soft-tailoring-cairo.png) | Hero poster; Get the app composition | Woman wearing a camel blazer and cream trousers. Use cover cropping; retain face and outfit. |
| Men’s editorial photo | [look-menswear-studio-cairo.png](/Users/aboelkheirmohamed/code/StyleIQ/images/look-menswear-studio-cairo.png) | Companion fashion image; Get the app composition | Man wearing a navy blazer in a clothing studio. Keep the outfit recognisable. |
| Travel photo | [trip-packing-cairo.png](/Users/aboelkheirmohamed/code/StyleIQ/images/trip-packing-cairo.png) | Calendar / Trips benefit | Two people packing clothes into a suitcase. Pair with the real Trips interface. |
| Silk shell cutout | [item_silk_shell.png](/Users/aboelkheirmohamed/code/StyleIQ/images/item_silk_shell.png) | About story and Studio details | Contain the whole garment. Decorative copies use empty alt text. |
| Blazer cutout | [item_blazer.png](/Users/aboelkheirmohamed/code/StyleIQ/images/item_blazer.png) | About story and Studio details | Contain the whole garment. Decorative copies use empty alt text. |
| Women’s welcome film | [new-woman.mp4](</Users/aboelkheirmohamed/code/StyleIQ/app videos/new-woman.mp4>) | Optional hero background | Silent inline video with pause control and photo fallback. |
| Men’s welcome film | [new-mens.mp4](</Users/aboelkheirmohamed/code/StyleIQ/app videos/new-mens.mp4>) | Alternate hero film | Same treatment; do not delay text or actions for playback. |

Fashion imagery establishes the atmosphere. Actual app screenshots explain the functionality. Do not use an editorial photo as if it were proof of an AI-generated result.

### Screens to capture during implementation

| Screen | Route | Required detail | Section |
| --- | --- | --- | --- |
| Today | `D-02` | Outfit image and stylist guidance | Hero, AI benefit, Get the app |
| Closet | `C-01` | Category controls and garment grid | About, How it works, wardrobe benefit |
| Add item | `B-01` | Entry into adding a wardrobe piece | How it works, app tour |
| Style Studio | `F-01` | Canvas and garment arrangement | How it works, supporting features, app tour |
| AI stylist | `M-01` | Real current conversation UI | Styling benefit |
| Calendar | `I-01` | Visible dates and planned looks | Planning benefit |
| Trips packing | `J-08` | A populated packing checklist | Planning benefit, app tour |
| Style Twin result | `H-10` | Current preview screen | Supporting feature, if shipped |
| Wishlist | `G-08` | Saved pieces | Supporting feature, if shipped |

These are a capture list, not exported screenshots. Capture only the app’s visible mobile content. Exclude the surrounding simulator, sidebar, debug notes, route controls, and desktop prototype UI. Use useful populated states without personal account information.

### StyleIQ elements to carry into the page

Use the exact palette in DESIGN.md: ivory `#f8f6f3`, espresso `#1b1716`, muted text `#6f675f`, gold `#c89b45`, white surfaces, and subtle borders `#ece7e1`. Headlines use Playfair Display; copy and controls use Inter.

Reuse the visual language of rounded feature cards, pill labels, garment tiles, thin-line icons, and the app’s warm glass details. Icon artwork should come from the active app’s icon system where appropriate. Keep web navigation sized for the web; use mobile bottom navigation only inside authentic screenshots. Movement follows MOTION.md.

### New reference and motion

The newer [Whering site](https://www.whering.co/) was also reviewed. [MOTION.md](./MOTION.md) records the observed visual treatment and the proposed StyleIQ storyboard. Add a short optional wardrobe story after the hero, then continue into the existing How it works and benefit sections. Use movement to connect garment pieces to the real app screens, with the download action always accessible.

## Download behaviour and launch facts

Download is the single primary conversion. Repeat it in navigation, hero, after the main benefits, and at the end.

Desktop: show verified store choices and a QR code to a real download destination. Mobile: keep a direct store link easy to reach; if both platforms are available, prefer the relevant one while leaving the alternative accessible. Secondary “See how it works” stays on the page.

Facts required before publication:

| Fact | Current status | Publication handling |
| --- | --- | --- |
| App Store / Google Play URLs | Not supplied | No guessed links or working-looking placeholder badges. Show only confirmed platforms. |
| Release availability | Not verified | Use download copy when live. If prelaunch, use “Coming soon”; use “Join the waitlist” only with a working signup destination. |
| Launch feature set | Prototype evidence only | Validate the claims above against the mobile release; remove deferred features and related FAQ answers. |
| Pricing | Not supplied | Omit “free,” subscription prices, and pricing comparisons. |
| AI stylist name | Current UI: Livia; older docs: Muse | Use generic AI-stylist wording until the name is confirmed. |
| Testimonials / ratings / press | Not supplied | Use app demonstrations; add genuine customer proof later. |
| Support / Privacy / Terms | Destinations not supplied | Supply actual destinations before making public links. |

## SEO draft

Title: **StyleIQ — Digital Wardrobe & AI Styling App**

Description: **Organise your wardrobe, discover outfit ideas with your AI stylist, and plan looks for everyday occasions and trips with StyleIQ.**

Use one H1: the hero headline. Social preview should combine the StyleIQ wordmark, the core promise, and an authentic app screen. Final metadata must match the launched capabilities.

## Scope of this delivery

This file supplies the content direction, section order, original copy, screen mapping, and conversion behaviour for the landing page. Website implementation and publication are subsequent work.
