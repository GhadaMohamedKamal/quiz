import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz/quiz.controller';
import { QuizService } from './quiz/quiz.service';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Your database configuration here
    }),
    TypeOrmModule.forFeature([Quiz, Question, Option]),
    ClientsModule.register([
      {
        name: 'NATS_CLIENT', // You can name it as you like
        transport: Transport.NATS, // Use NATS transport
        options: {
          url: 'nats://localhost:4222', // NATS server URL
        },
      },
    ]),
  ],
  controllers: [QuizController],
  providers: [QuizService],
})
export class AppModule {}
