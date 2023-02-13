import React from "react";
//import { Link } from "react-router-dom";
import QuizzesList from "../components/QuizzesList";
import quizzesBank from "../data/quizzes.json";

import "../stylesheets/pages.css";

function Home() {
  const quizzesList = quizzesBank;
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
