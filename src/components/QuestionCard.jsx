import React from "react";
import "../App.css";

import PropTypes from "prop-types";

function QuestionCard({ currentQuestion, questions, optionClicked }) {
  return (
    <div className="question-card">
      <h2>
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <h3 className="question-text">{questions[currentQuestion].text}</h3>

      <ul>
        {questions[currentQuestion].options.map((option) => {
          return (
            <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>
              {option.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

QuestionCard.propTypes = {};

export default QuestionCard;
