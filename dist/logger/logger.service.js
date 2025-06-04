"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogger = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
const trace_context_1 = require("../common/trace-context");
let AppLogger = class AppLogger {
    constructor() {
        this.logger = (0, winston_1.createLogger)({
            level: 'info',
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message, ...meta }) => {
                const traceId = trace_context_1.traceContext.getTraceId() || 'N/A';
                return JSON.stringify({
                    timestamp,
                    level,
                    message,
                    trace_id: traceId,
                    ...meta,
                });
            })),
            transports: [new winston_1.transports.Console()],
        });
    }
    log(message, meta = {}) {
        this.logger.info(message, meta);
    }
    error(message, meta = {}) {
        this.logger.error(message, meta);
    }
    warn(message, meta = {}) {
        this.logger.warn(message, meta);
    }
    debug(message, meta = {}) {
        this.logger.debug(message, meta);
    }
    verbose(message, meta = {}) {
        this.logger.verbose(message, meta);
    }
};
exports.AppLogger = AppLogger;
exports.AppLogger = AppLogger = __decorate([
    (0, common_1.Injectable)()
], AppLogger);
//# sourceMappingURL=logger.service.js.map