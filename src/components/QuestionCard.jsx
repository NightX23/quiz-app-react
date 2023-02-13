import React from "react";
import "../stylesheets/components.css";
import PropTypes from "prop-types";

function QuestionCard({ currentQuestion, questions, optionClicked }) {
  if (questions.length < 0) return <p>Loading...</p>;
  return (
    <div className="main-container question-card">
      <div className="card-column">
        <h2 className="question-text">{questions[currentQuestion].text}</h2>
        <hr />
        <h2 className="question-counter-text">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
      </div>
      <div className="card-column">
        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                onClick={() => optionClicked(option.isCorrect)}
                key={option.id}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

QuestionCard.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          isCorrect: PropTypes.bool.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default QuestionCard;
