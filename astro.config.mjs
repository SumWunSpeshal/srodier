import { defineConfig } from 'astro/config';
// Use Vercel Edge Functions (Recommended)
import vercel from '@astrojs/vercel/serverless';
// Can also use Serverless Functions
// import vercel from '@astrojs/vercel/serverless';
// Or a completely static build
// import vercel from '@astrojs/vercel/static';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true
  }),
  integrations: [tailwind(), react()]
});