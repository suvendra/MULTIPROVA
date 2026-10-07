# Sama v4 — For the life you live

Full-width scroll storytelling with Sama's original logo, navy/gold branding and Fraunces/Manrope typography. Generated Indian household, shopfront, advice, travel and evening scenes share a persistent animated bag.

## Preview

```sh
npm run dev -- --host 127.0.0.1
```

http://127.0.0.1:3003

```sh
npm run build
```

## Content

Company background, founder, combined team experience, service principles and contact context adapted from https://policysearch.in/ and https://policysearch.in/about-us/.

The client-stories section contains complete illustrative scenarios, explicitly identified as examples. It contains no invented customer endorsements, names or review statistics.

## Assets

Built-in ImageGen created five scene backgrounds and one transparent bag cutout. Final project assets are in `public/scenes`. The exact generation prompt set is in `ASSET-PROMPTS.json`. WebP encoding preserves the generated background dimensions; the bag retains its alpha channel.

Original brand asset: `public/sama-logo.png`, copied unchanged from v1.

## Accessibility and interaction

Native scrolling, chapter anchors in the header, coverage disclosures, FAQs, telephone/email/quote destinations, mobile navigation, reduced-motion preference and an animation toggle in the footer. No slider or bottom timeline.

This workspace reuses `../v1/node_modules` through a symlink. For a standalone checkout, omit the symlink and run `npm install`.
