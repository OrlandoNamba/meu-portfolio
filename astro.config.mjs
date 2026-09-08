// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
// `site` pode ser definido pelo DevOps após o deploy (URL Vercel).
export default defineConfig({
  compressHTML: true,
});
