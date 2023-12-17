// quiz.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  async createQuiz(@Body() quizData: { title: string }) {
    try {
      const quiz = await this.quizService.createQuiz(quizData);
      return quiz;
    } catch (error) {
      return { error: error.message };
    }
  }
}
