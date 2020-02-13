/* tslint:disable:no-console */

import LogLevels from './LogLevels'
import LogConfig from './LogConfig'

export default class Logger {

  private _name: string
  private _level: LogLevels

  constructor(name: string = 'Logger', level: LogLevels = LogLevels.ERROR) {
    this._name = name
    this._level = level
  }

  get name() {
    return this._name
  }

  get level() {
    return LogConfig.level() || this._level
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
