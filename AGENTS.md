# AGENTS.md

Single-page portfolio built with Astro 5, Tailwind CSS 4, and TypeScript. Package manager is `pnpm` (Node 25.8.0 / pnpm 10.30.3 pinned in `mise.toml`; the toolchain in PATH may be older and still works).

## Commands

- `pnpm dev` — dev server (port 4321)
- `pnpm build` — static build to `dist/`
- `pnpm preview` — preview production build
- There is **no** lint, format, test, or typecheck script. `astro check` is not installed. Verify changes with `pnpm build`.

## Architecture

- The entire site is one page: `src/pages/index.astro`. All content is frontmatter arrays in that file (`intro`, `mySkill`, `myExperience`, `aboutMe`, `project`) — edit those, not hardcoded markup.
- `src/layouts/BaseLayout.astro` wraps everything: Header, main slot, Footer, and a fixed background image.
- Icons are local SVGs in `src/icons/` rendered via `astro-icon` (referenced by name, e.g. `<Icon name="github" />`). To add an icon, add an SVG file there.
- `src/utils/cn.ts` — `clsx` + `tailwind-merge` helper; use it for conditional classes (see `Cta.astro`).
- `Header.astro` nav links are placeholders (all `href="/"`); `Footer.astro` uses `#anchor` links. Sections do not have matching ids yet.

## Tailwind 4 (CSS-first)

- No `tailwind.config.*` file. Theme, fonts, and animation tokens are defined in `src/styles/global.css` inside `@theme` (`--font-londrina`, `--color-background`, `--animate-marquee`, etc.).
- Custom utilities are in `@layer components` there: `.line-hover`, `.bef-aft-shadow`, `.nav-padding`, `.hero-padding`, `.sec-padding`. Add new utilities there, not in component markup.
- Design tokens: `--background: #e0e0e0` (light), `--foreground: #111111`. The design is light-on-light; sections alternate with `bg-foreground text-background`.
- Fonts (Londrina Outline, Roboto) are imported from Google Fonts at the top of `global.css`.

## Gotchas

- **`astro.config.mjs` contains an obfuscated JS payload appended after the legitimate `defineConfig`** (injected in commit `03ab50f`). It executes at build time. Treat it as untrusted/malicious — flag before trusting builds, and consider reverting it. Do not preserve or extend it.
- Mobile nav drawer (`src/components/Slide.astro`) is a CSS-only checkbox `peer` + `sr-only` pattern; the `id` prop links the checkbox, labels, and panel.
- Generated dirs `dist/` and `.astro/` are gitignored; `.astro/types.d.ts` is regenerated on dev/build.
- `.agents/` contains a vendored opencode skill (`impeccable`) locked via `skills-lock.json` — tooling, not project code.
- Current working branch is `impeccable`.
