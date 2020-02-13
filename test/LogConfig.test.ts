import { LogConfig, LogLevels } from '../src'

describe('LogConfig', () => {

  describe('constructor', () => {

    test('properly initialize object', () => {
      expect(LogConfig.level()).toBe(null)
    })
  })

  describe('levels', () => {

    beforeEach(() => {
      LogConfig.reset()
    })

    test('can be set to OFF', () => {
      LogConfig.off()
      expect(LogConfig.level()).toBe(LogLevels.OFF)
    })
    test('can be set to DEBUG', () => {
      LogConfig.debug()
      expect(LogConfig.level()).toBe(LogLevels.DEBUG)
    })
    test('can be set to INFO', () => {
      LogConfig.info()
      expect(LogConfig.level()).toBe(LogLevels.INFO)
    })
    test('can be set to WARN', () => {
      LogConfig.warn()
      expect(LogConfig.level()).toBe(LogLevels.WARN)
    })
    test('can be set to ERROR', () => {
      LogConfig.error()
      expect(LogConfig.level()).toBe(LogLevels.ERROR)
    })
  })
})
