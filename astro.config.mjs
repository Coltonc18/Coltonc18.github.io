import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Replace with custom domain later
  site: 'https://coltonc18.github.io',
  
  base: '/', 
  
  integrations: [
    react(), 
    tailwind()
  ],
  
  output: 'static',
  
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});