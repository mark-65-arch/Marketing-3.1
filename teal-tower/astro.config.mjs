// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      'localhost',
      '38fc77b5-fe78-4794-a88a-96c5f8e7b4d7-00-1nulpgvxu7e6s.spock.replit.dev',
      '.replit.dev',
      '.spock.replit.dev'
    ]
  }
});
