import React, { useState } from "react";

const sampleQuiz = [
  { question: "What is 2 + 2?", options: ["3", "4", "5"], correct: 1 },
  {
    question: "What is the capital of France?",
    options: ["Rome", "Paris", "Berlin"],
    correct: 1,
  },
];

const QuizTaker = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleSubmit = () => {
    if (selectedOption === sampleQuiz[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < sampleQuiz.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div>
      {!completed ? (
        <>
          <h2>{sampleQuiz[currentQuestionIndex].question}</h2>
          {sampleQuiz[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              style={{
                background: selectedOption === index ? "lightblue" : "white",
              }}
            >
              {option}
            </button>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <h2>
          Your score: {score} / {sampleQuiz.length}
        </h2>
      )}
    </div>
  );
};

export default QuizTaker;
