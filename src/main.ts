import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Environment } from 'roit-environment'
import {
  HttpExceptionFilter, RoitResponseInterceptor
  // RoitResponseInterceptor
} from '@roit/roit-response-handler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalInterceptors(new RoitResponseInterceptor());
  await app.listen(Environment.getProperty('port') || 3000);
}
bootstrap();
