import LOG_CONFIG from 'logger/LogConfig'
import LOG_LEVELS from 'logger/LogLevels'

describe('LOG_CONFIG', () => {

    describe('constructor', () => {

        test('properly initialize object', () => {
            expect(LOG_CONFIG.level).toBe(null)
        })
    })

    describe('levels', () => {

        beforeEach(() => {
            LOG_CONFIG.reset()
        })

        test('can be set to OFF', () => {
            LOG_CONFIG.off()
            expect(LOG_CONFIG.level).toBe(LOG_LEVELS.OFF)
        })
        test('can be set to DEBUG', () => {
            LOG_CONFIG.debug()
            expect(LOG_CONFIG.level).toBe(LOG_LEVELS.DEBUG)
        })
        test('can be set to INFO', () => {
            LOG_CONFIG.info()
            expect(LOG_CONFIG.level).toBe(LOG_LEVELS.INFO)
        })
        test('can be set to WARN', () => {
            LOG_CONFIG.warn()
            expect(LOG_CONFIG.level).toBe(LOG_LEVELS.WARN)
        })
        test('can be set to ERROR', () => {
            LOG_CONFIG.error()
            expect(LOG_CONFIG.level).toBe(LOG_LEVELS.ERROR)
        })
    })
})
