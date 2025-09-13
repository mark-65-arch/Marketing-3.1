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

  // Performance optimizations
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          // Better CSS chunking for performance
          manualChunks: {
            vendor: ['astro'],
          },
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img';
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          },
        }
      }
    },
    css: {
      devSourcemap: false
    }
  },

  // Build optimizations
  build: {
    inlineStylesheets: 'auto'
  },

  integrations: [
    sitemap(), 
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ]
});