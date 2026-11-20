import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const githubPagesFallback = {
    name: "github-pages-spa-fallback",
    apply: "build",
    async closeBundle() {
        const outputDirectory = resolve(root, "dist");
        await copyFile(
            resolve(outputDirectory, "index.html"),
            resolve(outputDirectory, "404.html"),
        );
    },
};

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), githubPagesFallback],
    base: "/resume/",
});
