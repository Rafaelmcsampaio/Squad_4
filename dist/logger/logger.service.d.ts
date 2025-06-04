import { LoggerService } from '@nestjs/common';
export declare class AppLogger implements LoggerService {
    private logger;
    log(message: string, meta?: Record<string, any>): void;
    error(message: string, meta?: Record<string, any>): void;
    warn(message: string, meta?: Record<string, any>): void;
    debug?(message: string, meta?: Record<string, any>): void;
    verbose?(message: string, meta?: Record<string, any>): void;
}
