/* tslint:disable:no-console */

import { LogLevels, LogLevel } from './LogLevels'
import { LogConfig, GlobalConfig } from './LogConfig'

function checkLevel(logger: Logger, level: LogLevel) {
  return logger.config.level <= level && GlobalConfig.level <= level
}

export class Logger {
  // #region Attributes

  #name: string
  #config: LogConfig

  // #endregion

  // #region Constructor

  constructor(name: string = 'Logger', config: LogConfig = new LogConfig()) {
    this.#name = name
    this.#config = config
  }

  // #endregion

  // #region Getters & Setters

  get name() {
    return this.#name
  }

  get config() {
    return this.#config
  }

  get level() {
    return this.#config.level
  }

  // #endregion

  // #region Public Methods

  message(msg: string) {
    return `${this.name} - ${msg}`
  }

  debug(msg: string) {
    if (checkLevel(this, LogLevels.DEBUG)) {
      console.log(this.message(msg))
    }
  }

  info(msg: string) {
    if (checkLevel(this, LogLevels.INFO)) {
      console.log(this.message(msg))
    }
  }

  warn(msg: string) {
    if (checkLevel(this, LogLevels.WARN)) {
      console.warn(this.message(msg))
    }
  }

  error(msg: string) {
    if (checkLevel(this, LogLevels.ERROR)) {
      console.error(this.message(msg))
    }
  }

  // #endregion
}
