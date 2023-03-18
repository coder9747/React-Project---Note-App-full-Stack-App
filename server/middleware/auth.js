const userModel = require("../Model/userModel");
const jwt = require('jsonwebtoken');
const auth = async(req, res,next) => {
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            const token = authorization.split(" ").at(1);
            const key = "ldjflsdjf45u4u5943ksndl";
            const data = jwt.verify(token, key);
            const id = data.userId;
            const user =await userModel.findById(id).select("-password");
            if(user)
            {
                req.user = user;
                next();
                
            }
            else
            {
                res.send({
                    status: "error",
                    message: "invalied token"
                })
            }

        } catch (error) {


            res.send({
                status: "error",
                message: "invalied token"
            })

        }

    }
    else {
        res.send({
            status: "error",
            message: "invalied token"
        })
    }


}

module.exports = auth;