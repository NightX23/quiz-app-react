import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function FinalResults({ score, nquestions, restartGame }) {
  return (
    <div className="final-results">
      <h1>Final Results</h1>

      <h2>
        {score} out of {nquestions} correct - {(score * 100) / nquestions}%
      </h2>
      <button onClick={() => restartGame()}>Restart Game</button>
      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
}

FinalResults.propTypes = {
  score: PropTypes.number.isRequired,
  nquestions: PropTypes.number.isRequired,
};

export default FinalResults;
