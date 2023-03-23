import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()  // habilitado para que se possa ver infomações do verbo Options
  await app.listen(3000);
}
bootstrap();
