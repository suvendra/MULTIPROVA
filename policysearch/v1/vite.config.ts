import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig(({ command }) => ({
  resolve: { tsconfigPaths: true, dedupe: ["react", "react-dom", "@tanstack/react-router"] },
  server: { host: "0.0.0.0", port: 3000 },
  plugins: [
    tailwindcss(),
    tanstackStart({ server: { entry: "server" } }),
    react(),
    ...(command === "build"
      ? [nitro({
          preset: "cloudflare-module",
          compatibilityDate: "2026-09-10",
          cloudflare: {
            deployConfig: true,
            nodeCompat: true,
            wrangler: { name: "samainsurance-policysearch-v1" },
          },
        })]
      : []),
  ],
}));
