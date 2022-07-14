const express = require("express");
const {
	userRegister,
	userLogin,
	getUser,
} = require("../controllers/UserController");

const { protect } = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post("/", userRegister);
router.post("/login", userLogin);
router.get("/me", protect, getUser);

module.exports = router;
