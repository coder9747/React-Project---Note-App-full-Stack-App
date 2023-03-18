const userModel = require("../Model/userModel");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

const login = async(req,res)=>
{

   const {email,password} = req.body;
   if(email && password)
   {
        const user = await userModel.findOne({email:email});
        if(user)
        {
            const passwordMatch = await bycrpt.compare(password,user.password);
            const key = "ldjflsdjf45u4u5943ksndl";
            const token = jwt.sign({userId:user._id},key,{expiresIn:"5d"});
            res.send({
                status:"succes",
                message:"Login Succes",
                token:token,
            })


        }
        else
        {
            res.send({
                status:"error",
                message:"Email Not Registered",
            })
        }
   }
   else
   {
    res.send({
        status:"error",
        message:"All fileds required",
    })
   }

}

const userData = async(req,res)=>
{
    res.send({
        status:"succes",
        message:"user found",
        data:req.user,
    })
}






module.exports = {register,login,userData}