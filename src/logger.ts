import chalk, { ChalkInstance } from "chalk";
import inspect from "browser-util-inspect";

let withColors = true;

type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

const LogColors: Record<LogLevel, ChalkInstance> = {
  trace: chalk.gray,
  debug: chalk.blue,
  info: chalk.green,
  warn: chalk.yellow,
  error: chalk.red,
  fatal: chalk.bgRed,
}

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
    return `${withColors ? LogColors[level](infos):infos} ${typeof message === "string" ? message:inspect(message)}`;
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

export function configLogger(colors: boolean) {
  withColors = colors;
}