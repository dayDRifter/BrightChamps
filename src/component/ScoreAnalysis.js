import React from "react";
import "./ScoreAnalysis.css";

const ScoreAnalysis = ({
  score,
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  skippedQuestions,
}) => {
  // Calculate percentage score
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="score-analysis">
      <h2>Score Analysis</h2>
      <div className="score-summary">
        <p>
          <strong>Total Questions:</strong> {totalQuestions}
        </p>
        <p>
          <strong>Correct Answers:</strong> {correctAnswers}
        </p>
        <p>
          <strong>Incorrect Answers:</strong> {incorrectAnswers}
        </p>
        <p>
          <strong>Skipped Questions:</strong> {skippedQuestions}
        </p>
        <p>
          <strong>Your Score:</strong> {score} / {totalQuestions}
        </p>
        <p>
          <strong>Percentage:</strong> {percentage}%
        </p>
      </div>
      <div className="performance">
        {percentage >= 80 && (
          <p className="success">
            Great job! You performed exceptionally well.
          </p>
        )}
        {percentage >= 50 && percentage < 80 && (
          <p className="average">
            Good effort! Keep practicing for better results.
          </p>
        )}
        {percentage < 50 && (
          <p className="improve">
            Don't worry, keep practicing, and you'll improve!
          </p>
        )}
      </div>
    </div>
  );
};

export default ScoreAnalysis;
