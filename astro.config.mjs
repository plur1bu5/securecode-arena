import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://plur1bu5.github.io",
  base: process.env.BASE_PATH || undefined,
  trailingSlash: "always",
  compressHTML: true,
});
