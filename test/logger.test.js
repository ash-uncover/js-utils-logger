import { Logger, LOG_CONFIG, LOG_LEVELS } from 'index'

describe('loggers', () => {

    describe('LOG_LEVELS', () => {

        test('is properly defined', () => {
            expect(LOG_LEVELS).toBeDefined()
        })
    })

    describe('LOG_CONFIG', () => {
        
        test('is properly defined', () => {
            expect(LOG_CONFIG).toBeDefined()
        })
    })

    describe('Logger', () => {
        
        test('is properly defined', () => {
            expect(Logger).toBeDefined()
        })
    })
})
