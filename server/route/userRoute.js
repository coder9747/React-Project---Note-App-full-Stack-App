const express = require("express");
const {register} = require("../Controller/userController");


const router = express.Router();



//Register route
router.post("/register",register);






module.exports = router;