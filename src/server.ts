import { Hono } from "hono";
import { verifyDiscordRequest } from "@/verifyDiscordRequest";

const app = new Hono();

app.get("/", async (c) => {
  c.text(`Hello! Client ID: ${c.env?.DISCORD_CLIENT_ID}`);
});

app.post("/interactions", async (c) => {
  const { isValid, interaction } = await verifyDiscordRequest(c);
  if (!isValid) {
    return c.json({ error: "Invalid request" });
  }
});

export default app;