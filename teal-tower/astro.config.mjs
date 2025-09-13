// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';

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
      cssMinify: 'esbuild',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          // Better CSS chunking for performance
          manualChunks: {
            vendor: ['astro'],
          },
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
              extType = 'img';
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          },
        }
      },
      chunkSizeWarningLimit: 1000,
      assetsInlineLimit: 4096
    },
    css: {
      devSourcemap: false
    },
    ssr: {
      noExternal: ['astro']
    }
  },

  // Build optimizations
  build: {
    inlineStylesheets: 'always',
    assets: 'assets'
  },

  // Add compressor integration for better performance
  compressHTML: true,

  integrations: [
    sitemap(), 
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    }),
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      },
      Image: false,
      JavaScript: true,
      SVG: true
    })
  ]
});