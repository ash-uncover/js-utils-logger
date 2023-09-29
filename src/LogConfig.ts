import {
  LogLevels,
  LogLevel
} from './LogLevels'

class LogConfigClass {

  // Attributes //

  #level: LogLevel | null = null

  // Getters //

  get level () {
    return this.#level
  }

  // Methods //

  reset () {
    this.#level = null
  }
  off () {
    this.#level = LogLevels.OFF
  }
  debug () {
    this.#level = LogLevels.DEBUG
  }
  info () {
    this.#level = LogLevels.INFO
  }
  warn () {
    this.#level = LogLevels.WARN
  }
  error () {
    this.#level = LogLevels.ERROR
  }
}

export const LogConfig = new LogConfigClass()
