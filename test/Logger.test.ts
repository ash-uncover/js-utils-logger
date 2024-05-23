import { Logger, LogLevels, LogConfig, GlobalConfig } from '../src'

describe('Logger', () => {
  let warnSpy: jest.SpyInstance
  let logSpy: jest.SpyInstance
  let errorSpy: jest.SpyInstance

  let logger: Logger

  beforeEach(() => {
    warnSpy = jest.spyOn(global.console, 'warn')
    logSpy = jest.spyOn(global.console, 'log')
    errorSpy = jest.spyOn(global.console, 'error')
    logger = new Logger()
  })

  afterEach(() => {
    warnSpy.mockRestore()
    logSpy.mockRestore()
    errorSpy.mockRestore()
  })

  describe('constructor', () => {

    test('default values', () => {
      // Declaration
      // Execution
      expect(logger.name).toEqual('Logger')
      // Assertion
      expect(logger.level).toEqual(LogLevels.ERROR)
    })
    test('can be set a name & config (object)', () => {
      // Declaration
      logger = new Logger('name', new LogConfig().info())
      // Execution
      expect(logger.name).toEqual('name')
      // Assertion
      expect(logger.level).toEqual(LogLevels.INFO)
    })
  })

  describe('debug', () => {

    test('calls console when config is set to debug', () => {
      // Declaration
      logger.config.debug()
      // Execution
      logger.debug('test')
      // Assertion
      expect(logSpy.mock.calls.length).toBe(1)
    })
    test('does nothing when config is set to info', () => {
      // Declaration
      logger.config.info()
      // Execution
      logger.debug('test')
      // Assertion
      expect(logSpy.mock.calls.length).toBe(0)
    })
    test('does nothing when global config is set to info', () => {
      // Declaration
      logger.config.debug()
      GlobalConfig.info()
      // Execution
      logger.debug('test')
      // Assertion
      expect(logSpy.mock.calls.length).toBe(0)
    })
  })

  describe('info', () => {

    test('calls console when config is set to info', () => {
      // Declaration
      logger.config.info()
      // Execution
      logger.info('test')
      // Assertion
      expect(logSpy.mock.calls.length).toBe(1)
    })
    test('does nothing when config is set to warn', () => {
      // Declaration
      logger.config.warn()
      // Execution
      logger.info('test')
      // Assertion
      expect(logSpy.mock.calls.length).toBe(0)
    })
    test('does nothing when global config is set to warn', () => {
      // Declaration
      logger.config.info()
      GlobalConfig.warn()
      // Execution
      logger.info('test')
      // Assertion
      expect(logSpy.mock.calls.length).toBe(0)
    })
  })

  describe('warn', () => {

    test('calls console when config is set to warn', () => {
      // Declaration
      logger.config.warn()
      // Execution
      logger.warn('test')
      // Assertion
      expect(warnSpy.mock.calls.length).toBe(1)
    })
    test('does nothing when config is set to error', () => {
      // Declaration
      logger.config.error()
      // Execution
      logger.warn('test')
      // Assertion
      expect(warnSpy.mock.calls.length).toBe(0)
    })
    test('does nothing when global config is set to error', () => {
      // Declaration
      logger.config.warn()
      GlobalConfig.error()
      // Execution
      logger.warn('test')
      // Assertion
      expect(warnSpy.mock.calls.length).toBe(0)
    })
  })

  describe('error', () => {

    test('calls console when config is set to error', () => {
      // Declaration
      logger.config.error()
      // Execution
      logger.error('test')
      // Assertion
      expect(errorSpy.mock.calls.length).toBe(1)
    })
    test('does nothing when config is set to off', () => {
      // Declaration
      logger.config.off()
      // Execution
      logger.error('test')
      // Assertion
      expect(errorSpy.mock.calls.length).toBe(0)
    })
    test('does nothing when global config is set to off', () => {
      // Declaration
      logger.config.error()
      GlobalConfig.off()
      // Execution
      logger.error('test')
      // Assertion
      expect(errorSpy.mock.calls.length).toBe(0)
    })
  })
})