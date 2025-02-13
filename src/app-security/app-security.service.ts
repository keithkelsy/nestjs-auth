import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppSecurityService {
  private users = [{ id: 1, email: 'admin@example.com', password: '$2a$10$OF.iYSgANEf14t4NHY0hKO66Ok9QHKmeoHVmMfuBjZqRpgfKHJlfu' }]; // Simulación de usuarios

  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = this.users.find(user => user.email === email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
