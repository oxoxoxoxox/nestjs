import { NestFactory } from '@nestjs/core';
import { AddModule, AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const add = await NestFactory.create(AddModule);
  await add.listen(3001);
}
bootstrap();
