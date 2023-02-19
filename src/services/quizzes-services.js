import DataBank from "../data/quizzes.json";

let quizzesBank = DataBank;

export function getQuizzes() {
  return quizzesBank;
}

export function addQuiz(quiz) {
  quizzesBank.push(quiz);
  return quizzesBank;
}

export function updateQuiz(id, quiz) {
  const oldQuizIndex = quizzesBank.findIndex((q) => q.id === id);
  quizzesBank[oldQuizIndex] = quiz;
  return quizzesBank;
}
