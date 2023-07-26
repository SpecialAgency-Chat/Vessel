# Vessel

<div align="center">
  <img src="https://i.imgur.com/WuhFlQI.png"><br>
  <i>Discord HTTP Interactions Template</i>
</div>

## Quickstart

1. Change `wrangler.toml` (We recommend to change name field)
2. `npm install`
3. Put secrets via wrangler (view below)
4. `npm run build`
5. `npm run publish`
6. Paste `https://<YOUR_WORKERS_PROJECT_NAME>.<YOUR_CLOUDFLARE_ACCOUNT_NAME>.workers.dev/interactions` to `INTERACTIONS ENDPOINT URL` (Discord Developer Portal)
7. `npm run register` (Need Node.js 18+)
8. Try `/ping` (maybe works)

```sh
npx wrangler secret put DISCORD_PUBLIC_KEY
npx wrangler secret put DISCORD_CLIENT_ID
npx wrangler secret put DISCORD_TOKEN
```

## Auto deploy

This repository has supported auto deploy to Cloudflare Workers via GitHub Actions.

1. Add Actions Secrets `CF_ACCOUNT_ID` and `CF_API_TOKEN` (Not sure where these are? Check out the guide below)
2. Push, and it works (Don't deployed? Check Actions status)

![](https://i.imgur.com/ZJFL2PJ.png) (domain page)
