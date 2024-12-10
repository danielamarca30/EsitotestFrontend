import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  server: {
    port: 5176
  },
  preview: {
    port: 8080
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('preact')) return 'vendor-preact';
            if (id.includes('lucide')) return 'vendor-icons';
            return 'vendor';
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/img/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    },
    assetsInlineLimit: 4096,
    sourcemap: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true
  },
  optimizeDeps: {
    include: ['preact', '@preact/signals', 'lucide-preact'],
    exclude: []
  }
});