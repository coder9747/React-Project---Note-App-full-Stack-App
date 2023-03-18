const express = require("express");
const dbConnect = require("./Database/dbConnect");
const userRouter = require("./route/userRoute")


//Creating app
const app = express();

//Connecting to database
dbConnect();


//middleware
app.use(express.json());





//public route
app.use("/api/user",userRouter);


app.listen(4500);