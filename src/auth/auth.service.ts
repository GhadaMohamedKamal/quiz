import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.findUserByUsername(username);

    if (user && (await this.comparePasswords(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registrationData: { username: string, password: string }) {
    // Check if the username already exists
    const existingUser = await this.findUserByUsername(registrationData.username);

    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    // Create a new user entity and save it to the database
    const newUser = new User();
    newUser.username = registrationData.username;
    newUser.password = await this.hashPassword(registrationData.password);
    
    try {
      await this.userRepository.save(newUser);
      return { message: 'User registered successfully' };
    } catch (error) {
      // Handle any potential errors (e.g., database connection error)
      throw new NotFoundException('User registration failed');
    }
  }

  private async findUserByUsername(username: string): Promise<User | null> {
    try {
      const user = await this.userRepository.findOne({ username });
      return user || null;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  private async comparePasswords(enteredPassword: string, storedPassword: string): Promise<boolean> {
    return bcrypt.compare(enteredPassword, storedPassword);
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }
}
