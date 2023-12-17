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
import { AppService } from './app.service';
import { QuizParticipationController } from './quiz-participation.controller'; // Import the QuizParticipationController
import { QuizParticipationService } from './quiz-participation.service'; // Import the QuizParticipationService
import { ClientsModule, Transport } from '@nestjs/microservices';

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
    ClientsModule.register([
      {
        name: 'NATS_CLIENT',
        transport: Transport.NATS,
        options: {
          url: 'nats://localhost:4222',
        },
      },
    ]),
  ],
  controllers: [AppController, QuizParticipationController], // Include the QuizParticipationController
  providers: [AppService, QuizParticipationService], // Include the QuizParticipationService
})
export class AppModule {}
