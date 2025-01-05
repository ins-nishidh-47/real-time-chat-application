import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // This allows access from your local network
    port: 3000
  },
  build: {
    outDir: 'dist',  // Ensures that the build output is saved in the dist folder
    rollupOptions: {
      input: 'index.html'  // Make sure Vite uses your index.html as the entry point
    }
  }
});
