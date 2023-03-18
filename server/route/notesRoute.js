const express = require("express");
const {createNote,updateNote,getNotes,deleteNote} = require("../Controller/notesController");
const auth = require("../middleware/auth");


const router = express.Router();



// note routes
router.post("/create",auth,createNote);
router.get("/getnotes",auth,getNotes);
router.put("/update/:id",auth,updateNote);
router.delete("/delete/:id",auth,deleteNote);







module.exports = router;