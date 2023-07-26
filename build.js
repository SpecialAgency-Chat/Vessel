import { context } from "esbuild";

(async () => {
  const ctx = await context({
    entryPoints: ["src/server.ts", "src/register.ts"],
    bundle: true,
    outdir: "dist",
    tsconfig: "tsconfig.json",
    minify: true,
    sourcemap: "inline",
    legalComments: "none",
    platform: "node",
    target: "esnext",
    logLevel: "info",
  });
  await ctx.rebuild();
  process.exit(0);
})();
