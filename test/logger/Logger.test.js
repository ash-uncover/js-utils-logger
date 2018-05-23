import { LOG_CONFIG, LOG_LEVELS } from 'index'
import Logger from 'index'
import { getConsoleMock } from 'ap-utils-test'

describe('Logger', () => {

    beforeEach(() => {
        global.console = getConsoleMock()
    })

    describe('constructor', () => {

        test('default values', () => {
            const LOGGER = new Logger()
            expect(LOGGER.name).toEqual('Logger')
            expect(LOGGER.level).toEqual(LOG_LEVELS.ERROR)
        })
        test('can be set a name & level (string)', () => {
            const LOGGER = new Logger('name', 'DEBUG')
            expect(LOGGER.name).toEqual('name')
            expect(LOGGER.level).toEqual(LOG_LEVELS.DEBUG)
        })
        test('can be set a name & level (object)', () => {
            const LOGGER = new Logger('name', LOG_LEVELS.INFO)
            expect(LOGGER.name).toEqual('name')
            expect(LOGGER.level).toEqual(LOG_LEVELS.INFO)
        })
        test('fallback to default level when invalid value is provided', () => {
            const LOGGER = new Logger('name', 'test')
            expect(LOGGER.name).toEqual('name')
            expect(LOGGER.level).toEqual(LOG_LEVELS.ERROR)
        })
    })

    describe('debug', () => {

        test('calls console when level is set to debug', () => {
            const LOGGER = new Logger('Logger', LOG_LEVELS.DEBUG)
            LOGGER.debug('test')
            expect(global.console.log.mock.calls.length).toBe(1)
        })
        test('does nothing when logger is set to info', () => {
            const LOGGER = new Logger('Logger', LOG_LEVELS.INFO)
            LOGGER.debug('test')
            expect(global.console.log.mock.calls.length).toBe(0)
        })
    })

    describe('info', () => {

        test('calls console when level is set to info', () => {
            const LOGGER = new Logger('Logger', LOG_LEVELS.INFO)
            LOGGER.info('test')
            expect(global.console.log.mock.calls.length).toBe(1)
        })
        test('does nothing when logger is set to warn', () => {
            const LOGGER = new Logger('Logger', LOG_LEVELS.WARN)
            LOGGER.info('test')
            expect(global.console.log.mock.calls.length).toBe(0)
        })
    })

    describe('warn', () => {

        test('calls console when level is set to warn', () => {
            const LOGGER = new Logger('Logger', LOG_LEVELS.WARN)
            LOGGER.warn('test')
            expect(global.console.warn.mock.calls.length).toBe(1)
        })
        test('does nothing when logger is set to error', () => {
            const LOGGER = new Logger('Logger', LOG_LEVELS.ERROR)
            LOGGER.warn('test')
            expect(global.console.warn.mock.calls.length).toBe(0)
        })
    })

    describe('error', () => {

        test('calls console when level is set to error', () => {
            const LOGGER = new Logger('Logger', LOG_LEVELS.ERROR)
            LOGGER.error('test')
            expect(global.console.error.mock.calls.length).toBe(1)
        })
        test('does nothing when logger is set to off', () => {
            const LOGGER = new Logger('Logger', LOG_LEVELS.OFF)
            LOGGER.error('test')
            expect(global.console.error.mock.calls.length).toBe(0)
        })
    })
})