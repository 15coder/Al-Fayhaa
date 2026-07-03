---
name: Custom font from sytra.site API
description: How to fetch and self-host a custom Arabic font when a user provides a sytra.site font search URL (e.g. https://sytra.site/fonts/api/v1?search=<name>).
---

The `sytra.site` fonts API returns JSON with a `data[].preview_url` field pointing directly to a downloadable `.ttf` file (e.g. `https://sytra.site/fonts/fonts/<name>.ttf`). No auth needed.

**How to apply:** Fetch the JSON, download the `.ttf` from `preview_url` into the artifact's `src/assets/fonts/` directory, then declare it with a local `@font-face` in the theme CSS and point `--app-font-sans` (or the relevant `--app-font-*` var) at it. Do not rely on a Google Fonts import — these are exclusive/custom fonts not available there.
