---
name: Extracting an icon-only logo mark from a full logo
description: How to derive a small transparent "logo mark" asset from an existing full/vertical logo image, for use in favicons, watermarks, and other icon-type spots without touching the original full logo.
---

When a user has one full logo image (e.g. a vertical lockup with icon + wordmark) and wants a standalone icon-only mark for small/decorative spots (favicon, watermark accents, mini badges) while explicitly keeping the original full logo unchanged wherever it's already used as a hero/brand image:

1. Crop the icon-only region out of the full logo with ImageMagick (`convert logo.png -crop WxH+X+Y cropped.png`), estimating the icon's bounding box visually first.
2. Run the crop through the `remove_image_background_tool` to strip any background and get a clean transparent PNG.
3. Use this transparent mark for: favicon, small watermark/decorative accents in secondary sections (e.g. low-opacity rotating background image in a CTA section), NOT as a replacement for the original full logo image in the hero.

**Why:** Users distinguish between "the brand mark" (icon) and "the full logo" (icon + wordmark) and often want the mark reused for polish in small UI spots while preserving the full logo exactly where it already appears (e.g. hero section) — swapping it there would look like a regression to them.

**How to apply:** Any time a redesign/polish task says "use the logo mark in small/icon spots but don't touch the hero's full logo."
