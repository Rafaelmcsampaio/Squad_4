import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request, Response } from 'express';
import { traceContext } from '../common/trace-context';
import { AppLogger } from './logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: AppLogger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest<Request>();
    const response = httpContext.getResponse<Response>();

    return next.handle().pipe(
      tap(() => {
        const log = {
          method: request.method,
          route: request.originalUrl,
          status: response.statusCode,
          duration_ms: Date.now() - now,
          trace_id: traceContext.getTraceId() || 'N/A',
          span_id: traceContext.getSpanId() || 'N/A',
          timestamp: new Date().toISOString(),
        };

        this.logger.log('HTTP Request', log);
      }),
    );
  }
}
