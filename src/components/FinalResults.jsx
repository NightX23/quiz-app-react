import React from "react";

function FinalResults({ score, questions, restartGame }) {
  return (
    <div className="final-results">
      <h1>Final Results</h1>

      <h2>
        {score} out of {questions.length} correct -{" "}
        {(score * 100) / questions.length}%
      </h2>
      <button onClick={() => restartGame()}>Restart Game</button>
    </div>
  );
}

export default FinalResults;
