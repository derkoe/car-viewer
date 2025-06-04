// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: "server",

  env: {
    schema: {
      AZURE_OPENAI_API_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
      AZURE_OPENAI_ENDPOINT: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});