const userModel = require("../Model/userModel");
const bycrpt = require("bcrypt");
const register = async(req,res)=>
{
    const {name,email,password,passwordConfirm} = req.body;
    if(name && email && password && passwordConfirm)
    {
        try {
            const isUser = await userModel.findOne({email:email});
            if(isUser)
            {
                res.send({
                    status:"failed",
                    message:"Email Already Registered"
                })
            }
            else
            {
                if(password===passwordConfirm)
                {   
                    const salt = await bycrpt.genSalt(10);
                    const hashPasword = await bycrpt.hash(password,salt);
                    let user = userModel({
                        name:name,
                        email:email,
                        password:hashPasword
                    })
                    user = await user.save();
                    res.send({
                        status:"succes",
                        message:"User Registered Succesfully"
                    })

                }
                else
                {
                    res.send({
                        status:"failed",
                        message:"password not same"
                    })
                }
                
            }
            
        } catch (error) {
            res.send({
                status:"failed",
                message:"try again",
            })
            
        }
    }
    else
    {
        res.send({
            status:"failed",
            message:"All Fileds Required"
        })
    }

}






module.exports = {register}