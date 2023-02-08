import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import FinalResults from "./components/FinalResults";
import questionBank from "./data/questions.json";

import "./App.css";

function App() {
  const [finalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = questionBank;

  const optionClicked = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    currentQuestion + 1 < questions.length
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
      <h1>Header</h1>

      <h2>Current Score: {score}</h2>
      {finalResults ? (
        <FinalResults
          score={score}
          questions={questions}
          restartGame={restartGame}
        />
      ) : (
        <QuestionCard
          currentQuestion={currentQuestion}
          questions={questions}
          optionClicked={optionClicked}
        />
      )}
    </div>
  );
}

export default App;
