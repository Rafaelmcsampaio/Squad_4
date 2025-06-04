import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppLogger } from './logger/logger.service';
import { TraceIdMiddleware } from './middleware/trace-id.middleware';
import { AppController } from './app.controller';  // Importa o controller

@Module({
  imports: [],
  controllers: [AppController],  // Registra o controller
  providers: [AppLogger],
  exports: [AppLogger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TraceIdMiddleware).forRoutes('*'); // Aplica middleware em todas rotas
  }
}
