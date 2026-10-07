# Sama v2 — The Unfinished Policy

A standalone redesign of Sama Insurance Brokers, structured as a policy document being rewritten around real life. Includes interactive coverage notes, inline questions, mobile navigation, and the existing motor quote and contact destinations.

## Run

```sh
npm install
npm run dev
```

Preview: http://localhost:3001

```sh
npm run build
```

The current workspace reuses `../v1/node_modules` through a symlink. For a separate checkout, omit that symlink and run `npm install` normally.

Typography uses Google Fonts (DM Sans and Caveat), with system fallbacks. Existing contact details and insurance categories are retained; copy and composition are new.
