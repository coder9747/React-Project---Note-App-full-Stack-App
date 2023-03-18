const express = require("express");
const dbConnect = require("./Database/dbConnect");
const userRouter = require("./route/userRoute");
const noteRouter = require("./route/notesRoute");


//Creating app
const app = express();

//Connecting to database
dbConnect();


//middleware
app.use(express.json());





//public route
app.use("/api/user",userRouter);



//private route
app.use("/api/notes/",noteRouter);


app.listen(4500);