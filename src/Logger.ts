/* tslint:disable:no-console */

import LogLevels, { LogLevel } from './LogLevels'
import LogConfig from './LogConfig'

export default class Logger {

  // attributes
  #name: string
  #level: LogLevel

  constructor(name: string = 'Logger', level: LogLevel = LogLevels.ERROR) {
    this.#name = name
    this.#level = level
  }

  get name() {
    return this.#name
  }

  get level() {
    return LogConfig.level() || this.#level
  }

  message(msg: string) {
    return `${this.name} - ${msg}`
  }

  debug(msg: string) {
    if (this.level <= LogLevels.DEBUG) {
      console.log(this.message(msg))
    }
  }

  info(msg: string) {
    if (this.level <= LogLevels.INFO) {
      console.log(this.message(msg))
    }
  }

  warn(msg: string) {
    if (this.level <= LogLevels.WARN) {
      console.warn(this.message(msg))
    }
  }

  error(msg: string) {
    if (this.level <= LogLevels.ERROR) {
      console.error(this.message(msg))
    }
  }
}
