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
        level: "trace", // do stuff
        enableCallStack: true,
      },
    },
  });
}
