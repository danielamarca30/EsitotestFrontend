import { build } from 'vite';

// Build client
await build({
  outDir: 'dist/client',
  emptyOutDir: true
});

// Build server
await build({
  build: {
    ssr: true,
    outDir: 'dist/server',
    rollupOptions: {
      input: 'src/entry-server.tsx'
    }
  }
});
