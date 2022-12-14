import { React, useState } from "react";

function QuizCard({
  question,
  correctAnswer,
  options,
  questionNumber,
  answerCorrect,
  answerIncorrect,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [flip, setFlip] = useState(false);

  const revealClassName =
    selectedOption === ""
      ? "quiz__reveal--unanswered"
      : selectedOption === correctAnswer
      ? "quiz__reveal--correct"
      : "quiz__reveal--wrong";

  return (
    <div className="quiz__card">
      <fieldset className="quiz__question">
        <legend className="quiz__question-text">{`${questionNumber}.  ${question}`}</legend>
        {options.map((option) => {
          return (
            <label className="quiz__radio" key={option.optionNumber}>
              <input
                type="radio"
                className="quiz__option"
                name={questionNumber}
                value={option.value}
                checked={selectedOption === option.value}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              />{" "}
              <span className="quiz__option-text">{option.value}</span>
            </label>
          );
        })}
        <button
          type="button"
          className="quiz__reveal-button"
          onClick={() => {
            setFlip(!flip);
            if (correctAnswer === selectedOption) {
              answerCorrect();
            } else {
              answerIncorrect();
            }
          }}
          disabled={selectedOption === ""}
        >
          Check Answer
        </button>
      </fieldset>
      <div
        className={`quiz__reveal ${revealClassName} ${
          flip ? "quiz__reveal--visible" : ""
        }`}
      >
        <p className="quiz__reveal-question">{question}</p>
        <i
          className={`quiz__reveal-icon ${
            selectedOption === correctAnswer ? "gg-check" : "gg-close"
          }`}
        ></i>
        <p className="quiz__reveal-answer">
          The correct answer is <strong>{correctAnswer}</strong>
        </p>
      </div>
    </div>
  );
}

export default QuizCard;
