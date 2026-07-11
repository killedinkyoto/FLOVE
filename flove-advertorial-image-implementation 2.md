# Flove Advertorial — Image Naming & Placement

Target file: `index.html` (served at `localhost:3000/advertorial`)

## Rename table

| Current filename | What it is | Rename to |
|---|---|---|
| `hf_20260705_140713_71d2725b-cc87-490a-b4ec-5cb174390fa4.png` | Mirror selfie, split before/after (bloated left, flat right) | Split into two files: `afterquiz.webp` (flat/right half) and `beforequiz.webp` (bloated/left half) |
| `hf_20260705_135418_ecab70e2-1cca-4651-a137-d229d7caf719.png` | Magazine flat-lay, "Women's Strength Weekly / Executive Performance" | `press-mention.webp` |
| `hf_20260705_135426_beee570b-68d5-41ba-b8da-c31346c984f3.png` | Three labeled dishes: sucralose, sugar alcohols, whey lactose | `three-saboteurs.webp` |
| `hf_20260705_135540_7cddaf0b-e933-4787-b7d6-03ee82085d49.png` | Generic probiotic bottle vs. Flove bottle | `us-vs-them.webp` |
| `hf_20260705_135351_2dae0d78-31f7-4df4-9ca9-02dada73a18b.png` | Two test tubes, 3% vs 95–96% survival | `death-zone-comparison.webp` |
| `hf_20260705_135434_a6a0ccc3-53e9-4cee-8b41-bbbc18ced996.png` | Four-strain vertical diagram (La-14, Bl-04, Lp-115, Lpc-37) | `strain-diagram.webp` |
| `hf_20260705_135409_7d852831-af3c-41d8-b9b1-31569985b37a.png` | Bottle + 95–96% / 40B CFU / 30-day badges | `offer-guarantee-stack.webp` |
| `hf_20260705_135359_9da57950-ce45-49d3-966c-c445b6c47f9c.png` | "FLAT BY DESIGN." lifestyle shot | `flat-by-design-benefit.webp` |

All destination files go in `/brand_assets/` alongside the existing images
on the page, converted to `.webp` to match the existing convention.

## Placement on the page

- `afterquiz.webp` / `beforequiz.webp` — hero split-photo at the top of
  the article, replacing the two files currently at those exact filenames.
- `press-mention.webp` — article header, right after the byline
  ("By Sarah Doyle, Certified Sports Nutritionist").
- `three-saboteurs.webp` — Mistake #1 section, "She's Blaming Her Body
  For Something Her Supplements Are Actually Doing."
- `us-vs-them.webp` — Mistake #2 section, "The Probiotic She Already
  Tried Never Actually Reached Her Gut."
- `death-zone-comparison.webp` — mechanism section, "So What Actually
  Gets Live Bacteria Past Stomach Acid?"
- `strain-diagram.webp` — strain section, "The Strain That Solves the
  Whey Shake Problem."
- `offer-guarantee-stack.webp` — offer section, "Where to Get Flove
  (And How to Save 10%)."
- `flat-by-design-benefit.webp` — final CTA section, "Get Flove Now."

## Two things to fix before/during placement

1. **Off-palette graphics.** `death-zone-comparison`, `us-vs-them`,
   `strain-diagram`, and `offer-guarantee-stack` are rendered in navy
   `#1E2233` / gold `#BFA06A`. The page's actual palette is purple
   `#8B72CC` (primary accent), amber `#C4962A` (guarantee only), cream
   `#F8F4EE` background, near-black `#1A1526` text. Regenerate these four
   in the correct palette before placing.

2. **Wrong label copy on the bottle.** `offer-guarantee-stack`,
   `press-mention`, and `us-vs-them` all show the bottle labeled
   "flove — EXECUTIVE PERFORMANCE" and "MAKTREK® Bi-Pass Technology."
   The advertorial's copy uses "PhaseLock™" throughout and targets the
   fitness-bloating avatar, not an executive-performance angle. These
   three need the label swapped or blurred before going live, or the
   on-page copy and the product image will contradict each other.
