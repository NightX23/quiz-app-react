import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizBuilder from "../components/QuizBuilder";
import { addQuiz } from "../services/quizzes-services";

function Create() {
  const [quiz, setQuiz] = useState({
    id: null,
    title: "",
    questions: [
      {
        text: "",
        options: [
          { id: null, text: "", isCorrect: false },
          { id: null, text: "", isCorrect: false },
          { id: null, text: "", isCorrect: false },
          { id: null, text: "", isCorrect: false },
        ],
      },
    ],
  });

  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const onSubmit = (event) => {
    event.preventDefault();
    addQuiz(quiz);
    navigate("/");
  };

  const onAnswerChange = (answers) => {
    const newQuestion = {
      ...quiz.questions[currentQuestionIndex],
      options: answers,
    };
    quiz.questions[currentQuestionIndex] = newQuestion;
    setQuiz(quiz);
  };

  return (
    <>
      <h1>Create</h1>
      <hr />
      <QuizBuilder
        selectedQuiz={quiz}
        onAnswerChange={onAnswerChange}
        currentQuestionIndex={currentQuestionIndex}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Create;
