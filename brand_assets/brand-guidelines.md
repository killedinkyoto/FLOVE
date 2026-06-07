# Flove Brand Guidelines

## Brand Positioning
**Product:** Flove Daily Performance Synbiotic  
**Category:** Clinical gut health supplement for corporate professionals  
**Big Idea:** "The Anatomy of Cubicle Gut" — the desk job is an evolutionary mismatch. Standard probiotics die in stomach acid. MAKTREK® delivers where others don't.

---

## Color System

### Primary Palette
| Token | Hex | Usage |
|---|---|---|
| `bg` | `#08090C` | Page background |
| `surface` | `#0F1318` | Card / section background |
| `border` | `#1A2030` | All borders and dividers |
| `text-primary` | `#F0F4F8` | Headings, strong copy |
| `text-secondary` | `#8A96A8` | Body copy, labels, captions |

### Accent Palette
| Token | Hex | Usage |
|---|---|---|
| `accent` | `#10B981` | Primary CTA, highlights, icons, dots |
| `accent-dim` | `#0D9668` | Hover state for accent elements |
| `amber` | `#F59E0B` | "POPULAR" / "SAVE" badges, secondary highlights |
| `red` | `#ef4444` | Danger data (low survival rate bars) |
| `trustpilot-green` | `#00B67A` | Review stars only (Trustpilot spec) |

### Gradient Patterns
- **Ambient hero glow:** `radial-gradient(ellipse 60% 50% at 50% -10%, rgba(16,185,129,0.12) 0%, transparent 70%)`
- **Final CTA glow:** `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(16,185,129,0.08) 0%, transparent 70%)`
- **CTA button shadow:** `box-shadow: 0 0 40px rgba(16,185,129,0.2)`
- **Surface gradient:** `linear-gradient(135deg, #0F1318 0%, #131820 100%)`

### Anti-Rules
- Never use default Tailwind blue (`blue-600`, `indigo-500`)
- Never use pastel, soft, or warm-toned backgrounds
- Never use white backgrounds — minimum surface is `#08090C`

---

## Typography

### Typefaces
| Role | Family | Weights | Letter-spacing |
|---|---|---|---|
| Display / Headings | Space Grotesk | 400, 500, 600, 700 | `-0.04em` (large), `-0.03em` (medium) |
| Body / UI | Inter | 400, 500, 600 | default |

### Scale
| Element | Size | Weight | Line-height |
|---|---|---|---|
| H1 hero | `text-4xl`–`text-5xl` | 700 | `1.1` |
| H2 section | `text-3xl`–`text-4xl` | 700 | `1.15` |
| H3 | `text-xl`–`text-2xl` | 700 | `1.2` |
| Body | `text-sm`–`text-base` | 400 | `1.7–1.8` |
| Labels / caps | `text-xs` | 500–600 | `0.08em` uppercase |

### Rules
- Headings always Space Grotesk with negative letter-spacing
- Body copy always Inter at 1.7 line-height minimum
- Never the same font for headings and body in the same block

---

## Logo
**Wordmark:** `FLOVE.` — Space Grotesk Bold, tracking-tighter  
**Period accent:** Colored `#10B981` (accent mint)  
**Usage:** Dark backgrounds only. Never place on light surfaces.  
**Placeholder:** Text-based wordmark until brand_assets/logo.svg is added

---

## Grain Texture
All pages use an SVG noise overlay at `opacity: 0.025`:
```css
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
background-size: 200px;
```

---

## Component Patterns

### CTA Button (Primary)
```css
background: #10B981;
color: #08090C;
font-family: Space Grotesk, bold;
border-radius: 12px;
box-shadow: 0 0 40px rgba(16,185,129,0.2);
transition: opacity 0.15s, transform 0.15s;
```
- Hover: `opacity: 0.9`
- Active: `transform: scale(0.98)`

### Spec Pill
```css
border: 1px solid #1A2030;
background: rgba(26,32,48,0.6);
padding: 5px 12px;
border-radius: 20px;
font-size: 11px; font-weight: 500;
color: #8A96A8;
```
Always includes a 6px mint dot `●` on the left.

### Cards (Surface)
```css
background: #0F1318;
border: 1px solid #1A2030;
border-radius: 16px; /* or 12px for tighter */
```
Hover: `border-color: rgba(16,185,129,0.2)` — never flat shadow-md.

### Data / Stat Numbers
- Font: Space Grotesk Bold
- Size: `text-3xl`–`text-5xl`
- Accent stats: `#10B981`
- Warning/negative stats: `#ef4444`
- Neutral: `#F0F4F8`

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
