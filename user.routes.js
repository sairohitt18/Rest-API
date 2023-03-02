const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/",userController.getAllUsers);
router.delete("/:id",userController.deleteUser);

module.exports = router;