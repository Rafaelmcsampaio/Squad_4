"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_service_1 = require("./logger/logger.service");
const logging_interceptor_1 = require("./logger/logging.interceptor");
async function bootstrap() {
    const logger = new logger_service_1.AppLogger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger,
    });
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor(logger));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map