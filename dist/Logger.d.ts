import { LogLevel } from './LogLevels';
import { LogConfig } from './LogConfig';
export declare class Logger {
    #private;
    constructor(name?: string, config?: LogConfig);
    get name(): string;
    get config(): LogConfig;
    get level(): LogLevel;
    message(msg: string): string;
    debug(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
}
