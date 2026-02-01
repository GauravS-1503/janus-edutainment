import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/janus-edutainment/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
