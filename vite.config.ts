import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@assets": resolve(__dirname, "src/assets"),
      "@features": resolve(__dirname, "src/features"),
      "@pages": resolve(__dirname, "src/pages"),
      "@routes": resolve(__dirname, "src/routes"),
      "@ui": resolve(__dirname, "src/ui"),
    },
  },
  plugins: [react()],
  server: {
    cors: true,
    port: 3000,
  },
});
