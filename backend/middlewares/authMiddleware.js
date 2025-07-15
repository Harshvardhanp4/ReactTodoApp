const {verifyToken} = require("../utils/jwtUtils") 
const jwt = require("jsonwebtoken")
function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){

        res.status(403).json({
            msg: "Unauthorized token provided! Please check "
        })
    }
    const token = authHeader.split(" ")[1];
    
    try{
            const decoded = jwt.verify(token);
            req.userId = decoded.userId;
            next();
    }
    catch(err){
        res.status(401).send({
            msg:"Invalid token!"
        })
    }
}

module.exports = authMiddleware;