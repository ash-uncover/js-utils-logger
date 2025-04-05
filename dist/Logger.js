"use strict";
/* tslint:disable:no-console */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Logger_name, _Logger_config;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const LogLevels_1 = require("./LogLevels");
const LogConfig_1 = require("./LogConfig");
function checkLevel(logger, level) {
    return logger.config.level <= level && LogConfig_1.GlobalConfig.level <= level;
}
class Logger {
    // #endregion
    // #region Constructor
    constructor(name = 'Logger', config = new LogConfig_1.LogConfig()) {
        // #region Attributes
        _Logger_name.set(this, void 0);
        _Logger_config.set(this, void 0);
        __classPrivateFieldSet(this, _Logger_name, name, "f");
        __classPrivateFieldSet(this, _Logger_config, config, "f");
    }
    // #endregion
    // #region Getters & Setters
    get name() {
        return __classPrivateFieldGet(this, _Logger_name, "f");
    }
    get config() {
        return __classPrivateFieldGet(this, _Logger_config, "f");
    }
    get level() {
        return __classPrivateFieldGet(this, _Logger_config, "f").level;
    }
    // #endregion
    // #region Public Methods
    message(msg) {
        return `${this.name} - ${msg}`;
    }
    debug(msg) {
        if (checkLevel(this, LogLevels_1.LogLevels.DEBUG)) {
            console.log(this.message(msg));
        }
    }
    info(msg) {
        if (checkLevel(this, LogLevels_1.LogLevels.INFO)) {
            console.log(this.message(msg));
        }
    }
    warn(msg) {
        if (checkLevel(this, LogLevels_1.LogLevels.WARN)) {
            console.warn(this.message(msg));
        }
    }
    error(msg) {
        if (checkLevel(this, LogLevels_1.LogLevels.ERROR)) {
            console.error(this.message(msg));
        }
    }
}
exports.Logger = Logger;
_Logger_name = new WeakMap(), _Logger_config = new WeakMap();
