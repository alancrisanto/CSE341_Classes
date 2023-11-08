// Session Managment
// npm install --save express express-session body-parser

const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");

const app = express();
const router = express.Router();

app.use(expressSession({ secret: "shhh", saveUninitialized: true, resave: true }));
// Add middleware before routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var sess; // global session, NOT recommended, only for demonstration purposes

// routes
router.get("/", (req, res) => {
	sess = req.session;
	if (sess.email) {
		return res.redirect("/admin");
	}
	res.send("ok");
});

router.post("/login", (req, res) => {
	sess = req.session;
	sess.email = req.body.email;
	res.end("done");
});

router.get("/admin", (req, res) => {
	sess = req.session;
	if (sess.email) {
		res.write(`Hello ${sess.email}!`);
		res.end("Login");
	} else {
		res.write("Please enter your email");
		res.end();
	}
});

router.get("/logout", (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			return console.log(err);
		} else {
			res.redirect("/");
		}
	});
});

app.use("/", router);

app.listen(process.env.PORT || 3000, () => {
	console.log("Listening on port " + (process.env.PORT || 3000));
});
