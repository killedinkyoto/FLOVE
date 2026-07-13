# CLAUDE.md — Flove Frontend Rules

## Always Do First
- **Invoke the `engineering-skills:senior-frontend` skill** before writing any frontend code, every session, no exceptions.
- **Read `docs/` folder** before writing any copy — all research, avatar data, and copy-mining phrasing lives there.

## Brand & Product Context
- **Product:** Flove Daily Performance Synbiotic — 40B CFU, 4-strain + FOS prebiotics, MAKTREK® Bi-Pass Technology (consumer-facing name: PhaseLock™ — MAKTREK® should not appear on customer-facing pages)
- **Avatar:** 18–30, fitness-disciplined female — macro-tracker, dedicated gym-goer, 2–3 whey shakes/day, pre-workout daily
- **Big Idea:** "Imposter Bloat" — the "clean" fitness supplements she trusts (sweeteners, sugar alcohols, whey lactose) are secretly wrecking her gut. Unshielded probiotics die in stomach acid. PhaseLock™ delivers far more live bacteria past the gastric acid barrier.
- **Tone:** Clinical, direct-response, data-driven. NOT vague wellness language. This is for a disciplined, skeptical fitness consumer who rejects placebo claims.
- **Design direction:** Warm cream background (`#F8F4EE`), lavender purple accent (`#8B72CC`), dark CTA button (`#1C1828`), Playfair Display serif headings + Inter body. Editorial, warm, refined. Inspired by Nuriva. NOT dark, NOT mint-green, NOT Space Grotesk.

## Reference Files
- `docs/avatar-18-30.md` — full psychographic profile, pain points, emotional journey, verbatim quotes
- `docs/beliefs-18-30.md` — the 6 sequential core beliefs she must hold before purchasing
- `docs/offer-brief-18-30.md` — big idea, metaphors, funnel architecture, objections + counters
- `docs/research-fitness-dysbiosis.md` — physiology research, survival stats, strain mechanisms, competitor failure table
- `docs/ingredients.md` — full ingredient list, strain mechanisms, certifications

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
- Use verbatim phrasing from `docs/research-fitness-dysbiosis.md` and `docs/avatar-18-30.md` — "imposter bloat," "food baby," "look pregnant," "protein bloat," "abs are invisible"
- Frame symptoms as hidden fitness-supplement chemistry (sweeteners, sugar alcohols, whey lactose) — remove guilt, blame the supplement industry, not her discipline
- Always include the PhaseLock™ mechanism explanation when describing the product (never MAKTREK® on customer-facing pages)
- Address objections inline (see `docs/offer-brief-18-30.md`)
- No vague wellness language ("feel your best," "support gut health") — use clinical specificity

## Hard Rules
- Do not add sections, features, or content not in the reference docs
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not stop after one screenshot pass
- Do not use soft pastel colors — this brand is sharp and clinical
- Do not write generic wellness copy — she is disciplined and analytical, and rejects it
