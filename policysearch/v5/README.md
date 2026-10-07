# Sama v5 — A whole life at the table

One persistent Indian household dining table fills the desktop viewport. Scrolling pans and zooms across the same surface. Household objects remain in place while physical papers open into clear reading areas. Earlier versions are untouched.

## Run

```sh
npm run dev -- --host 127.0.0.1
```

Preview: http://127.0.0.1:3004/

```sh
npm run build
```

## Interaction

- A 1600 × 1000 tabletop is translated and scaled from native page scroll. Each stop is 75% of a viewport tall, with a short 15% reading hold.
- The hero shows the whole table. Focused desktop documents occupy more than 60% of the viewport width while keeping their text and actions on screen.
- Personal cover is a hinged two-page booklet. Motor cover opens as a document sleeve. A ruled insert reveals business cover beside the ledger. The travel itinerary unfolds beside the passport. The cloth Sama folder opens to About, then turns to client scenarios and policy support.
- The support paper grows when an FAQ opens. A ResizeObserver adjusts camera framing; there is no inner document scrollbar.
- Real telephone, email and motor quote links are provided. One FAQ answer opens at a time.
- The motion control and system reduced-motion preference provide a normal reading layout with functional section anchors.

## Content and branding

The original logo was copied unchanged from v1. Navy and gold branding and Fraunces/Manrope typography are retained. Company background and contact information were adapted from [PolicySearch](https://policysearch.in/) and [About Sama](https://policysearch.in/about-us/). The scenarios are explicitly illustrative; they are not represented as customer testimonials.

## Artwork

Built-in ImageGen produced the original table, clean centre plate, transparent cloth folder cover, and a more spacious table composition used by the site. Exact prompts, modes and asset paths are in `ASSET-PROMPTS.json`.

- `public/table/table-spacious.webp`: active full-width table scene.
- `public/table/folder-cover.webp`: transparent textured folder cover with the original logo layered in HTML.
- `public/table/table-original.webp` and `table-clean.webp`: retained earlier composition assets.

WebP encoding preserves generated dimensions and alpha. Readable paper, folds, ruling and actions are HTML/CSS.

Dependencies use the existing `../v1/node_modules` symlink. Install dependencies normally if using this folder independently.
