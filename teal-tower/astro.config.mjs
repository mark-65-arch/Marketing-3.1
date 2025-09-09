// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: [
        'localhost',
        '.replit.dev',
        '.janeway.replit.dev',
        'c8e712bc-e797-40d0-98b5-21eda4c4853b-00-253dqr4frc8h4.janeway.replit.dev'
      ]
    }
  }
});
