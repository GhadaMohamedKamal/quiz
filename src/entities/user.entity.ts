import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Quiz } from './quiz.entity'; // Import the Quiz entity

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Quiz, (quiz: Quiz) => quiz.user)
  quizzes: Quiz[]; // Define the one-to-many relationship with quizzes
}
