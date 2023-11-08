"use strict";

let mongoose = require("mongoose");
Task = mongoose.model("Tasks");

exports.list_all_tasks = function (req, res) {
	Task.find({})
		.then(function (tasks) {
			res.json(tasks);
		})
		.catch(function (err) {
			res.send(err);
		});
};

exports.create_a_task = function (req, res) {
	const new_task = new Task(req.body);
	new_task
		.save()
		.then(function (task) {
			res.json(task);
		})
		.catch(function (err) {
			res.send(err);
		});
};

exports.read_a_task = function (req, res) {
	Task.findById(req.params.TaskId, function (err, task) {
		if (err) res.send(err);
		res.json(task);
	});
};

exports.update_a_task = function (req, res) {
	Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
		if (err) res.send(err);
		res.json(task);
	});
};

exports.delete_a_task = function (req, res) {
	Task.remove(
		{
			_id: req.params.taskId,
		},
		function (err, task) {
			if (err) res.send(err);
			res.json({ message: "Task successfully deleted" });
		},
	);
};
