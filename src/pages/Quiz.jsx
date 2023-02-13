import React, { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import FinalResults from "../components/FinalResults";
import quizzesBank from "../data/quizzes.json";
import { useParams } from "react-router-dom";

function Quiz() {
  let { quizid } = useParams();
  let qid = 0;
  if (quizid !== undefined) qid = parseInt(quizid);

  const [finalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const quizzes = quizzesBank;
  const quiz = quizzes[qid];

  const optionClicked = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    currentQuestion + 1 < quiz.questions.length
      ? setCurrentQuestion(currentQuestion + 1)
      : setFinalResults(true);
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  return (
    <div className="App">
      <h1>{quiz.header}</h1>
      <h2>Current Score: {score}</h2>
      {finalResults ? (
        <FinalResults
          score={score}
          nquestions={quiz.questions.length}
          restartGame={restartGame}
        />
      ) : (
        <QuestionCard
          currentQuestion={currentQuestion}
          questions={quiz.questions}
          optionClicked={optionClicked}
        />
      )}{" "}
    </div>
  );
}

export default Quiz;
