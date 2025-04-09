import { defineConfig } from "vite";

import legacy from "@vitejs/plugin-legacy";
import autoprefixer from "autoprefixer";
import babel from "vite-plugin-babel";

import pugPlugin from "vite-plugin-pug";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    babel({
      babelConfig: {
        babelrc: true,
        configFile: true,
      },
    }),
    pugPlugin({
      localImports: true,
      pretty: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {},
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    sourcemap: false,
  },
  server: {
    open: true,
    port: 3000,
  },
});
