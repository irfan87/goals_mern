const express = require("express");
const {
	getGoals,
	updateGoal,
	deleteGoal,
	setGoal,
} = require("../controllers/GoalController");

const router = express.Router();

router.route("/").get(getGoals).post(setGoal);

router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
