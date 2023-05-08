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
  plugins: [react(), customJSXPlugin],
  base: process.env.NODE_ENV === 'production' ? '/react-personal/' : '/',
});
