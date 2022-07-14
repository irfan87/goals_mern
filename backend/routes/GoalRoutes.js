const express = require("express");
const {
	getGoals,
	updateGoal,
	deleteGoal,
	setGoal,
} = require("../controllers/GoalController");
const { protect } = require("../middleware/AuthMiddleware");

const router = express.Router();

router.route("/").get(protect, getGoals).post(protect, setGoal);

router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
