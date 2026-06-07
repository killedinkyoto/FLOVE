# CLAUDE.md — Flove Frontend Rules

## Always Do First
- **Invoke the `engineering-skills:senior-frontend` skill** before writing any frontend code, every session, no exceptions.
- **Read `docs/` folder** before writing any copy — all research, avatar data, and copy-mining phrasing lives there.

## Brand & Product Context
- **Product:** Flove Daily Performance Synbiotic — 40B CFU, 4-strain + FOS prebiotics, MAKTREK® Bi-Pass Technology
- **Avatar:** "Tina" — corporate female, 25–45, management consultant / attorney / analyst / software architect
- **Big Idea:** "The Anatomy of Cubicle Gut" — sedentary desk job is an evolutionary mismatch. Unshielded probiotics die in stomach acid (0.003% survival). MAKTREK® delivers 1,685% more live bacteria.
- **Tone:** Clinical, direct-response, data-driven. NOT wellness-generic. This is for an analytical professional who rejects vague claims.
- **Design direction:** Warm cream background (`#F8F4EE`), lavender purple accent (`#8B72CC`), dark CTA button (`#1C1828`), Playfair Display serif headings + Inter body. Editorial, warm, refined. Inspired by Nuriva. NOT dark, NOT mint-green, NOT Space Grotesk.

## Reference Files
- `docs/tina-avatar.md` — full psychographic profile, pain points, emotional journey, verbatim quotes
- `docs/copy-bank.md` — campaign hooks, headlines, visceral copy-mining phrasing
- `docs/offer-brief.md` — big idea, metaphors, funnel architecture, objections + counters
- `docs/ingredients.md` — full ingredient list, strain mechanisms, certifications
- `docs/competitor-audit.md` — competitor failures, 5-star vs 1-star reality, copy angles

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start dev server: `node serve.mjs` (serves project root at `http://localhost:3000`)
- `serve.mjs` lives in project root. Start in background before taking screenshots.
- If server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/hasan/AppData/Local/Temp/puppeteer-test/`
- Chrome cache is at `C:/Users/hasan/.cache/puppeteer/`
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots auto-saved to `./temporary screenshots/screenshot-N.png` (never overwritten)
- Optional label: `node screenshot.mjs http://localhost:3000 label` → `screenshot-N-label.png`
- After screenshotting, read the PNG with the Read tool and analyze directly.
- Do at least 2 comparison rounds. Stop only when no visible differences remain.

## Output Defaults
- Single `index.html` file, all styles inline, unless stated otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check `brand_assets/` folder before designing.
- If a logo, color guide, or image exists there — use it. Do not use placeholders where real assets exist.
- If no brand assets yet, apply the design direction below.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Brand palette: bg `#F8F4EE`, surface `#FFFFFF`, border `#EDE6F4`, accent `#8B72CC`, cta `#1C1828`.
- **Shadows:** Never flat `shadow-md`. Use lavender-tinted shadows with low opacity: `rgba(139,114,204,0.1)`.
- **Typography:** Playfair Display for all headings (`letter-spacing: -0.02em`). Inter for body (`line-height: 1.7`). Never same font for both.
- **Gradients:** Soft lavender radial glows. No grain/noise overlay — the cream background provides warmth naturally.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Images:** Light gradient overlays on cream. No dark overlays.
- **Spacing:** Intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces have a layering system: cream bg → white cards → floating elements.

## Copy Rules
- Use verbatim phrasing from `docs/copy-bank.md` — "desk bloat," "embarrassing growling noises," "mid-afternoon cognitive fatigue," "clothing digging into the waist"
- Frame symptoms as evolutionary mismatch — remove guilt, blame the corporate environment
- Always include the MAKTREK® mechanism explanation when describing the product
- Address objections inline (see `docs/offer-brief.md`)
- No vague wellness language ("feel your best," "support gut health") — use clinical specificity

## Hard Rules
- Do not add sections, features, or content not in the reference docs
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not stop after one screenshot pass
- Do not use soft pastel colors — this brand is sharp and clinical
- Do not write generic wellness copy — Tina is analytical and rejects it
