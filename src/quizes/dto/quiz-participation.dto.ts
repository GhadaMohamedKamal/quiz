// quizzes/dto/quiz-participation.dto.ts
import { IsArray, IsNotEmpty } from 'class-validator';

export class QuizParticipationDto {
  @IsNotEmpty()
  @IsArray()
  selectedOptions: number[]; // An array of selected option IDs
}
