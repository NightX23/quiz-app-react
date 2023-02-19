import React, { useState } from "react";
import "../stylesheets/components.css";
import QuizBuilderAnswer from "./QuizBuilderAnswer";

function QuizBuilder({
  selectedQuiz,
  onSubmit,
  onAnswerChange,
  currentQuestionIndex,
}) {
  const question = selectedQuiz.questions[currentQuestionIndex];

  const onAnswerTextChange = (event, answerId) => {
    const answer = question.options[answerId];
    const updatedAnswer = { ...answer, text: event.target.value };

    question.options[answerId] = updatedAnswer;
    onAnswerChange(question.options);
  };

  const onIsCorrectChange = (event, answerId) => {
    const answer = question.options[answerId];
    const updatedAnswer = { ...answer, isCorrect: event.target.checked };
    question.options[answerId] = updatedAnswer;
    onAnswerChange(question.options);
  };

  return (
    <>
      <div className="main-container final-results">
        <form action="" method="post" onSubmit={onSubmit}>
          <div>
            <label>Quiz Title: </label>
            <input type="text" />
          </div>
          <div>
            <fieldset>
              <legend>Questions: {currentQuestionIndex + 1}/10 </legend>
              <button type="button"></button>
              <button type="button"></button>
              <br />
              <br />
              <label>Question: </label>
              <input type="text" />

              <QuizBuilderAnswer
                onChangeText={onAnswerTextChange}
                onIsCorrectChange={onIsCorrectChange}
                answers={question.options}
              />
              <button type="button" className="btn-delete">
                Go Back
              </button>
              <button type="submit" value="Submit" className="btn-create">
                Create
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </>
  );
}

export default QuizBuilder;
