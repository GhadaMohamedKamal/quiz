// Import necessary modules and entities
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Quiz } from './entities/quiz.entity';
import { Answer } from './entities/answer.entity';
import { Option } from './entities/option.entity';
import { Question } from './entities/question.entity';
import { Score } from './entities/score.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service'; // Import the AppService

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ghada',
      database: 'quiz',
      entities: [User, Quiz, Answer, Option, Question, Score],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Quiz, Answer, Option, Question, Score]),
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
