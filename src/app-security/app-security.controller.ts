import { Controller, Post, Body } from '@nestjs/common';
import { AppSecurityService } from './app-security.service';

@Controller('auth') // Esto hace que todas las rutas sean /auth/...
export class AppSecurityController {
  constructor(private readonly appSecurityService: AppSecurityService) {}

  @Post('login') // api/auth/login
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.appSecurityService.validateUser(body.email, body.password);
    if (!user) {
      return { message: 'Credenciales inválidas' };
    }
    return this.appSecurityService.login(user);
  }
}
