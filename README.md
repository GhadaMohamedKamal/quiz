# Real-Time Quiz Application

## Description
This application is a dynamic, real-time quiz platform that allows users to participate in quizzes interactively. It's designed to provide an engaging and competitive environment where users can join various quizzes, answer questions, and see results in real time. The application is ideal for educational purposes, group activities, or just for fun and learning.

## Features
- **User Registration & Authentication**: Users can securely register and log in to access their profiles and quiz history.
- **Quiz Creation**: Authenticated users have the capability to create custom quizzes with multiple-choice questions, tailoring the experience to specific topics or themes.
- **Real-Time Quiz Participation**: Users can join live quizzes hosted by others and answer questions as they are presented, adding to the competitive and interactive nature of the platform.
- **Score Calculation & Leaderboard**: The application features dynamic score calculation, with a real-time leaderboard that updates as participants answer questions, fostering a competitive environment.
- **Streak Score Feature**: To add an extra layer of excitement, users gain extra points for consecutive correct answers, encouraging consistent performance and deeper engagement.

## Technologies Used
- **NestJS**: Utilized as the core backend framework, offering a scalable and efficient way to manage server-side operations.
- **NATS**: Implemented for handling real-time events, ensuring swift and reliable communication between server and clients.
- **PostgreSQL**: Employed as the primary database to store user information, quiz data, questions, and answers, guaranteeing data integrity and flexibility.

## Installation
1. **Clone the repository**: `git clone [repository-link]`
2. **Navigate to the project directory**: `cd real-time-quiz-app`
3. **Install dependencies**: `npm install`
4. **Set up the environment variables**: Copy the `.env.example` file to a new file named `.env`, and update it with your database credentials and other configurations.
5. **Start the application**: `npm start`

## Usage
After installation, you can:
- **Run the server**: Execute `npm run start` to start the NestJS server.
- **Create a Quiz**: Log in and navigate to the quiz creation section to create new quizzes.
- **Join a Quiz**: Browse available quizzes and join one to start participating in real time.
- **View Leaderboard**: Check the leaderboard to see your ranking and scores.

## Testing on cyoress
npm install --save-dev cypress




## Contact
For any inquiries or further information, please contact 
ghadablanke@gmail.com
