// @ts-check
import { defineConfig } from "astro/config";

import nekoweb from "@indiefellas/astro-adapter-nekoweb";
import dotenv from "dotenv";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  adapter: nekoweb({
    apiKey: process.env.NEKOWEB_API_KEY ?? "",
    siteName: "mymetype",
    domain: "mymetype.nekoweb.org",
  }),
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    clientPrerender: true,
  },
});
