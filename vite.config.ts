import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@common": resolve(__dirname, "src/common"),
      "@assets": resolve(__dirname, "src/assets"),
      "@features": resolve(__dirname, "src/features"),
      "@pages": resolve(__dirname, "src/pages"),
      "@routes": resolve(__dirname, "src/routes"),
      "@services": resolve(__dirname, "src/services"),
      "@ui": resolve(__dirname, "src/ui"),
    },
  },
  plugins: [react()],
  server: {
    cors: true,
    port: Number(process.env.REACT_APP_PORT),
  },
});
