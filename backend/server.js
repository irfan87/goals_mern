const express = require("express");
const { errorHandler } = require("./middleware/ErrorMiddleware");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use("/api/goals", require("./routes/GoalRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
