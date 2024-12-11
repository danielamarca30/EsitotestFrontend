import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => ({
  plugins: [preact()],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    outDir: command === 'build' ? 'dist/client' : 'dist/server',
    emptyOutDir: command === 'build',
    rollupOptions: {
      input: command === 'build' 
        ? resolve(__dirname, 'index.html')
        : resolve(__dirname, 'src/entry-server.tsx'),
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('preact')) return 'vendor-preact';
            if (id.includes('lucide')) return 'vendor-icons';
            return 'vendor';
          }
        }
      }
    }
  },
  ssr: {
    target: 'node',
    format: 'esm',
    noExternal: ['preact-render-to-string']
  }
}));