import React from "react";
import QuizzesList from "../components/QuizzesList";
import * as quizzesBank from "../services/quizzes-services";

import "../stylesheets/pages.css";

function Home() {
  const quizzesList = quizzesBank.getQuizzes();
  return (
    <div>
      <h1>Quizz App</h1>
      {/* <Link to="/quiz">Take Quiz</Link> */}
      <hr />

      <QuizzesList quizzesInfo={quizzesList} />
    </div>
  );
}

export default Home;
