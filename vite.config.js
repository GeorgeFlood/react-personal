import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ include: /\.(mjs|js|ts|tsx)$/ })],
  base: process.env.NODE_ENV === "production" ? "/react-personal/" : "/",
});
