const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc		Register New User
// @route 	POST /api/users
// @access 	Public
const userRegister = asyncHandler(async (req, res) => {
	const { userName, email, password } = req.body;

	if (!userName || !email || !password) {
		res.status(400);

		throw new Error("Username, Email and Password are required");
	}

	// check if user exists
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);

		throw new Error("User already exists");
	}

	// hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// create new user
	const newUser = await User.create({
		userName,
		email,
		password: hashedPassword,
	});

	// check if user have been created
	if (newUser) {
		res.status(201).json({
			_id: newUser.id,
			userName: newUser.userName,
			email: newUser.email,
			token: generateJWTToken(newUser.id),
		});
	} else {
		res.status(400);

		throw new Error("Invalid user data");
	}
});

// @desc		Login User
// @route 	POST /api/users/login
// @access 	Public
const userLogin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	// check for user's email
	const user = await User.findOne({ email });

	// check the password
	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user.id,
			userName: user.userName,
			email: user.email,
			token: generateJWTToken(user.id),
		});
	} else {
		res.status(400);

		throw new Error("Invalid credentials");
	}
});

// @desc Get User's Data
// @route GET /api/users/me
// @access Public
const getUser = asyncHandler(async (req, res) => {
	res.json({ message: "Get User" });
});

// generate JWT token
const generateJWTToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
};

module.exports = {
	userRegister,
	userLogin,
	getUser,
};
