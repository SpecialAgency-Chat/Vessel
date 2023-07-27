import { context } from "esbuild";

(async () => {
  const ctx = await context({
    entryPoints: ["src/server.ts"],
    outdir: "dist",
    bundle: true,
    format: "esm",
    tsconfig: "tsconfig.json",
    minify: true,
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
    minify: true,
    sourcemap: "inline",
    legalComments: "none",
    platform: "node",
    target: "esnext",
    format: "esm",
    logLevel: "info",
    banner: { js: `import { createRequire } from 'module';const require = createRequire(import.meta.url);`}
  });
  await ctx2.rebuild();
  process.exit(0);
})();
