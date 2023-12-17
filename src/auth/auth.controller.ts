import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginData: { username: string, password: string }) {
    // Call your authService method to handle login logic
    return await this.authService.login(loginData);
  }

  @Post('register')
  async register(@Body() registrationData: { username: string, password: string }) {
    // Call your authService method to handle registration logic
    return await this.authService.register(registrationData);
  }
}
