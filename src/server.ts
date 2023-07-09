import { Hono } from "hono";
import { verifyDiscordRequest } from "@/verifyDiscordRequest";
import { InteractionResponseType, InteractionType } from "discord-api-types/v10";
import configLogger from "./logger";
import { getLogger } from "log4js";

const app = new Hono();

configLogger();
const logger = getLogger("Server");

app.get("/", async (c) => {
  c.text(`Hello! Client ID: ${c.env?.DISCORD_CLIENT_ID}`);
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
});

export default app;