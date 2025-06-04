import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLogger } from './logger/logger.service';
import { LoggingInterceptor } from './logger/logging.interceptor';

async function bootstrap() {
  const logger = new AppLogger(); // inicializa primeiro

  const app = await NestFactory.create(AppModule, {
    logger, // usa seu AppLogger no Nest também
  });

  // REMOVA a linha do middleware aqui, já vai estar no AppModule
  // app.use(new TraceIdMiddleware().use);

  app.useGlobalInterceptors(new LoggingInterceptor(logger)); // aplica interceptor

  await app.listen(3000);
}
bootstrap();
