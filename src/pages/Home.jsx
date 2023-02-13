import React from "react";
//import { Link } from "react-router-dom";
import QuizzesList from "../components/QuizzesList";
import quizzesBank from "../data/quizzes.json";

function Home() {
  const quizzesList = quizzesBank;

  return (
    <div>
      <h2>Home</h2>
      {/* <Link to="/quiz">Take Quiz</Link> */}
      <hr />

      <QuizzesList quizzesInfo={quizzesList} />
    </div>
  );
}

export default Home;
