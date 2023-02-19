import React, { useState } from "react";

function QuizBuilderAnswer({ answers, onChangeText, onIsCorrectChange }) {
  const ans1 = answers[0];
  const ans2 = answers[1];
  const ans3 = answers[2];
  const ans4 = answers[3];
  const [hack, setHack] = useState(false);

  const onChange = (event, id) => {
    onChangeText(event, id);
    setHack(!hack);
  };

  return (
    <>
      <fieldset className="options-section">
        <legend>Options: </legend>
        <div>
          <label htmlFor="op1">Option 1: </label>
          <input
            id="op1"
            type="text"
            onChange={(event) => onChange(event, 0)}
            value={ans1.text}
          />
          <input
            type="checkbox"
            className="isTrue"
            onChange={(event) => onIsCorrectChange(event, 0)}
            checked={ans1.isCorrect}
          />

          <label htmlFor="op2">Option 2: </label>
          <input
            id="op2"
            type="text"
            onChange={(event) => onChange(event, 1)}
            value={ans2.text}
          />
          <input
            type="checkbox"
            className="isTrue"
            onChange={(event) => onIsCorrectChange(event, 1)}
            checked={ans2.isCorrect}
          />
        </div>
        <div>
          <label htmlFor="op3">Option 3: </label>
          <input
            id="op3"
            type="text"
            onChange={(event) => onChange(event, 2)}
            value={ans3.text}
          />
          <input
            type="checkbox"
            className="isTrue"
            onChange={(event) => onIsCorrectChange(event, 2)}
            checked={ans3.isCorrect}
          />
          <label htmlFor="op4">Option 4: </label>
          <input
            id="op4"
            type="text"
            onChange={(event) => onChange(event, 3)}
            value={ans4.text}
          />
          <input
            type="checkbox"
            className="isTrue"
            onChange={(event) => onIsCorrectChange(event, 3)}
            checked={ans4.isCorrect}
          />
        </div>
      </fieldset>
    </>
  );
}

export default QuizBuilderAnswer;
