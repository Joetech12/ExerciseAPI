const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/WorkoutController");

const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// Get a single workouts
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a new workout
router.delete("/:id", deleteWorkout);

// UPDATE a new workout
router.patch("/:id", updateWorkout);

module.exports = router;
