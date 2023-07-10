import { context } from "esbuild";
import * as glob from "glob";

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
  });
  await ctx.rebuild();
  process.exit(0);
})();
