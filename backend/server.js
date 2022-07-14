const express = require("express");
const color = require("colors");
const { errorHandler } = require("./middleware/ErrorMiddleware");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use("/api/goals", require("./routes/GoalRoutes"));
app.use("/api/users", require("./routes/UserRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
