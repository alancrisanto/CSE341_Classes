const userList = require("../controllers/userController");

module.exports = function (app) {
	app.route("/professional").get(userList.getUsers);
};
