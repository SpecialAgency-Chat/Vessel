# Vessel

<div style="text-align: center;">
  <img src="https://i.imgur.com/WuhFlQI.png">
  <div style="font-style: italic;">Discord HTTP Interactions Template</div>
</div>

## Quickstart

1. Change `wrangler.toml` (We recommend to change name field)
2. Put secrets via wrangler
```sh
npx wrangler secret put DISCORD_PUBLIC_KEY
npx wrangler secret put DISCORD_CLIENT_ID
npx wrangler secret put DISCORD_TOKEN
```
3. `npm run build`
4. `npm run publish`
5. Paste `https://<YOUR_WORKERS_PROJECT_NAME>.<YOUR_CLOUDFLARE_ACCOUNT_NAME>.workers.dev/interactions` to `INTERACTIONS ENDPOINT URL` (Discord Developer Portal)
6. Try `/ping` (maybe works)