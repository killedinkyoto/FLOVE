# Flove Advertorial — Image Implementation Brief

Target file: `index.html` (served at `localhost:3000/advertorial`)
Source images: `/flove-lander-images/` (8 files, listed below)

Read this whole file before touching code — two of the eight images need a
fix (color palette / cropping) before they're implementation-ready, and
two are recommended to **hold** rather than insert into this specific page.
Don't force a placement just because an image exists.

---

## 0. Brand palette actually in use on this page

Pulled directly from the `tailwind.config` block in `index.html`. Any new
graphic-style asset (badges, numerals, diagrams, comparison labels) must
match this, not a generic brand guess:

| Token | Hex | Usage on page |
|---|---|---|
| `bg` | `#F8F4EE` | page background (warm cream) |
| `surface-2` | `#F2EBF8` | light lavender panel bg (final CTA section) |
| `accent` | `#8B72CC` | primary purple — links, bars, icons, pull-quote border |
| `accent-dim` | `#7A62B8` | gradient partner to `accent` |
| `amber` | `#C4962A` | used ONLY for the "30-day guarantee" stat — not a general accent |
| `text-primary` | `#1A1526` | near-black headings/body |
| `text-secondary` | `#6B6480` | muted gray body copy |
| `border` | `#EDE6F4` | card borders, hairlines |

**Action item:** `flove-death-zone-comparison.png`, `flove-offer-guarantee-stack.png`,
`flove-strain-diagram.png`, and `flove-us-vs-them.png` were generated with
navy `#1E2233` / gold `#BFA06A` — the wrong palette for this page. Before
shipping, regenerate those four with `#8B72CC` (primary), `#C4962A` (used
sparingly, guarantee-related only), `#F8F4EE` background, `#1A1526` text.
The three photographic assets (hero, saboteurs, flat-by-design) don't have
this problem — they're neutral-toned photography, not UI graphics.

---

## 1. Hero — Split before/after photo

**Current markup** (`index.html` ~line 304-316):
```html
<div class="split-photo" style="aspect-ratio: 16/10;">
  <figure>
    <img src="/brand_assets/afterquiz.webp" alt="Same woman, same gym outfit, 7 AM — flat stomach before her workday begins." loading="eager" fetchpriority="high">
    <figcaption>7 AM</figcaption>
  </figure>
  <figure>
    <img src="/brand_assets/beforequiz.webp" alt="Same woman, same gym outfit, 7 PM — visibly bloated stomach after a full day." loading="eager">
    <figcaption>7 PM</figcaption>
  </figure>
</div>
```
This is **two independent images** in a CSS grid (`.split-photo`), each
`object-fit: cover` at a combined `16/10` aspect ratio — so each half
renders at roughly a **4:5 portrait crop**, not the elongated sliver our
generated composite currently is.

**Source file:** `flove-hero-before-after.png` — a single merged image,
LEFT half = bloated/tired moment, RIGHT half = flat/confident moment.

**Required step before use:** slice this PNG into two separate files at
the vertical seam, then crop/pad each half to a ~4:5 ratio (the source
halves are narrower than that, so this will need either an upscale-and-crop
or a fresh regeneration per half at 4:5 if slicing looks stretched).

**File mapping** (note the reversal — page order is 7AM-flat-first, our
composite is bloated-first):
- Right half (flat/confident) → save as `afterquiz.webp`
- Left half (bloated/tired) → save as `beforequiz.webp`

**Action:** Replace both `/brand_assets/afterquiz.webp` and
`/brand_assets/beforequiz.webp` with the two cropped halves. Keep both
existing `alt` attributes as-is — they're accurate to the new images.
Keep `figcaption` text ("7 AM" / "7 PM") unchanged.

---

## 2. Mistake #1 section — "She's Blaming Her Body For Something Her Supplements Are Actually Doing"

**Source file:** `flove-three-saboteurs.png` (three labeled dishes:
sucralose, sugar alcohols, whey lactose)

This is a direct visual match to the copy in this section, which names
all three by name. There's currently no image here — this is a pure
**insert**, not a replacement.

**Anchor point:** insert immediately after this paragraph (~line 345):
```html
<p>She's not eating badly. She's eating exactly what the fitness industry told her to eat. These products are marketed as "clean." They're built to hit a macro number. Not to work with her gut.</p>
```
and before the `<div class="pull-quote">` that follows it.

**Suggested markup:**
```html
<figure class="my-8">
  <img src="/brand_assets/three-saboteurs.webp" alt="Three lab dishes showing sucralose, sugar alcohols, and whey lactose — the three additives behind fitness-supplement bloating." loading="lazy" style="width:100%; border-radius:16px; border:1px solid #EDE6F4;">
</figure>
```

---

## 3. Mechanism section — "So What Actually Gets Live Bacteria Past Stomach Acid?"

**Source file:** `flove-death-zone-comparison.png` (test tubes, 3% vs
95–96% survival) — **needs palette regeneration per Section 0 first.**

The page already has a bar-chart visualization of this exact stat
(`#listicle-bars`, ~line 363), so this image is a **supplementary visual**,
not a replacement for the bar chart — don't remove the existing bars.

**Anchor point:** insert after the submarine-metaphor paragraph (~line 402)
and before the `inline-cta accent` MAKTREK box that follows it, so the
reader sees the metaphor in text, then the visual proof, then the branded
callout box.

**Suggested markup:**
```html
<figure class="my-8">
  <img src="/brand_assets/death-zone-comparison.webp" alt="Side-by-side comparison: a standard probiotic dissolving in stomach acid versus a PhaseLock-protected capsule surviving intact." loading="lazy" style="width:100%; border-radius:16px;">
</figure>
```

---

## 4. Strain section — "The Strain That Solves the Whey Shake Problem"

**Source file:** `flove-strain-diagram.png` (4-strain vertical diagram) —
**needs palette regeneration per Section 0 first.**

The page already has detailed `.req-item` cards for all four strains
(~lines 416-453) with more specific copy than the diagram can hold. Do
**not** replace those cards — they carry information the diagram doesn't
(the mechanism per strain). Use the diagram as a compact visual summary
**above** the card list instead.

**Anchor point:** insert immediately before `<div style="margin: 1.75rem 0;">`
(~line 416), right after the intro paragraph about the four strains.

**Suggested markup:**
```html
<figure class="my-6">
  <img src="/brand_assets/strain-diagram.webp" alt="Diagram of Flove's four clinically studied probiotic strains and their individual functions." loading="lazy" style="width:100%; border-radius:16px;">
</figure>
```

---

## 5. Offer section — "Where to Get Flove (And How to Save 10%)"

**Source file:** `flove-offer-guarantee-stack.png` (bottle + 95–96% /
40B CFU / 30-day badges) — **needs palette regeneration per Section 0
first.**

This section currently has **no image at all** — just copy, the discount
`inline-cta`, and two CTA buttons. This is a clean insert, and the content
(survival rate, CFU, guarantee) matches the final spec-grid at the bottom
of the page almost exactly, so it also works as a visual preview of that.

**Anchor point:** insert right after the section heading (~line 510),
before the "I reached out to the Flove team..." paragraph.

**Suggested markup:**
```html
<figure class="my-6">
  <img src="/brand_assets/offer-guarantee-stack.webp" alt="Flove bottle with survival rate, CFU count, and guarantee callouts." loading="lazy" style="width:100%; max-width:420px; margin:0 auto; display:block; border-radius:16px;">
</figure>
```

---

## 6. Do NOT insert into this page (hold for other assets)

**`flove-press-mention.png`** (magazine flat-lay mockup of "Women's
Strength Weekly"): this page's masthead already establishes the
"Women's Strength Weekly" editorial framing in text at the very top. Showing
a printed magazine mockup of the same publication the reader is already
on risks reading as an "as seen in" claim about a real print magazine that
doesn't exist, and could undercut the advertorial's credibility rather
than build it. **Better use:** a social/paid ad driving traffic *to* this
advertorial (e.g. "Featured in Women's Strength Weekly" as a Meta ad
pattern-interrupt), not embedded inside the article itself.

**`flove-us-vs-them.png`** (generic bottle vs. Flove bottle): this
advertorial is written in first-person editorial voice throughout — it
never directly names or shows a competitor product, it works entirely
through the "two mistakes" framing. A direct product-vs-product graphic
breaks that voice and fits a harder-sell page better. **Better use:** the
`/relaunch` product/checkout page, or as standalone paid-ad creative —
not this article.

**`flove-flat-by-design-benefit.png`** (lifestyle shot, "FLAT BY DESIGN."
headline): doesn't have a natural anchor in the current article flow since
every section here is copy-driven with specific mechanism claims, not a
generic benefit statement. **Optional use:** could work as a supporting
image in the Final CTA section (~line 540, "Get Flove Now") since that
section is currently text + spec grid only — but treat this as optional,
lower priority than items 1-5.

---

## 7. Summary checklist for Claude Code

- [ ] Regenerate `death-zone-comparison`, `offer-guarantee-stack`,
      `strain-diagram`, and `us-vs-them` (if used later) in `#8B72CC` /
      `#C4962A` / `#F8F4EE` / `#1A1526`, not navy/gold.
- [ ] Slice `flove-hero-before-after.png` into two ~4:5 crops, save as
      `afterquiz.webp` (flat half) and `beforequiz.webp` (bloated half),
      replace existing files at those exact paths in `/brand_assets/`.
- [ ] Insert `three-saboteurs.webp` after the Mistake #1 closing paragraph.
- [ ] Insert `death-zone-comparison.webp` after the submarine metaphor,
      before the MAKTREK inline-cta box.
- [ ] Insert `strain-diagram.webp` above the four `.req-item` strain cards.
- [ ] Insert `offer-guarantee-stack.webp` at the top of the offer section.
- [ ] Convert all new images to `.webp` to match the existing asset
      convention on this page (every current image is `.webp`).
- [ ] Hold `press-mention` and `us-vs-them` for other assets, not this page.
- [ ] Confirm all new `<img>` tags include `loading="lazy"` (matches
      existing convention; hero images use `loading="eager"` instead —
      don't apply `eager` to anything below the fold).
