# StyleIQ · WR Gold adaptation

The homepage opens with a direct explanation of StyleIQ: add your clothes, create outfits and plan when to wear them. An interactive preview uses three authentic app screens, followed by a short “How it works” section. The remaining WR sticky scenes, card stack, See/Wear/Build tabs and carousel use StyleIQ colours, typography, copy and imagery.

The “StyleIQ helps you see what you own” orbit keeps its original trajectory with transform-based positioning and time-based scroll interpolation. The fashion-film hero is replaced by the product introduction. The dark wardrobe scene uses curated photographs, interpolated parallax and overlapping text fades. Other scene choreography is preserved.

The app tour uses authentic StyleIQ screenshots instead of the Whering product recordings. The former testimonial carousel contains product walkthrough cards; no borrowed customer quotes, press endorsements or ratings are presented as StyleIQ proof.

Download points to the closing section, which shows “Download links coming soon” until official destinations are supplied. All navigation uses same-document anchors, including when opening index.html from disk. The active entry point renders only the homepage. Legacy Whering article, about and legal source modules remain archived in the project and are outside this homepage adaptation; they are not linked from its navigation.

## Run

```sh
npm run dev
```

Development: http://127.0.0.1:5173/app.html

```sh
npm run build
```

Open `index.html` with the adjacent `public` folder, or open `dist/index.html` with the complete `dist` folder. Assets and fonts are bundled locally.

## Verified

Production build; desktop 1440 × 900 and mobile 390 × 844; no broken homepage images, horizontal overflow or browser errors; navigation, app-tour controls and download anchor; orbit interpolation.
