const asyncHandler = require("express-async-handler");

// @desc		Register New User
// @route 	POST /api/users
// @access 	Public
const userRegister = asyncHandler(async (req, res) => {
	res.json({ message: "Register User" });
});

// @desc		Login User
// @route 	POST /api/users/login
// @access 	Public
const userLogin = asyncHandler(async (req, res) => {
	res.json({ message: "Login User" });
});

// @desc Get User's Data
// @route GET /api/users/me
// @access Public
const getUser = asyncHandler(async (req, res) => {
	res.json({ message: "Get User" });
});

module.exports = {
	userRegister,
	userLogin,
	getUser,
};
