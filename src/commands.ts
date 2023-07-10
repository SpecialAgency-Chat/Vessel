import { RESTPostAPIApplicationCommandsJSONBody } from "discord-api-types/v10";

const commands: RESTPostAPIApplicationCommandsJSONBody[] = [
  {
    name: "ping",
    description: "Respond with Pong",
  },
];

export default commands;
