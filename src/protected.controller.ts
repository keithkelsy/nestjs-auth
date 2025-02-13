import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from './app-security/jwt-auth.guard';

@Controller('protected')
export class ProtectedController {
  @UseGuards(JwtAuthGuard) // Protege la ruta con el guard
  @Get()
  getProtectedResource(@Request() req: any) {
    return { message: 'Ruta protegida', user: req.user };
  }
}
