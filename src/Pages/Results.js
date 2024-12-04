const express = require("express");
const router = express.Router();
const Result = require("../models/Result");
const Quiz = require("../models/Quiz");
const authMiddleware = require("../middleware/authMiddleware");

// Save quiz result (Protected Route)
router.post("/save", authMiddleware, async (req, res) => {
  try {
    const { quizId, score, totalQuestions } = req.body;

    if (!quizId || score === undefined || !totalQuestions) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Save the result to the database
    const result = new Result({
      quizId,
      userId: req.user.id,
      score,
      totalQuestions,
    });

    await result.save();
    res.status(201).json({ message: "Result saved successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get all results for a specific user (Protected Route)
router.get("/user", authMiddleware, async (req, res) => {
  try {
    const results = await Result.find({ userId: req.user.id }).populate(
      "quizId",
      "title"
    );
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get detailed results for a specific quiz
router.get("/:quizId", async (req, res) => {
  try {
    const results = await Result.find({ quizId: req.params.quizId }).populate(
      "userId",
      "name email"
    );
    if (!results.length) {
      return res
        .status(404)
        .json({ message: "No results found for this quiz." });
    }

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
