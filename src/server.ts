import { Hono } from "hono";
import { verifyDiscordRequest } from "@/verifyDiscordRequest";
import { InteractionResponseType, InteractionType } from "discord-api-types/v10";
import { configLogger, getLogger } from "./logger";

const app = new Hono();

// if you want to color the logs, set this to true
configLogger(true);

const logger = getLogger("Server");

app.get("/", async (c) => {
  return c.text(`Hello! Client ID: ${c.env?.DISCORD_CLIENT_ID}`);
});

app.post("/interactions", async (c) => {
  logger.debug("Received request");
  logger.trace(c);
  const { isValid, interaction } = await verifyDiscordRequest(c);
  if (!isValid) {
    logger.debug("Invalid request")
    return c.json({ error: "Invalid request" });
  }
  if (interaction.type === InteractionType.Ping) {
    // Handle ping
    logger.debug("Handling ping");
    return c.json({ type: InteractionResponseType.Pong });
  }

  // Unknown interaction type
  return c.json({ error: "Unknown Interaction type" });
});

export default app;