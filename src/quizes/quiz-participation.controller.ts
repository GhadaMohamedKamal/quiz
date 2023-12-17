// quiz/quiz-participation.controller.ts
import { Controller, Post, Param, Body } from '@nestjs/common';
import { QuizParticipationService } from './quiz-participation.service'; // Import the QuizParticipationService
import { QuizParticipationDto } from './dto/quiz-participation.dto'; // Import the DTO

@Controller('quizzes')
export class QuizParticipationController {
  constructor(private readonly quizParticipationService: QuizParticipationService) {}

 
  @Post(':id/participate')
  async participateInQuiz(@Param('id') quizId: number, @Body() participationData: QuizParticipationDto) {
    
    return await this.quizParticipationService.participateInQuiz(quizId, participationData);
  }
}
