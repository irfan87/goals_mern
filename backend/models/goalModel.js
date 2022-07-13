const mongoose = require("mongoose");

const GoalSchema = mongoose.Schema(
	{
		text: {
			type: String,
			required: [true, "Goal text is required"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Goal", GoalSchema);
