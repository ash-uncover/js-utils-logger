import { LogLevel } from './LogLevels';
export declare class LogConfig {
    #private;
    constructor(level?: LogLevel);
    get level(): LogLevel;
    off(): this;
    debug(): this;
    info(): this;
    warn(): this;
    error(): this;
}
export declare const GlobalConfig: LogConfig;
