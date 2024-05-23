import { LogConfig, LogLevels } from '../src'

describe('LogConfig', () => {

  let config: LogConfig

  beforeEach(() => {
    config = new LogConfig()
  })

  describe('constructor', () => {

    test('properly initialize object', () => {
      // Declaration
      // Execution
      // Assertion
      expect(config.level).toBe(LogLevels.ERROR)
    })
  })

  describe('levels', () => {

    test('can be set to OFF', () => {
      // Declaration
      // Execution
      config.off()
      // Assertion
      expect(config.level).toBe(LogLevels.OFF)
    })
    test('can be set to DEBUG', () => {
      // Declaration
      // Execution
      config.debug()
      // Assertion
      expect(config.level).toBe(LogLevels.DEBUG)
    })
    test('can be set to INFO', () => {
      // Declaration
      // Execution
      config.info()
      // Assertion
      expect(config.level).toBe(LogLevels.INFO)
    })
    test('can be set to WARN', () => {
      // Declaration
      // Execution
      config.warn()
      // Assertion
      expect(config.level).toBe(LogLevels.WARN)
    })
    test('can be set to ERROR', () => {
      // Declaration
      // Execution
      config.error()
      // Assertion
      expect(config.level).toBe(LogLevels.ERROR)
    })
  })
})
