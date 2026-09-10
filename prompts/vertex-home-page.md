# Implementation prompt: Vertex home page

## Goal

Build the marketing/landing home page (`app/page.tsx`) shown in `design/vertex-home.png`: top nav with bell + avatar, hero (eyebrow badge, two-line serif headline, subtext, primary CTA, search bar), an "All Courses" section with 3 course cards, a divider callout line, and a decorative gradient bar-chart footer graphic. This replaces the current `create-next-app` placeholder content in `app/page.tsx`. No other route is built.

## Skills / docs read

- AGENTS.md section 3 (UI work: reproduce the reference exactly, responsive down to mobile, reuse existing components/Tailwind patterns before adding new ones) and section 7 (catalog/course pages are read-only; nothing here is a backend feature).
- No Sanity/Clerk/PostHog skill applies — this is presentational only, no data fetching, no auth wiring yet (Clerk isn't installed in this repo yet).

## Code inspected

- `design/vertex-home.png` (target) and `design/vertex-designsystem.png` (token/component source of truth).
- `app/globals.css` — Tailwind v4 `@theme` tokens: primary 100–500, neutral 50–900, type scale (`display-1/2`, `heading-1/2/3`, `body-lg/body/small`), spacing, radius, shadows. No cream/off-white "page background" token exists yet — current bg is pure white.
- `app/layout.tsx` — loads Playfair Display (`--font-display`) and Inter (`--font-sans`), body is `min-h-full flex flex-col font-sans`.
- `components/ui/NavBar.tsx` — renders logo + Courses/My Learning links only, no bell/avatar slot.
- `components/ui/Button.tsx`, `Input.tsx`, `Badge.tsx`, `Card.tsx` (`CourseCard`, `LessonCard`, `ResourceCard`), `VertexLogo.tsx` — existing primitives from the design-system prompt (`prompts/vertex-design-system.md`).
- `CourseCard` currently renders `avatarLabel` as plain text on a fixed `bg-neutral-900` 40×40 square — matches the design-system card mock, but the home page needs per-course icon art (black "N" square, a Docker whale image, a blue "TS" square), which the current text-only/fixed-bg API can't express.
- `app/style-guide/page.tsx` exists as the design-system verification page; not touched here.
- No `/courses`, `/my-learning`, or `/search` routes exist yet.

## Decisions / assumptions

- **Extend `CourseCard`** instead of building a bespoke card: add an optional `icon` (ReactNode) prop that overrides the text-avatar content, and an `iconBg` className prop (defaults to `bg-neutral-900`) so callers can pass a black/blue background or a transparent one for an image logo. Keeps the single card family per section 12 of the design-system prompt and section 3's "reuse before adding" rule.
- **Course icons**: "N" (Next.js) and "TS" (TypeScript) are rendered as text glyphs like the existing avatar (black bg / blue `bg-blue-600` bg respectively — blue isn't in the current token set, so I'll use Tailwind's default `blue-600` as a one-off rather than inventing a new brand-color token for a single icon). Docker's whale is a small inline SVG (no logo asset in `public/`, and pulling a brand SVG from an external source isn't appropriate) — I'll draw a simple flat whale-and-containers glyph on a light `neutral-50` background close to the reference; flagging this as an approximation since it's not a pixel-perfect brand mark.
- **Page background**: the reference shows a warm cream/peach page background (distinct from pure white) behind a full-bleed content column (not a bordered card — nav and content span the full width with a bottom hairline under the nav). I'll add one new token, `--color-cream: #FBF1EA` (sampled from the image), used only as the `<body>`/page background here; everything else keeps existing tokens.
- **Hero headline size**: the type scale's `display-1` (48px/56, bold, Playfair) is speced for "page titles," but the reference hero is visually larger/looser (~two lines, generous leading). I'll use `font-display font-bold` at `text-5xl sm:text-6xl lg:text-[64px] leading-[1.1]` rather than the literal `display-1` utility, so it matches the reference proportion at desktop while staying legible on mobile. Flagging this as a deviation from the literal token value.
- **Nav bell + avatar**: added directly in `app/page.tsx`'s header markup (not into the shared `NavBar`, which other future pages may use without an avatar/bell, e.g. before auth is wired). Bell is a static `lucide-react` `Bell` icon button (no notification backend — section 7 lists the notifications bell as presentational-only). Avatar is a static placeholder circular image (a local generic silhouette/initial, not a real photo) since Clerk isn't installed yet in this repo — real auth/user photo wiring is a separate future task. I'll flag this clearly.
- **Search bar**: reuses `Input` with `icon` + `hint="⌘K"` exactly as the design system defines it. It's presentational only on this page (no `/search` route exists yet) — wrapped in a `<form>` with local state but `onSubmit` is a no-op placeholder (`preventDefault` only) until the real search route exists, to avoid linking to a page that 404s. I will not wire keyboard-shortcut focus behavior (⌘K) since that's a separate, larger command-palette feature not requested here.
- **CTA links**: "Explore Courses" and "View all courses" use `next/link` pointing at `/courses` (doesn't exist yet — consistent with building pages incrementally; other in-repo work will add it).
- **Decorative footer graphic**: a row of vertical bars with a gradient fade (primary-300 → primary-100 → transparent), pure CSS (`div`s with `linear-gradient` backgrounds and varying heights), no image asset, no new dependency. Purely decorative, `aria-hidden`.
- Fully responsive: hero text/buttons stack and shrink on mobile, course cards grid goes 3-col → 1-col, nav collapses spacing (no hamburger menu in the reference to imply, so nav links just wrap/shrink at very small widths — acceptable since the reference has no mobile mock, per AGENTS.md section 3).

## Files expected to touch

- `app/page.tsx` — full rewrite: header, hero, courses section, footer graphic.
- `app/globals.css` — add `--color-cream` token (and its `@theme inline` mapping).
- `components/ui/Card.tsx` — extend `CourseCard` props (`icon?`, `iconBg?`).
- `components/ui/DockerIcon.tsx` (new, small inline SVG) — only if inlining directly in `page.tsx` gets noisy; otherwise inline in `page.tsx`. Decide during implementation based on size.

## Requirements

- Header: logo+wordmark left, Courses/My Learning center-left nav, bell icon + circular avatar right, bottom hairline border, matches spacing in reference.
- Hero: eyebrow pill badge ("INTELLIGENT LEARNING", primary-100 bg/primary-500 text, small caps), two-line Playfair headline, centered, neutral-500 subtext (2 lines, centered, max-width), primary `Button` with trailing arrow icon, then the search `Input` with `hint="⌘K"` below, all centered and width-capped like the reference.
- Courses section: "All Courses" as a `heading-1`-ish Playfair/serif title on the left, "View all courses" text-button with trailing arrow on the right, 3 `CourseCard`s in a responsive grid (3 → 1 column) reproducing the exact three sample courses (Next.js for Production / Docker Essentials / TypeScript Deep Dive) with their listed level/duration/module-count metadata.
- Divider strip: horizontal rule either side of a centered star icon + "New courses and lessons added every week." line, `neutral-500` text.
- Footer graphic: gradient bar illustration bleeding to the container edges, sitting on the cream background below the divider.
- No hardcoded one-off hex values outside `globals.css`'s token layer except the explicitly-flagged one-off Docker/TypeScript icon colors (documented above).

## Security considerations

None — fully static/presentational, no data fetching, no secrets, no forms that submit anywhere.

## Acceptance criteria

- `app/page.tsx` visually matches `design/vertex-home.png` at desktop width: header, hero, course cards, divider line, and footer graphic all present with matching copy, spacing, and colors.
- Page reflows cleanly at ~375px width: nav stays usable, hero text/CTAs stack and stay legible, course cards go to a single column, footer graphic doesn't overflow horizontally.
- `CourseCard`'s new `icon`/`iconBg` props are optional and backward compatible — `app/style-guide/page.tsx`'s existing usage still renders unchanged.
- No console errors/warnings in the browser on load.

## Checks to run

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `npm run dev` and manually verify in browser (see test steps)

## Manual test steps

1. Run `npm run dev`, open `http://localhost:3000/`.
2. Compare against `design/vertex-home.png`: header (logo, nav links, bell, avatar), hero copy/badge/button/search bar, the 3 course cards with their icons/metadata, the divider line, and the bottom gradient bar graphic.
3. Resize to ~375px width and confirm no horizontal scroll, hero/buttons/search stack sensibly, and course cards stack to one column.
4. Open `http://localhost:3000/style-guide` and confirm the existing `CourseCard` example there still renders exactly as before (verifies the prop extension didn't break the design-system page).
5. Click "Explore Courses" / "View all courses" and confirm they attempt to navigate to `/courses` (expected to 404 for now since that route doesn't exist yet — this is expected at this stage).
