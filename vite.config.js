import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
// import path from "path";

import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    pugPlugin(),
    babel({
      babelConfig: {
        presets: ["@babel/preset-env"],
      },
    }),
  ],
  root: "dist",
  build: {
    outDir: "dist",
    emptyOutDir: false, // чтобы Pug не перетирался Vite'ом
  },
  server: {
    open: "/index.pug", // 👈 откроет Pug как HTML
  },
});
