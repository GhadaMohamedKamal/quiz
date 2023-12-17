import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

// Import the User entity and Repository from TypeORM
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    
    // Inject the UserRepository from TypeORM
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    // Find a user by username
    const user = await this.findUserByUsername(username);

    if (user && (await this.comparePasswords(password, user.password))) {
      // User exists and password is correct
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    // Generate and return a JWT token
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private async findUserByUsername(username: string): Promise<User | null> {
    try {
      // Use the UserRepository to find a user by username
      const user = await this.userRepository.findOne({ username });
      return user || null;
    } catch (error) {
      // Handle any potential errors here (e.g., database connection error)
      throw new NotFoundException('User not found'); // You can customize the error message
    }
  }

  private async comparePasswords(enteredPassword: string, storedPassword: string): Promise<boolean> {
    return bcrypt.compare(enteredPassword, storedPassword);
  }
}
