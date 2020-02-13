import LogConfig from '../src/LogConfig'
import LogLevels from '../src/LogLevels'
import Logger from '../src'

describe('Logger', () => {
  let warnSpy: jest.SpyInstance
  let logSpy: jest.SpyInstance
  let errorSpy: jest.SpyInstance

  beforeEach(() => {
    warnSpy = jest.spyOn(global.console, 'warn')
    logSpy = jest.spyOn(global.console, 'log')
    errorSpy = jest.spyOn(global.console, 'error')
  })

  afterEach(() => {
    warnSpy.mockRestore()
    logSpy.mockRestore()
    errorSpy.mockRestore()
  })

  describe('constructor', () => {

    test('default values', () => {
      const LOGGER = new Logger()
      expect(LOGGER.name).toEqual('Logger')
      expect(LOGGER.level).toEqual(LogLevels.ERROR)
    })
    test('can be set a name & level (object)', () => {
      const LOGGER = new Logger('name', LogLevels.INFO)
      expect(LOGGER.name).toEqual('name')
      expect(LOGGER.level).toEqual(LogLevels.INFO)
    })
  })

  describe('debug', () => {

    test('calls console when level is set to debug', () => {
      const LOGGER = new Logger('Logger', LogLevels.DEBUG)
      LOGGER.debug('test')
      expect(logSpy.mock.calls.length).toBe(1)
    })
    test('does nothing when logger is set to info', () => {
      const LOGGER = new Logger('Logger', LogLevels.INFO)
      LOGGER.debug('test')
      expect(logSpy.mock.calls.length).toBe(0)
    })
  })

  describe('info', () => {

    test('calls console when level is set to info', () => {
      const LOGGER = new Logger('Logger', LogLevels.INFO)
      LOGGER.info('test')
      expect(logSpy.mock.calls.length).toBe(1)
    })
    test('does nothing when logger is set to warn', () => {
      const LOGGER = new Logger('Logger', LogLevels.WARN)
      LOGGER.info('test')
      expect(logSpy.mock.calls.length).toBe(0)
    })
  })

  describe('warn', () => {

    test('calls console when level is set to warn', () => {
      const LOGGER = new Logger('Logger', LogLevels.WARN)
      LOGGER.warn('test')
      expect(warnSpy.mock.calls.length).toBe(1)
    })
    test('does nothing when logger is set to error', () => {
      const LOGGER = new Logger('Logger', LogLevels.ERROR)
      LOGGER.warn('test')
      expect(warnSpy.mock.calls.length).toBe(0)
    })
  })

  describe('error', () => {

    test('calls console when level is set to error', () => {
      const LOGGER = new Logger('Logger', LogLevels.ERROR)
      LOGGER.error('test')
      expect(errorSpy.mock.calls.length).toBe(1)
    })
    test('does nothing when logger is set to off', () => {
      const LOGGER = new Logger('Logger', LogLevels.OFF)
      LOGGER.error('test')
      expect(errorSpy.mock.calls.length).toBe(0)
    })
  })
})