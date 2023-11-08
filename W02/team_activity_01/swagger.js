const swaggerAutogen = require("swagger-autogen")();

const doc = {
	info: {
		title: "Team Project",
		description: "CSE341 Team project 01",
	},
	host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
