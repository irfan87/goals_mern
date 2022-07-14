const mongoose = require("mongoose");

const GoalSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
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
