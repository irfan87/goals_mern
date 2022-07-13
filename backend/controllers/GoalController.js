// @desc		GET Goals
// @route 	GET /api/goals
// @access 	Private
const getGoals = (req, res) => {
	res.status(200).json({ message: "GET Goals from GoalController.js" });
};

// @desc		POST Goal
// @route 	POST /api/goals
// @access 	Private
const setGoal = (req, res) => {
	res.status(200).json({ message: "POST Goals from GoalController.js" });
};

// @desc		UPDATE / PUT Goal
// @route 	PUT /api/goals/1
// @access 	Private
const updateGoal = (req, res) => {
	const id = req.params.id;

	res
		.status(200)
		.json({ message: `UPDATE / PUT Goals from GoalController.js #${id}` });
};

// @desc		DELETE Goal
// @route 	DELETE /api/goals/1
// @access 	Private
const deleteGoal = (req, res) => {
	const id = req.params.id;

	res
		.status(200)
		.json({ message: `DELETE Goals from GoalController.js #${id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };