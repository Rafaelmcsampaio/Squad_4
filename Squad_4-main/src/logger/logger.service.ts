import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, format, transports } from 'winston';
import { traceContext } from '../common/trace-context';

@Injectable()
export class AppLogger implements LoggerService {
  private logger = createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp(),
      format.printf(({ timestamp, level, message, ...meta }) => {
        const traceId = traceContext.getTraceId() || 'N/A';
        return JSON.stringify({
          timestamp,
          level,
          message,
          trace_id: traceId,
          ...meta,
        });
      })
    ),
    transports: [new transports.Console()],
  });

  log(message: string, meta: Record<string, any> = {}) {
    this.logger.info(message, meta);
  }

  error(message: string, meta: Record<string, any> = {}) {
    this.logger.error(message, meta);
  }

  warn(message: string, meta: Record<string, any> = {}) {
    this.logger.warn(message, meta);
  }

  debug?(message: string, meta: Record<string, any> = {}) {
    this.logger.debug(message, meta);
  }

  verbose?(message: string, meta: Record<string, any> = {}) {
    this.logger.verbose(message, meta);
  }
}