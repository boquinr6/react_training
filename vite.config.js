import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests from /api to CoinGecko
      // All requests to http://localhost:5173/api will be redirected to https://api.coingecko.com
      '/api': {
        target: 'https://api.coingecko.com/api/v3', // The CoinGecko base URL
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix when forwarding to CoinGecko
        secure: false, // For HTTPS targets if you run into SSL issues (usually not needed)
      },
    },
  },
});