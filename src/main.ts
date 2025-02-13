import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); 
  app.setGlobalPrefix('api'); // Opcional: Prefijo global para todas las rutas

  await app.listen(3000); 
  console.log(`🚀 Servidor corriendo en: http://localhost:3000`);
}
bootstrap();
