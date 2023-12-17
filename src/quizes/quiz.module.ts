// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz/quiz.controller';
import { QuizService } from './quiz/quiz.service';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Your database configuration here
    }),
    TypeOrmModule.forFeature([Quiz, Question, Option]),
  ],
  controllers: [QuizController],
  providers: [QuizService],
})
export class AppModule {}
