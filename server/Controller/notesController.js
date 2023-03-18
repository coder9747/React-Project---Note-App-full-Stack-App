const userNotesModel = require("../Model/userNotes");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");


const createNote = async(req,res)=>
{
    const {_id} = req.user;
    console.log(_id);
    const {title,description} = req.body;
    if(title && description)
    {
        const note = userNotesModel({
            title:title,
            description:description,
            userId:_id,
        })
        const savedNote = await note.save();
        res.send({
            status:"succes",
            message:"note Saved Succes"
        })
    }
    else
    {
        res.send({
            status:"error",
            message:"All Fileds required",
        })
    }
    
}

const updateNote = async(req,res)=>
{
    const {id} = req.params;
    const {title,description} = req.body;
    if(title && description)
    {
        await userNotesModel.findByIdAndUpdate(id,{$set:{title:title,description:description}});
        res.send({
            status:"succes",
            message:"Note Updated Succes"
        })
    }       
    else
    {
        res.send({
            status:"error",
            message:"All fileds required",
        })
    }
}
const getNotes = async(req,res)=>
{
    const {_id} = req.user;
    const notes = await userNotesModel.find({userId:_id});
    res.send({
        status:"succes",
        message:"note fetched",
        data:notes
    })
}
const deleteNote = async(req,res)=>
{
    const {id} = req.params;
    await userNotesModel.findByIdAndDelete(id);
    res.send({
        status:"succes",
        message:"note Delete Succes"
    })
}

module.exports = {createNote,updateNote,getNotes,deleteNote};