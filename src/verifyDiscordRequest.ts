import { Context, Env } from "hono";
import { APIInteraction } from "discord-api-types/v10";
import { verifyKey } from "discord-interactions";

export async function verifyDiscordRequest(
  context: Context<Env>,
): Promise<
  | { isValid: false; interaction: null }
  | { isValid: true; interaction: APIInteraction }
> {
  const signature = context.req.header("x-signature-ed25519");
  const timestamp = context.req.header("x-signature-timestamp");
  const body = await context.req.text();
  const isValidRequest =
    signature &&
    timestamp &&
    verifyKey(
      body,
      signature,
      timestamp,
      context.env?.DISCORD_PUBLIC_KEY as string,
    );
  if (!isValidRequest) {
    return { isValid: false, interaction: null };
  }

  return { interaction: JSON.parse(body), isValid: true };
}
