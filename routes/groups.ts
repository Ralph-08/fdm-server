const router = require("express").Router();
const groupsController = require("../controllers/groups-controller");

router.route("/").get(groupsController.getGroups);
