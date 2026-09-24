import { defineConfig } from 'vite';

export default defineConfig({
  css: { postcss: { plugins: [] } },
  server: { host: true, port: 5178, strictPort: true },
  preview: { host: true, port: 5178, strictPort: true },
  build: { outDir: 'dist', emptyOutDir: true, assetsInlineLimit: 0 },
  base: '/',
});
