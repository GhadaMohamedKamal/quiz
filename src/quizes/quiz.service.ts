// quiz.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,
  ) {}

  async createQuiz(quizData: { title: string }) {
    const quiz = this.quizRepository.create(quizData);
    return await this.quizRepository.save(quiz);
  }

  async createQuestion(questionData: { text: string, quizId: number }) {
    const question = this.questionRepository.create(questionData);
    return await this.questionRepository.save(question);
  }

  async createOption(optionData: { text: string, isCorrect: boolean, questionId: number }) {
    const option = this.optionRepository.create(optionData);
    return await this.optionRepository.save(option);
  }
}
