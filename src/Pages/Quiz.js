const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");
const authMiddleware = require("../middleware/authMiddleware");

// Create a new quiz (protected route)
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { title, questions } = req.body;

    // Validate request
    if (!title || !questions || questions.length === 0) {
      return res
        .status(400)
        .json({ message: "Title and questions are required." });
    }

    // Create a new quiz
    const quiz = new Quiz({
      title,
      questions,
      createdBy: req.user.id, // Extracted from the JWT by the authMiddleware
    });

    await quiz.save();
    res.status(201).json({ message: "Quiz created successfully", quiz });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get all quizzes
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate("createdBy", "name email");
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get a specific quiz by ID
router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Submit quiz answers and calculate score
router.post("/:id/submit", async (req, res) => {
  try {
    const { answers } = req.body; // User's answers as an array of indices
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // Calculate score
    let score = 0;
    quiz.questions.forEach((question, index) => {
      const correctOption = question.options.findIndex((opt) => opt.isCorrect);
      if (answers[index] === correctOption) {
        score++;
      }
    });

    res.status(200).json({
      message: "Quiz submitted successfully",
      totalQuestions: quiz.questions.length,
      score,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
