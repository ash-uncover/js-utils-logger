import LogLevels from './LogLevels'

let LogLevel: LogLevels | null = null

const LogConfig = {
  level: () => {
    return LogLevel
  },
  reset: () => {
    LogLevel = null
  },
  off: () => {
    LogLevel = LogLevels.OFF
  },
  debug: () => {
    LogLevel = LogLevels.DEBUG
  },
  info: () => {
    LogLevel = LogLevels.INFO
  },
  warn: () => {
    LogLevel = LogLevels.WARN
  },
  error: () => {
    LogLevel = LogLevels.ERROR
  }
}

export default LogConfig
