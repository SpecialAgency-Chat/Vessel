import { Hono } from "hono";
import { verifyDiscordRequest } from "@/verifyDiscordRequest";
import { InteractionResponseType, InteractionType } from "discord-api-types/v10";

const app = new Hono();

app.get("/", async (c) => {
  c.text(`Hello! Client ID: ${c.env?.DISCORD_CLIENT_ID}`);
});

app.post("/interactions", async (c) => {
  const { isValid, interaction } = await verifyDiscordRequest(c);
  if (!isValid) {
    return c.json({ error: "Invalid request" });
  }
  if (interaction.type === InteractionType.Ping) {
    // Handle ping
    return c.json({ type: InteractionResponseType.Pong });
  }
});

export default app;