const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// @desc		GET Goals
// @route 	GET /api/goals
// @access 	Private
const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find({ user: req.user.id });

	res.status(200).json(goals);
});

// @desc		POST Goal
// @route 	POST /api/goals
// @access 	Private
const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);

		throw new Error("No goal provided");
	}

	const goal = await Goal.create({ text: req.body.text, user: req.user.id });

	res.status(200).json(goal);
});

// @desc		UPDATE / PUT Goal
// @route 	PUT /api/goals/1
// @access 	Private
const updateGoal = asyncHandler(async (req, res) => {
	const goalId = req.params.id;
	const goal = await Goal.findById(goalId);

	if (!goal) {
		res.status(400);

		throw new Error("Goal Not Found!");
	}

	const user = await User.findById(req.user.id);

	// check if user exists
	if (!user) {
		res.status(401);

		throw new Error("User not found");
	}

	// check if the current user matches with their goal before update
	if (goal.user.toString() !== user.id) {
		res.status(401);

		throw new Error("User not authorized");
	}

	const updatedGoal = await Goal.findByIdAndUpdate(goalId, req.body, {
		new: true,
	});

	res.status(200).json(updatedGoal);
});

// @desc		DELETE Goal
// @route 	DELETE /api/goals/1
// @access 	Private
const deleteGoal = asyncHandler(async (req, res) => {
	const goalId = req.params.id;
	const goal = await Goal.findById(goalId);

	if (!goal) {
		res.status(400);

		throw new Error("Goal Not Found or Maybe It Already Deleted");
	}

	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);

		throw new Error("User not found");
	}

	if (goal.user.toString() !== user.id) {
		res.status(401);

		throw new Error("User not authorized");
	}

	await goal.remove();

	res.status(200).json({ id: goalId });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
