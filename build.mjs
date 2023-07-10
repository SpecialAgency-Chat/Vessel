import { context } from "esbuild";
import * as glob from "glob";
import { nodeExternalsPlugin } from "esbuild-node-externals";

(async () => {
  const ctx = await context({
    entryPoints: glob.sync("./src/**/*.ts"),
    outdir: "dist",
    tsconfig: "tsconfig.json",
    minify: true,
    sourcemap: "inline",
    legalComments: "none",
    platform: "node",
    target: "es2022",
    logLevel: "info",
    sourcesContent: false,
    allowOverwrite: true,
    format: "cjs",
    plugins: [nodeExternalsPlugin()]
  });
  await ctx.rebuild();
  process.exit(0);
})();