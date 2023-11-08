const express = require("express");
var cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const routes = require("./routes/userRoutes");

express.json();

const app = express();
app.use(cors());
routes(app);
const PORT = process.env.PORT ?? 5000;

app.listen(PORT, async () => {
	console.log("Server running on Port " + PORT);
	try {
		await mongoose.connect(process.env.DATABASE);
		console.log("Connected  to database");
	} catch (error) {
		console.log(error);
	}
});
