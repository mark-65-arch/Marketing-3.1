// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://mark-65-arch.github.io',
  base: '/Marketing-3.1',
  
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5000,
    allowedHosts: [
      'localhost',
      process.env.REPLIT_DEV_DOMAIN || '',
      '.replit.dev',
      '.spock.replit.dev',
      '.janeway.replit.dev'
    ].filter(Boolean)
  },

  integrations: [sitemap(), partytown()]
});