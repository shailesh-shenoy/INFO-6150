import React from "react";
import { useState } from "react";
import QuizCard from "./QuizCard";

const quizQAList = [
  {
    questionNumber: 1,
    question: "More than ___ countries produce coffee.",
    correctAnswer: "50",
    options: [
      {
        optionNumber: 1,
        value: "100",
      },
      {
        optionNumber: 2,
        value: "50",
      },
      {
        optionNumber: 3,
        value: "25",
      },
    ],
  },
  {
    questionNumber: 2,
    question: "Inhaling coffee is a form of aromatherapy that can…",
    correctAnswer: "Both :)",
    options: [
      {
        optionNumber: 1,
        value: "Startle your senses",
      },
      {
        optionNumber: 2,
        value: "Perk you up instantly",
      },
      {
        optionNumber: 3,
        value: "Both :)",
      },
    ],
  },
  {
    questionNumber: 3,
    question: "Before coffee was made into a drink, it was eaten as…",
    correctAnswer: "Raw berries blended with fat to make an 'energy bar'",
    options: [
      {
        optionNumber: 1,
        value: "Dried, crunchy beans",
      },
      {
        optionNumber: 2,
        value: "Raw berries blended with fat to make an 'energy bar'",
      },
      {
        optionNumber: 3,
        value: "Ground fruit pulp baked into breads and cakes",
      },
    ],
  },

  {
    questionNumber: 4,
    question: "Coffee plants originated from which continent?",
    correctAnswer: "Africa",
    options: [
      {
        optionNumber: 1,
        value: "Africa",
      },
      {
        optionNumber: 2,
        value: "Asia",
      },
      {
        optionNumber: 3,
        value: "South America",
      },
    ],
  },

  {
    questionNumber: 5,
    question: "How many cups of coffee are consumed each year in the world?",
    correctAnswer: "400 billion",
    options: [
      {
        optionNumber: 1,
        value: "900 million",
      },
      {
        optionNumber: 2,
        value: "2 billion",
      },
      {
        optionNumber: 3,
        value: "200 billion",
      },
      {
        optionNumber: 4,
        value: "400 billion",
      },
    ],
  },

  {
    questionNumber: 6,
    question: "Dark roasted coffee beans have…",
    correctAnswer: "Both",
    options: [
      {
        optionNumber: 1,
        value: "Richer flavor",
      },
      {
        optionNumber: 2,
        value: "Less caffeine",
      },
      {
        optionNumber: 3,
        value: "Both",
      },
    ],
  },

  {
    questionNumber: 7,
    question: "To which cuisine does the coffee drink Cappuccino belong?",
    correctAnswer: "Italian",
    options: [
      {
        optionNumber: 1,
        value: "French",
      },
      {
        optionNumber: 2,
        value: "Italian",
      },
      {
        optionNumber: 3,
        value: "Romanian",
      },
    ],
  },
  {
    questionNumber: 8,
    question: `Where did the word "frappuccino" originate?`,
    correctAnswer: "Massachusetts",
    options: [
      {
        optionNumber: 1,
        value: "Italy",
      },
      {
        optionNumber: 2,
        value: "Massachusetts",
      },
      {
        optionNumber: 3,
        value: "Washington",
      },
    ],
  },

  {
    questionNumber: 9,
    question: "From which U.S. City did Starbucks originate?",
    correctAnswer: "Seattle",
    options: [
      {
        optionNumber: 1,
        value: "Seattle",
      },
      {
        optionNumber: 2,
        value: "Boston",
      },
      {
        optionNumber: 3,
        value: "San Francisco",
      },
    ],
  },

  {
    questionNumber: 10,
    question: "Which condition is best for storage of coffee?",
    correctAnswer: "Cool",
    options: [
      {
        optionNumber: 1,
        value: "Cold",
      },
      {
        optionNumber: 2,
        value: "Cool",
      },
      {
        optionNumber: 3,
        value: "Hot",
      },
      {
        optionNumber: 4,
        value: "Warm",
      },
    ],
  },

  {
    questionNumber: 11,
    question: "Which ingredient is NOT found in a cappuccino?",
    correctAnswer: "Whipped cream",
    options: [
      {
        optionNumber: 1,
        value: "Espresso",
      },
      {
        optionNumber: 2,
        value: "Steamed milk",
      },
      {
        optionNumber: 3,
        value: "Whipped cream",
      },
      {
        optionNumber: 4,
        value: "Milk foam",
      },
    ],
  },

  {
    questionNumber: 12,
    question: "What could happen if coffee isn't stored properly?",
    correctAnswer: "Loss of flavour",
    options: [
      {
        optionNumber: 1,
        value: "Loss of colour",
      },
      {
        optionNumber: 2,
        value: "Loss of flavour",
      },
      {
        optionNumber: 3,
        value: "Loss of odour",
      },
    ],
  },
];

function Quiz() {
  const [count, setCount] = useState({ correct: 0, incorrect: 0 });
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const answerCorrect = () => {
    setCount({
      ...count,
      correct: count.correct + 1,
    });
  };

  const answerIncorrect = () => {
    setCount({
      ...count,
      incorrect: count.incorrect + 1,
    });
  };

  return (
    <section className="quiz">
      <h2 className="quiz__title">The Coffee Nerd's Quiz</h2>
      <form className="quiz__form" action="#/submit" method="post">
        {quizQAList.map((quizQA) => {
          return (
            <QuizCard
              key={quizQA.questionNumber}
              question={quizQA.question}
              correctAnswer={quizQA.correctAnswer}
              options={quizQA.options}
              questionNumber={quizQA.questionNumber}
              answerCorrect={answerCorrect}
              answerIncorrect={answerIncorrect}
            />
          );
        })}
        <div className="quiz__result-container">
          <button
            type="submit"
            className="quiz__submit-button"
            disabled={count.correct + count.incorrect < quizQAList.length}
            onClick={(e) => {
              e.preventDefault();
              setQuizSubmitted(true);
            }}
          >
            Submit
          </button>
          <p
            className={`quiz__result ${
              quizSubmitted ? "quiz__result--visible" : ""
            }`}
          >
            {`Score: ${count.correct}/${count.correct + count.incorrect}`}
          </p>
          <p
            className={`quiz__result ${
              quizSubmitted ? "quiz__result--visible" : ""
            }`}
          >{`correct: ${count.correct}`}</p>
          <p
            className={`quiz__result ${
              quizSubmitted ? "quiz__result--visible" : ""
            }`}
          >{`incorrect: ${count.incorrect}`}</p>
        </div>
      </form>
    </section>
  );
}

export default Quiz;
