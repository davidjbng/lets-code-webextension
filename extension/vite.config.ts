import { defineConfig, loadEnv } from "vite";
import webExtension from "@samrum/vite-plugin-web-extension";
import path from "path";
import { getManifest } from "./src/manifest";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      tsconfigPaths(),
      webExtension({
        manifest: getManifest(Number(env.MANIFEST_VERSION)),
      }),
    ],
    build: {
      outDir: path.resolve(__dirname, "./dist"),
    },
  };
});
