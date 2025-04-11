import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import path from "path";

export default defineConfig({
  plugins: [pugPlugin()],
  root: "./",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.pug"), // 👈 точка входа — прямо index.pug
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    open: "/index.pug", // 👈 откроет Pug как HTML
  },
});
