import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    pugPlugin({
      pretty: true,
    }),
    babel({
      babelConfig: {
        presets: [["@babel/preset-env", { modules: false }]],
      },
    }),
  ],
  root: "dist",
  optimizeDeps: {
    include: ['jquery']
  },
  build: {
    outDir: "dist",
    emptyOutDir: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    }
  },
  css: {
    devSourcemap: false,
  },
  server: {
    watch: {
      usePolling: false,
      interval: 10
    },
    hmr: {
      overlay: false,
      timeout: 200,
      protocol: 'ws'
    }
  },
  resolve: {
    alias: {
      'jquery': 'jquery/dist/jquery.min.js',
    }
  }
});
