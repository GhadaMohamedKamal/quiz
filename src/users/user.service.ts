// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UsersController } from './src/auth/users.controller'; 
import { AuthService } from './src/auth/auth.service'; 
import { User } from './src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Your database configuration here
    }),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secret-key', // Replace with your JWT secret
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [UsersController],
  providers: [AuthService],
})
export class AppModule {}
