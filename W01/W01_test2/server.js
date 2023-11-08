const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

Task = require("./api/models/todoListModel");
let routes = require("./api/routes/todoListRoutes");

app = express();
port = process.env.PORT || 3000;

// connection to local MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.use(function (req, res) {
	res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("Todo List RESTFul API running on port " + port);
