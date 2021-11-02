import { resolve } from "path";
import { readdirSync } from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const buildInputs = readdirSync(__dirname)
  .filter((dir) => /^\d+$/.test(dir))
  .reduce((acc, cur) => {
    acc[cur] = resolve(__dirname, cur, "index.html");
    return acc;
  }, {});

export default defineConfig({
  plugins: [react()],
  base: "/2021-swr/",
  build: {
    outDir: "docs",
    rollupOptions: {
      input: buildInputs,
    }
  }
});
