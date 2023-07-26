import inspect from "browser-util-inspect";

type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

class Logger {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  private getDate() {
    return new Date().toISOString();
  }
  private getMsg(level: LogLevel, message: unknown) {
    const infos = `[${this.getDate()}] [${level.toUpperCase()}] ${this.name} -`;
    return `${infos} ${
      typeof message === "string" ? message : inspect(message)
    }`;
  }
  public trace(message: unknown) {
    console.trace(this.getMsg("trace", message));
  }
  public debug(message: unknown) {
    console.debug(this.getMsg("debug", message));
  }
  public info(message: unknown) {
    console.info(this.getMsg("info", message));
  }
  public warn(message: unknown) {
    console.warn(this.getMsg("warn", message));
  }
  public error(message: unknown) {
    console.error(this.getMsg("error", message));
  }
  public fatal(message: unknown) {
    console.error(this.getMsg("fatal", message));
  }
}

export function getLogger(name: string) {
  return new Logger(name);
}
