const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/goals", require("./routes/GoalRoutes"));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
