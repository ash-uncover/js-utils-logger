export type LogLevel = 
  | 0 
  | 1 
  | 2 
  | 3 
  | 4

export const LogLevels: {
  DEBUG: LogLevel
  INFO: LogLevel
  WARN: LogLevel
  ERROR: LogLevel
  OFF: LogLevel
} = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  OFF: 4
}
