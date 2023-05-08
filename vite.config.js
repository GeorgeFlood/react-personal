import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom plugin to set the MIME type for .jsx files
const customJSXPlugin = {
  name: 'jsx-mime-type',
  transform(_, id) {
    if (id.endsWith('.jsx')) {
      return {
        code: _,
        map: null,
        moduleSideEffects: true,
        loader: 'js',
      };
    }
  },
};

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react({ include: /\.(mjs|js|ts|tsx)$/ })],
  base: process.env.NODE_ENV === "production" ? "/react-personal/" : "/",
=======
  plugins: [react(), customJSXPlugin],
  base: process.env.NODE_ENV === 'production' ? '/react-personal/' : '/',
>>>>>>> 2daab606de6b7ca4d7fedb105f87ba97fe47e3c7
});
