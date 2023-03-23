import { NestFactory } from '@nestjs/core';
import { HierarchyModule } from './hierarchy.module';

async function bootstrap() {
  const app = await NestFactory.create(HierarchyModule);
  await app.listen(3003);
}
bootstrap();
