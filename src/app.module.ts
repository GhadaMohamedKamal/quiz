import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Quiz } from './entities/quiz.entity';
import { Answer } from './entities/answer.entity';
import { Option } from './entities/option.entity';
import { Question } from './entities/question.entity';
import { Score } from './entities/score.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost', // Database server host
      port: 5432, // Database server port
      username: 'postgres', // Database username
      password: 'ghada', // Database password
      database: 'quiz', // Database name
      entities: [User, Quiz, Answer, Option, Question, Score], // List of entity classes
      synchronize: true, // Auto-create database schema based on entities (only for development)
    }),
    TypeOrmModule.forFeature([User, Quiz, Answer, Option, Question, Score]), // Import specified entities
  ],
  controllers: [AppController], // Register controllers
  providers: [AppService], // Register providers (services) 
})
export class AppModule {}
