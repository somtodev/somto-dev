import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    "/resume":
      "https://docs.google.com/document/d/1_-1mm1fLd-5IyjbrfEqp2lRpoxZnQpmxGRfikwmh4zs/edit?usp=drivesdk",
  },
});
