import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsMiddleware } from './cors.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(CorsMiddleware);
  const serviceConfiguracion = app.get(ConfigService);
  await app.listen(serviceConfiguracion.get('PORT_SERVER'));
}

bootstrap();
