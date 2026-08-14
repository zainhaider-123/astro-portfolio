// @ts-check
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import { defineConfig } from 'astro/config';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});