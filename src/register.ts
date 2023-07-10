import dotenv from "dotenv";
// idk how to remove .js extension
import Commands from "./commands.js";

dotenv.config({ path: ".dev.vars" });

const token = process.env.DISCORD_TOKEN;
const applicationId = process.env.DISCORD_CLIENT_ID;

if (!token) {
  throw new Error("The DISCORD_TOKEN environment variable is required.");
}
if (!applicationId) {
  throw new Error("The DISCORD_CLIENT_ID environment variable is required.");
}

const url = `https://discord.com/api/v10/applications/${applicationId}/commands`;

(async () => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bot ${token}`,
    },
    method: "PUT",
    body: JSON.stringify(Commands),
  });

  if (response.ok) {
    console.log("Registered all commands");
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    process.exit(0);
  } else {
    console.error("Error registering commands");
    let errorText = `Error registering commands \n ${response.url}: ${response.status} ${response.statusText}`;
    try {
      const error = await response.text();
      if (error) {
        errorText = `${errorText} \n\n ${error}`;
      }
    } catch (err) {
      console.error("Error reading body from request:", err);
    }
    console.error(errorText);
    process.exit(1);
  }
})();
