/* eslint no-console: 0 */

export const LOG_LEVELS = {
    DEBUG: {
        id: 'DEBUG',
        prio: 0
    },
    INFO: {
        id: 'INFO',
        prio: 1
    },
    WARN: {
        id: 'WARN',
        prio: 2
    },
    ERROR: {
        id: 'ERROR',
        prio: 3
    },
    OFF: {
        id: 'OFF',
        prio: 100
    }
}

function globalConfig() {
    return {
        reset: () => { this.level = null },
        off: () => { this.level = LOG_LEVELS.OFF },
        debug: () => { this.level = LOG_LEVELS.DEBUG },
        info: () => { this.level = LOG_LEVELS.INFO },
        warn: () => { this.level = LOG_LEVELS.WARN },
        error: () => { this.level = LOG_LEVELS.ERROR },
        level: () => this.level
    }
}
export const LOG_GLOBAL = new globalConfig()

export default class Logger {

    constructor(name, level) {
        this._name = name || 'Logger'
        this._level = LOG_LEVELS.ERROR
        if (level) {
            if (level.id && LOG_LEVELS[level.id]) {
                this._level = LOG_LEVELS[level.id]
            } else if (LOG_LEVELS[level]) {
                this._level = LOG_LEVELS[level]
            }
        }
    }

    get name() {
        return this._name
    }

    get level() {
        return LOG_GLOBAL.level() || this._level
    }

    debug(msg) {
        if (this.level.prio <= LOG_LEVELS.DEBUG.prio) {
            console.log(`${this.name} - ${msg}`)
        }
    }

    info(msg) {
        if (this.level.prio <= LOG_LEVELS.INFO.prio) {
            console.log(`${this.name} - ${msg}`)
        }
    }

    warn(msg) {
        if (this.level.prio <= LOG_LEVELS.WARN.prio) {
            console.warn(`${this.name} - ${msg}`)
        }
    }

    error(msg) {
        if (this.level.prio <= LOG_LEVELS.ERROR.prio) {
            console.error(`${this.name} - ${msg}`)
        }
    }
}
