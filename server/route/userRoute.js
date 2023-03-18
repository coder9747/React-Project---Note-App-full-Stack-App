const express = require("express");
const {register,login,userData} = require("../Controller/userController");
const auth = require("../middleware/auth");


const router = express.Router();



//Register route
router.post("/register",register);
router.post("/login",login);
router.get("/userdata",[auth,userData]);






module.exports = router;