import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    // Si no hay token en la cabecera, denegar acceso
    if (!authHeader) return false;

    try {
      const token = authHeader.split(' ')[1]; // Extrae el token del header
      const decoded = this.jwtService.verify(token); // Verifica el token
      request.user = decoded; // Guarda los datos del usuario en la request
      return true;
    } catch {
      return false; // Si el token es inválido, denegar acceso
    }
  }
}
