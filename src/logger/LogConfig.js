import LOG_LEVELS from 'logger/LogLevels'

class LogConfig {
    
    constructor() {
        this.level = null
    }

    reset() { 
        this.level = null 
    }
    
    off() { 
        this.level = LOG_LEVELS.OFF 
    }
    debug() {
        this.level = LOG_LEVELS.DEBUG 
    }
    
    info() {
        this.level = LOG_LEVELS.INFO 
    }
    warn() {
        this.level = LOG_LEVELS.WARN 
    }
    error() {
        this.level = LOG_LEVELS.ERROR
    }
}

const LOG_CONFIG = new LogConfig()
export default LOG_CONFIG