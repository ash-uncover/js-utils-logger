import LogLevels, { LogLevel } from './LogLevels'

let level: LogLevel | null = null

const LogConfig = {
  level: () => {
    return level
  },
  reset: () => {
    level = null
  },
  off: () => {
    level = LogLevels.OFF
  },
  debug: () => {
    level = LogLevels.DEBUG
  },
  info: () => {
    level = LogLevels.INFO
  },
  warn: () => {
    level = LogLevels.WARN
  },
  error: () => {
    level = LogLevels.ERROR
  }
}

export default LogConfig
