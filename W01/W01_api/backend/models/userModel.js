const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UsersShema = new Schema({
	professionalName: {
		type: "String",
		required: "Please provide a name",
	},
	nameLink: {
		firstName: "String",
		url: "String",
		base64Image: "String",
	},
	firstName: "String",
	primaryDescription: "String",
	workDescription1: "String",
	workDescription2: "String",
	linkTitleText: "String",
	linkedInLink: {
		link: "String",
		text: "String",
	},
	githubLink: {
		link: "String",
		text: "String",
	},
	contactText: "String",
});

module.exports = mongoose.model("Users", UsersShema);
