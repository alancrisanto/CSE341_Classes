const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

// use middleware
router.use((req, res, next) => {
	console.log("Time ", Date.now());
	next();
});

// routes
router.get("/", (req, res) => {
	res.send("Hello from route");
});

router.get("/home", (req, res) => {
	res.send("Hello World! from Home");
});

router.get("/profile", (req, res) => {
	res.send("Hello from profile");
});

router.get("/login", (req, res) => {
	res.send("this is a login");
});

router.get("/logout", (req, res) => {
	res.send("out from logged out");
});

// Add middleware before routes
app.use(bodyParser.json());
app.use("/", router);

// app.use((err, req, res, next) => {
// 	res.status(500).send("something went wrong");
// });

app.listen(process.env.PORT || 3000, () => {
	console.log("Listening on port " + (process.env.PORT || 3000));
});
