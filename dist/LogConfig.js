"use strict";
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
var _LogConfig_level;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalConfig = exports.LogConfig = void 0;
const LogLevels_1 = require("./LogLevels");
class LogConfig {
    // #endregion
    // #region Constructor
    constructor(level = LogLevels_1.LogLevels.ERROR) {
        // #region Attributes
        _LogConfig_level.set(this, void 0);
        __classPrivateFieldSet(this, _LogConfig_level, level, "f");
    }
    // #endregion
    // #region Getters & Setters
    get level() {
        return __classPrivateFieldGet(this, _LogConfig_level, "f");
    }
    // #endregion
    // #region Public Methods
    off() {
        __classPrivateFieldSet(this, _LogConfig_level, LogLevels_1.LogLevels.OFF, "f");
        return this;
    }
    debug() {
        __classPrivateFieldSet(this, _LogConfig_level, LogLevels_1.LogLevels.DEBUG, "f");
        return this;
    }
    info() {
        __classPrivateFieldSet(this, _LogConfig_level, LogLevels_1.LogLevels.INFO, "f");
        return this;
    }
    warn() {
        __classPrivateFieldSet(this, _LogConfig_level, LogLevels_1.LogLevels.WARN, "f");
        return this;
    }
    error() {
        __classPrivateFieldSet(this, _LogConfig_level, LogLevels_1.LogLevels.ERROR, "f");
        return this;
    }
}
exports.LogConfig = LogConfig;
_LogConfig_level = new WeakMap();
exports.GlobalConfig = new LogConfig().debug();
