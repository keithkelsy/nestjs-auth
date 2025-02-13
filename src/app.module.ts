import { Module } from '@nestjs/common';
import { AppSecurityModule } from './app-security/app-security.module';
import { ProtectedController } from './protected.controller';

@Module({
  imports: [AppSecurityModule], // Importar módulo de seguridad
  controllers: [ProtectedController],
})
export class AppModule {}
