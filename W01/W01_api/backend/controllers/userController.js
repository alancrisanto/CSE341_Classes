const mongoose = require("mongoose");
const Users = require("../models/userModel");
// Users = mongoose.model("Users");

exports.getUsers = async (req, res) => {
	Users.find({})
		.then(function (tasks) {
			res.json(tasks[0]);
		})
		.catch(function (err) {
			res.send(err);
		});
};
