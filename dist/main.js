"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors_middleware_1 = require("./cors.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors_middleware_1.CorsMiddleware);
    const serviceConfiguracion = app.get(config_1.ConfigService);
    await app.listen(serviceConfiguracion.get('PORT_SERVER'));
}
bootstrap();
//# sourceMappingURL=main.js.map