import React, { useState, useEffect } from "react";
import "./Time.css";

const Time = ({ totalTime, onTimeOut }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime); // Initial time set to totalTime passed as prop

  // Start the countdown timer when the component mounts
  useEffect(() => {
    if (timeLeft <= 0) return; // If time is up, don't start timer

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime - 1 <= 0) {
          clearInterval(timerId); // Stop the timer when it reaches 0
          onTimeOut(); // Trigger the timeout callback (e.g., move to result screen)
          return 0; // Set the time to 0
        }
        return prevTime - 1; // Decrease the time by 1 second
      });
    }, 1000); // Update every 1 second

    // Cleanup the timer when the component unmounts or time reaches 0
    return () => clearInterval(timerId);
  }, [timeLeft, onTimeOut]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="timer">
      <h3>Time Left: {formatTime(timeLeft)}</h3>
    </div>
  );
};

export default Time;
