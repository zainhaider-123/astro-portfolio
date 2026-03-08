# Astro Portfolio

A modern, responsive developer portfolio built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## ✨ Features

- Hero section with social links and profile image
- Skills marquee with tech logos
- Experience timeline/cards
- About me section
- Featured projects section
- Reusable Astro components and clean structure

## 🧰 Tech Stack

- Astro `5.17.1`
- Tailwind CSS `4.2.1`
- `astro-icon` for icon rendering
- TypeScript support via `tsconfig.json`
- Package manager: `pnpm`

## 📋 Prerequisites

You can use either:

- Node.js `25.8.0` and pnpm `10.30.3` (as defined in `mise.toml`), or
- Any recent Node.js LTS with pnpm installed.

## 🚀 Getting Started

```bash
# 1) Install dependencies
pnpm install

# 2) Start local dev server
pnpm dev
```

Open `http://localhost:4321` in your browser.

## 📜 Available Scripts

- `pnpm dev` – start development server
- `pnpm build` – build for production
- `pnpm preview` – preview the production build locally

## 🛠️ Customize Your Portfolio

Most content is managed in:

- `src/pages/index.astro`

Update these sections there:

- **Personal intro** (name, title, description)
- **Social links** (`linkedin`, `github`, `discord` anchors)
- **Skills** (`mySkill` array)
- **Experience** (`myExperience` array)
- **About me** (`aboutMe` array)
- **Projects** (`project` array)

Replace images in `public/`:

- `profile.webp`
- `zainHaider.webp`
- `project.jpg`

## 📁 Project Structure

```text
.
├── public/
├── src/
│   ├── components/
│   ├── icons/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🌐 Deployment

Build the app:

```bash
pnpm build
```

The output will be generated in `dist/` and can be deployed to platforms like Vercel, Netlify, or Cloudflare Pages.

## 🙌 Credits

Designed and built by Zain Haider.
