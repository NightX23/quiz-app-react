import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/components.css";

function QuizzesList({ quizzesInfo }) {
  return (
    <div className="main-container">
      <Link to={"/create"}>
        <button className="btn-create">Create Quiz</button>
      </Link>
      <hr />
      <ul>
        {quizzesInfo.map((quiz) => {
          const quizUrl = "quiz/" + quiz.id;
          return (
            <li key={quiz.id}>
              <Link id to={quizUrl}>
                {quiz.header}
              </Link>
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuizzesList;
