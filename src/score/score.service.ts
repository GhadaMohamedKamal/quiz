// score.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScoreService {
  private userScores: Record<number, number> = {}; 

  //  data for users and their correct answers
  private userAnswers: Record<number, number[]> = {
    1: [1, 2, 3],
    2: [1, 2, 4],
  
  };

  // Calculate the score for a user based on their answers
  calculateScore(userId: number): number {
    const correctAnswers = this.userAnswers[userId] || [];
    return correctAnswers.length;
  }

  // Update the user's score
  updateScore(userId: number): number {
    const score = this.calculateScore(userId);
    this.userScores[userId] = score;
    return score;
  }

  // Get the user's score
  getUserScore(userId: number): number {
    return this.userScores[userId] || 0;
  }

  // Get the leaderboard data
  getLeaderboardData(): Record<number, number> {
    // Sort users by score in descending order
    const sortedUsers = Object.keys(this.userScores).sort(
      (a, b) => this.userScores[b] - this.userScores[a]
    );

    // Create a leaderboard object with user IDs and scores
    const leaderboard: Record<number, number> = {};
    sortedUsers.forEach((userId, index) => {
      leaderboard[parseInt(userId)] = this.userScores[userId];
    });

    return leaderboard;
  }
}
