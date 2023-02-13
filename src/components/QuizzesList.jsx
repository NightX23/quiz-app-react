import React from "react";
import { Link } from "react-router-dom";

function QuizzesList({ quizzesInfo }) {
  return (
    <div className="question-card">
      <ul>
        {quizzesInfo.map((quiz) => {
          const quizUrl = "quiz/" + quiz.id;
          return (
            <li key={quiz.id}>
              <Link id to={quizUrl}>
                {quiz.header}
              </Link>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuizzesList;
