// quiz-participation.service.ts
import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientsModule, MessagePattern } from '@nestjs/microservices';
import { QuizParticipationDto } from './dto/quiz-participation.dto';

@Injectable()
export class QuizParticipationService {
  constructor(private readonly natsClient: ClientProxy) {}

  async participateInQuiz(quizId: number, participationDto: QuizParticipationDto) {
    // Handle quiz participation logic here

    // Publish real-time update using NATS
    this.natsClient.emit('quiz_participation', { quizId, ...participationDto });

    // Return the result of quiz participation
    // ...
  }

  // Subscribe to NATS events for real-time updates (if needed)
  @MessagePattern('quiz_participation')
  handleQuizParticipation(data: any) {
    // Handle incoming quiz participation events
    // ...
  }
}
