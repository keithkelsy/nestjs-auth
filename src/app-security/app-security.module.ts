import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AppSecurityService } from './app-security.service';
import { AppSecurityController } from './app-security.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET_KEY', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  providers: [AppSecurityService, JwtAuthGuard], 
  controllers: [AppSecurityController],
  exports: [JwtModule, AppSecurityService, JwtAuthGuard], 
})
export class AppSecurityModule {}
