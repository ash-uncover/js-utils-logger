/* eslint no-console: 0 */

import LOG_LEVELS from './LogLevels'
import LOG_CONFIG from './LogConfig'

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
        return LOG_CONFIG.level || this._level
    }

    message(msg) {
        return `${this.name} - ${msg}`
    }

    debug(msg) {
        if (this.level.prio <= LOG_LEVELS.DEBUG.prio) {
            console.log(this.message(msg))
        }
    }

    info(msg) {
        if (this.level.prio <= LOG_LEVELS.INFO.prio) {
            console.log(this.message(msg))
        }
    }

    warn(msg) {
        if (this.level.prio <= LOG_LEVELS.WARN.prio) {
            console.warn(this.message(msg))
        }
    }

    error(msg) {
        if (this.level.prio <= LOG_LEVELS.ERROR.prio) {
            console.error(this.message(msg))
        }
    }
}
