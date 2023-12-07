import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    "/resume":
      "https://docs.google.com/document/d/e/2PACX-1vR5gdD-2S7DrBfBLybyTmDSW5vl1afTWlX3wqHY72iyu1yvz4T32GUle1bwZtDASdcn50C3wZhxtJwV/pub",
  },
});
