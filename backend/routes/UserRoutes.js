const express = require("express");
const {
	userRegister,
	userLogin,
	getUser,
} = require("../controllers/UserController");

const router = express.Router();

router.post("/", userRegister);
router.post("/login", userLogin);
router.get("/me", getUser);

module.exports = router;
