const jwt = require("jsonwebtoken");

function signToken(payload){
    return jwt.sign(payload, process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );
}

function verifyToken(token){
    return jwt.verify(token,process.env.JWT_SECRET);
}

module.exports = {
    signToken,
    verifyToken
};