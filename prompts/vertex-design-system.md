# Implementation prompt: Vertex Design System foundation

## Goal

Establish the Vertex Design System as the shared visual foundation of the `web` app (currently the repo root — a fresh `create-next-app` with App Router, React 19, Tailwind v4, no Sanity/Clerk/PostHog wired up yet). This covers design tokens (color, type, spacing, radius, shadow) and the reusable primitive components shown in `design/vertex-designsystem.png`: icons, buttons, inputs, badges/tags, status indicators, progress bar, cards (course/lesson-video/lesson-lesson/resource), and navigation (top nav, breadcrumbs, pagination). It does not build any real page (catalog, course, lesson, etc.) — those come later and will consume these primitives.

## Skills / docs read

- AGENTS.md (this repo's root instructions) — section 3 (UI work: reproduce the reference exactly, responsive down to mobile) and section 6 (tech stack: Tailwind, TypeScript).
- No Sanity/Clerk/PostHog skill applies here — this is pure Tailwind/Next.js foundation work, not content modeling or integration.
- `node_modules/next/dist/docs/01-app/03-api-reference/02-components/font.md` — confirms `next/font/google` is the supported way to load custom fonts (Playfair Display, Inter) in this Next.js version.

## Code inspected

- `app/layout.tsx` — currently loads Geist/Geist Mono via `next/font/google` and sets CSS variables consumed in `globals.css`.
- `app/globals.css` — Tailwind v4 `@import "tailwindcss"` + `@theme inline` token mapping, light/dark via `prefers-color-scheme`.
- `package.json` — only `next`, `react`, `react-dom`, Tailwind v4, no component/icon libraries installed yet.
- No `components/` directory exists yet.

## Decisions / assumptions

- **Fonts**: load `Playfair Display` (display headings) and `Inter` (everything else) via `next/font/google` in `app/layout.tsx`, exposed as `--font-display` / `--font-sans` CSS variables, replacing Geist.
- **Tokens live in `app/globals.css`** under Tailwind v4's `@theme` block (not a `tailwind.config.ts`, matching the Tailwind v4 CSS-first convention already used in this repo): primary 100–500, neutral 50–900 + white, the 8-row type scale, the 4px-based spacing scale (4/8/12/16/24/32/40/48/64), radius (4/8/12/16/24/full), and the 4 shadow levels, each as CSS custom properties so both Tailwind utilities (`bg-primary-500`, `rounded-md`, `shadow-md`, etc.) and raw `var(--...)` usage work.
- **Icons**: install `lucide-react` (24×24 grid, 2px stroke, rounded caps — matches the spec's outline spec exactly). The spec's "filled style" row is achieved by passing `fill="currentColor"` on the same Lucide icons where a filled state is needed (e.g. active/selected nav or status icons), rather than pulling in a second icon package — avoids overbuilding.
- **Components** go under `components/ui/` as small, unstyled-API primitives (variant props via a `cva`-style helper written locally — no new dependency beyond `clsx`/`tailwind-merge` for class composition, which are the standard lightweight pair for this pattern):
  - `Button` — primary / secondary / tertiary / text, each with default/hover (CSS `:hover`, not JS)/disabled states, 44px height, icon slot for tertiary/text link-out arrow and text-button play icon.
  - `Input` — text/search variant (with leading search icon + trailing `⌘K` hint slot) and a `Select` variant, 44px height, 12px radius, focus border in Primary 400.
  - `Badge` — `video`, `lesson`, `popular` variants (color-coded per swatch).
  - `StatusIndicator` — in-progress / completed / now-playing / locked, icon + label.
  - `ProgressBar` — determinate bar with percentage label.
  - `Card` family — `CourseCard`, `LessonCard` (video and lesson sub-variants via a `kind` prop), `ResourceCard`, matching the four card mocks exactly (thumbnail/icon, badge, title, meta row, action).
  - `Breadcrumbs`, `Pagination`, and a top `NavBar` (logo + Courses/My Learning links) — presentational only, no routing logic wired to real pages yet since those pages don't exist.
- **Verification surface**: add a single internal route `app/style-guide/page.tsx` that renders every token swatch and component/variant/state from the spec on one page. This is scaffolding to visually diff against the reference image before real pages consume these primitives, not a product page — it will be easy to delete once real pages exist, but I'll leave it in place until told otherwise since it's a cheap regression aid for later design-system changes.
- Everything is built responsive-down-to-mobile per section 3, even though the reference is a single desktop sheet (it's a token/component sheet, not a page layout, so "responsive" here mainly means the style-guide page's own grid reflows sensibly).
- No dark mode decision is made beyond what's already in `globals.css` (light/dark via `prefers-color-scheme`) — the spec shows only a light palette, so components use the light tokens directly rather than inventing a dark palette. I'll flag this in the report.

## Files expected to touch

- `app/globals.css` — token definitions.
- `app/layout.tsx` — font loading swap.
- `package.json` — add `lucide-react`, `clsx`, `tailwind-merge`.
- `lib/cn.ts` — small `clsx` + `tailwind-merge` class-merge helper (standard utility, used by every component).
- `components/ui/Button.tsx`, `Input.tsx`, `Select.tsx`, `Badge.tsx`, `StatusIndicator.tsx`, `ProgressBar.tsx`, `Card.tsx` (Course/Lesson/Resource), `Breadcrumbs.tsx`, `Pagination.tsx`, `NavBar.tsx`.
- `app/style-guide/page.tsx` — verification page.

## Requirements

- Colors, the 8-row type scale, spacing, radius, and shadow values match the swatch hex codes / px values in the image exactly.
- Button spec: 44px height, 16px/12px padding (lg/md), 12px radius, Inter Medium 14–16px; default/hover/disabled states for all 4 variants.
- Input spec: 44px height, 12px radius, 1px `#E2E8F0` border, 16px horizontal padding, focus border `#FB923C`.
- Icons: 24×24 grid, 2px outline stroke, rounded line caps.
- Cards reproduce the 4 mocks' content structure (badge placement, title, meta row, CTA) exactly.

## Security considerations

None — this is presentational, client-rendered, no data fetching, no secrets, no auth surface touched.

## Acceptance criteria

- `app/style-guide` renders all 14 sections of the reference image with matching colors/type/spacing/radius/shadows/icons/buttons/inputs/badges/status/progress/cards/nav at desktop width, and reflows without horizontal scroll or overlap at mobile width (375px).
- All button/input states (hover, disabled, focus) are reachable and visually correct.
- No hardcoded hex/px values duplicated outside the token layer in `globals.css` — components reference Tailwind utilities backed by the tokens.

## Checks to run

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `npm run dev` and manually verify in browser (see test steps)

## Manual test steps

1. Run `npm run dev`, open `http://localhost:3000/style-guide`.
2. Compare each of the 14 numbered sections side-by-side with `design/vertex-designsystem.png`: colors, typography, type scale, spacing, radius/shadows, icons, buttons (all 4 variants × default/hover/disabled), inputs (search + select), badges, status indicators, progress bar, the 4 cards, nav/breadcrumbs/pagination.
3. Resize the browser to ~375px width and confirm every section reflows without clipping or horizontal scroll.
4. Tab through buttons/inputs to confirm focus states are visible and disabled buttons are not focusable/clickable.
