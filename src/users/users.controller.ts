// users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registrationData: { username: string, password: string }) {
    try {
      // Call  authService method
      const result = await this.authService.register(registrationData);
      return { message: 'User registered successfully' };
    } catch (error) {
      // Handle registration errors (e.g., username already exists)
      return { error: error.message };
    }
  }

  @Post('login')
  async login(@Body() loginData: { username: string, password: string }) {
    try {
      // Call authService method
      const result = await this.authService.login(loginData);
      return result; // Return the JWT token upon successful login
    } catch (error) {
      // Handle login errors (e.g., invalid username or password)
      return { error: error.message };
    }
  }
}
