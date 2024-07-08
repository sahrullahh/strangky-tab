import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        target: "es2020",
        rollupOptions: {
            input: {
                main: "./src/index.html",
                popup: "./src/popup.html",
            },
        },
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'manifest.json',
                    dest: '.',
                }
            ],
        }),
    ],
});
