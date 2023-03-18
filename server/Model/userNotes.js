const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,required:true},
    date:{type:Date,default:Date.now}
})
module.exports =  mongoose.model("note",noteSchema);
