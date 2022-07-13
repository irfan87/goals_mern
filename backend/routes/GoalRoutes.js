const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({ message: "Goals GET request from GoalRoutes.js" });
});

router.post("/", (req, res) => {
	res.status(200).json({ message: "Goals POST request from GoalRoutes.js" });
});

router.put("/:id", (req, res) => {
	const id = req.params.id;

	res
		.status(200)
		.json({ message: `Goals PUT request #${id} from GoalRoutes.js` });
});

router.delete("/:id", (req, res) => {
	const id = req.params.id;

	res
		.status(200)
		.json({ message: `Goals DELETE request #${id} from GoalRoutes.js` });
});

module.exports = router;
