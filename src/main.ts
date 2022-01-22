import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function start() {
  const app = await NestFactory.create(AppModule);

// essa configuração invoca o class-validator e class-transformer
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
//
  await app.listen(3000);
}
start();
