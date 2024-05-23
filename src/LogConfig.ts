import { LogLevels, LogLevel } from './LogLevels'

export class LogConfig {
  // #region Attributes

  #level: LogLevel

  // #endregion

  // #region Constructor

  constructor(level: LogLevel = LogLevels.ERROR) {
    this.#level = level
  }

  // #endregion

  // #region Getters & Setters

  get level() {
    return this.#level
  }

  // #endregion

  // #region Public Methods

  off() {
    this.#level = LogLevels.OFF
    return this
  }

  debug() {
    this.#level = LogLevels.DEBUG
    return this
  }

  info() {
    this.#level = LogLevels.INFO
    return this
  }

  warn() {
    this.#level = LogLevels.WARN
    return this
  }

  error() {
    this.#level = LogLevels.ERROR
    return this
  }

  // #endregion
}

export const GlobalConfig = new LogConfig().debug()
