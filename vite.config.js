import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import { svelteSVG } from "rollup-plugin-svelte-svg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    svelteSVG({
      svgo: {},
      enforce: "pre",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
});
