const jwt = require("jsonwebtoken");

module.exports= function (req,res,next){
    try{
        let token= req.header("token")
        console.log(token);
        if(!token){
            return res.status(404).json("jwt token not found ")
        }
        let comparetoken=jwt.verify(token,"jwtpassword")
        req.user=comparetoken.user;
        next();
    }
    catch(e){
        console.log(e);
        return resizeBy.status(500).json("inernal server error")
    }  
}