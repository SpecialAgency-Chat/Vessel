import { context } from "esbuild";

(async () => {
  const ctx = await context({
    entryPoints: ["src/server.ts"],
    bundle: true,
    outdir: "dist",
    tsconfig: "tsconfig.json",
    minify: false,
    sourcemap: "inline",
    legalComments: "none",
    platform: "browser",
    target: "esnext",
    logLevel: "info",
  });
  await ctx.rebuild();
  const ctx2 = await context({
    entryPoints: ["src/register.ts"],
    bundle: true,
    outdir: "dist",
    tsconfig: "tsconfig.json",
    minify: false,
    sourcemap: "inline",
    legalComments: "none",
    platform: "node",
    target: "esnext",
    logLevel: "info",
  });
  await ctx2.rebuild();
  process.exit(0);
})();
