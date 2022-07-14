const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
	{
		userName: {
			type: String,
			required: [true, "Username is required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", UserSchema);
