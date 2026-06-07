# Flove Brand Guidelines

## Brand Positioning
**Product:** Flove Daily Performance Synbiotic  
**Category:** Clinical gut health supplement for corporate professionals  
**Big Idea:** "The Anatomy of Cubicle Gut" — the desk job is an evolutionary mismatch. Standard probiotics die in stomach acid. MAKTREK® delivers where others don't.

---

## Color System

### Primary Palette (v2.0 — Nuriva palette)
| Token | Hex | Usage |
|---|---|---|
| `bg` | `#F8F4EE` | Page background — warm cream |
| `surface` | `#FFFFFF` | Card / section background — white |
| `surface-2` | `#F2EBF8` | Light lavender tinted sections |
| `border` | `#EDE6F4` | All borders and dividers — lavender tint |
| `text-primary` | `#1A1526` | Headings, strong copy — deep navy |
| `text-secondary` | `#6B6480` | Body copy, labels, captions — muted purple-gray |

### Accent Palette
| Token | Hex | Usage |
|---|---|---|
| `accent` | `#8B72CC` | Primary accent — lavender purple |
| `accent-dim` | `#7A62B8` | Hover state for accent elements |
| `accent-light` | `#C4B5E8` | Card backgrounds, "POPULAR" badge, light fills |
| `cta-dark` | `#1C1828` | Primary CTA buttons — dark navy |
| `amber` | `#C4962A` | Secondary data highlights |
| `trustpilot-green` | `#00B67A` | Review stars only (Trustpilot spec) |

### Gradient Patterns
- **Ambient hero glow:** `radial-gradient(ellipse 60% 50% at 50% 30%, rgba(139,114,204,0.08) 0%, transparent 70%)`
- **Surface lavender:** `linear-gradient(135deg, #F2EBF8 0%, #EDE6F4 100%)`
- **Card shadow:** `box-shadow: 0 8px 24px rgba(139,114,204,0.1)`

### Anti-Rules
- Never use default Tailwind blue (`blue-600`, `indigo-500`)
- Never use dark backgrounds — minimum surface is `#F8F4EE` (warm cream)
- Never use the old mint `#10B981` — that was the previous brand
- Never use white on a dark background — this brand is light/editorial

---

## Typography

### Typefaces (v2.0)
| Role | Family | Weights | Letter-spacing |
|---|---|---|---|
| Display / Headings | Playfair Display | 400, 500, 600, 700 (+ italic) | `-0.02em` (large), `-0.01em` (medium) |
| Body / UI | Inter | 400, 500, 600 | default |

### Scale
| Element | Size | Weight | Line-height |
|---|---|---|---|
| H1 hero | `text-4xl`–`text-5xl` | 700 | `1.1` |
| H2 section | `text-3xl`–`text-4xl` | 700 | `1.15` |
| H3 | `text-xl`–`text-2xl` | 600 | `1.2` |
| Body | `text-sm`–`text-base` | 400 | `1.7–1.8` |
| Labels / caps | `text-xs` | 500–600 | `0.12em` uppercase |

### Rules
- Headings always Playfair Display with negative letter-spacing
- Body copy always Inter at 1.7 line-height minimum
- Never the same font for headings and body in the same block
- Italic variant of Playfair Display (`font-style: italic; color:#8B72CC`) is the signature editorial touch

---

## Logo
**Wordmark:** `flove.` — Playfair Display Bold, lowercase, letter-spacing -0.01em  
**Period accent:** Colored `#8B72CC` (lavender)  
**Usage:** Light backgrounds only (cream or white). Never on dark surfaces.  
**Placeholder:** Text-based wordmark until brand_assets/logo.svg is added

---

## Grain Texture
Not used in v2.0 — the warm cream background provides natural warmth without noise overlay.

---

## Component Patterns

### CTA Button (Primary — dark)
```css
background: #1C1828;
color: #FFFFFF;
font-family: Inter, bold;
border-radius: 100px;
transition: opacity 0.15s, transform 0.15s;
```
- Hover: `opacity: 0.85`
- Active: `transform: scale(0.98)`

### CTA Button (Accent — lavender)
```css
background: #8B72CC;
color: #FFFFFF;
border-radius: 100px;
transition: opacity 0.15s, transform 0.15s;
```

### Spec Pill
```css
border: 1px solid #EDE6F4;
background: rgba(139,114,204,0.07);
padding: 5px 12px;
border-radius: 20px;
font-size: 11px; font-weight: 500;
color: #8B72CC;
```
Always includes a 6px lavender dot `●` on the left.

### Cards (Surface)
```css
background: #FFFFFF;
border: 1px solid #EDE6F4;
border-radius: 16px; /* or 24px for rounder */
```
Hover: `border-color: rgba(139,114,204,0.3)` — never flat shadow-md.

### Data / Stat Numbers
- Font: Playfair Display Bold
- Size: `text-3xl`–`text-5xl`
- Accent stats: `#8B72CC`
- Warning/negative stats: `#D06060`
- Neutral: `#1A1526`
- Amber: `#C4962A`

---

## Motion & Animation
- Only animate `transform` and `opacity` — never `transition-all`
- Survival bars: `width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)` triggered by IntersectionObserver
- Accordions: `max-height 0.3s ease`
- Ticker: `animation: ticker-scroll 28s linear infinite`
- Interactive states: every clickable element needs `hover`, `focus-visible`, `active`

---

## Copy Voice

### Tone
- Clinical, direct-response, data-driven
- No vague wellness language ("feel your best", "support gut health")
- Removes personal guilt — blames the environment, not the person
- Uses specificity over superlatives: "0.003% survival" not "barely any"

### Required Verbatim Phrases (use in copy where relevant)
- "desk bloat"
- "embarrassing growling noises"
- "mid-afternoon cognitive fatigue"
- "clothing digging into the waist"
- "post-lunch brain fog"
- "audible stomach gurgling in a quiet office"
- "fishy burps during client meetings"
- "that 3 PM crash"
- "Cubicle Gut"
- "gastric mortality"
- "dead bacteria"
- "the acid furnace"

### Banned Language
- "feel your best"
- "support gut health"
- "wellness journey"
- "natural" as a standalone claim
- "innovative" / "streamline" / "optimize"
- Exclamation points

### Key Data Points (always verify against docs/ingredients.md)
- Survival rate: powder 0.003% / standard capsule 2.8% / MAKTREK® 50%+
- Delivery increase: 1,685%
- CFU: 40B on label, 20B+ at destination
- Strains: *L. acidophilus* La-14, *B. lactis* Bl-04, *L. plantarum* Lp-115, *L. paracasei* Lpc-37
- Prebiotic: FOS 200mg
- Refund: 30-day money-back, no return required
- Subscription: none — one-time purchase only

---

## Pricing (current)
| Option | Price | Per Day | Saving |
|---|---|---|---|
| 1-bottle (30-day) | $44.99 | $1.50 | — |
| 3-bottle (90-day) | $119.97 | $1.33 | $15.00 |
| 6-bottle (180-day) | $215.94 | $1.20 | $54.00 |

---

## Page Architecture
1. `index.html` — Product page (closer). Warm traffic from listicle.
2. `listicle.html` — Cold traffic entry point. Installs 5 belief chains before CTA.
3. Checkout — TBD

## Asset Checklist
- [ ] `brand_assets/logo.svg` — SVG wordmark
- [ ] `brand_assets/product.png` — Hero product shot
- [ ] `brand_assets/product-lifestyle.jpg` — Lifestyle/context image
- [ ] Testimonial video files (9:16) for ticker
