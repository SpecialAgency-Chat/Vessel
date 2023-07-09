import log4js from "log4js";

export default function configLogger(): void {
  log4js.configure({
    appenders: {
      console: {
        type: "console",
      },
    },
    categories: {
      default: {
        appenders: ["console"],
        level: process.env["NODE_ENV"] === "production" ? "info" : "trace",
        enableCallStack: true,
      },
    },
  });
}
