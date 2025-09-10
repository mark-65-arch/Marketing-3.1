// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
  }
});
