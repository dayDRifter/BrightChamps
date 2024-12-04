import React, { useState } from "react";

const QuizCreator = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const handleAddQuestion = () => {
    if (currentQuestion.trim() !== "") {
      setQuestions([...questions, currentQuestion]);
      setCurrentQuestion("");
    }
  };

  const handleSaveQuiz = () => {
    console.log("Quiz saved:", questions);
  };

  return (
    <div>
      <h2>Create a Quiz</h2>
      <input
        type="text"
        value={currentQuestion}
        onChange={(e) => setCurrentQuestion(e.target.value)}
        placeholder="Enter question"
      />
      <button onClick={handleAddQuestion}>Add Question</button>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
      <button onClick={handleSaveQuiz}>Save Quiz</button>
    </div>
  );
};

export default QuizCreator;
