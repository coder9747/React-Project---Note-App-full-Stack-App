const mongoose  = require("mongoose");

const dbConnect = async()=>
{
    const url = "mongodb://127.0.0.1:27017";
    try {
        await mongoose.connect(url,{
            dbName:"weNote"
        })
        console.log("succes");
        
    } catch (error) {
        console.log("Error")
        
    }
    
}
module.exports = dbConnect;