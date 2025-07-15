require("dotenv").config();

const  {signToken, verifyToken } = require("../utils/jwtUtils")

const testPayload = {
    userId: "abc123"
}

const token = signToken(testPayload);
console.log(token);

try{
    const decoded = verifyToken(token);
    console.log("done",decoded)

}
catch(err){
    console.log("invalid")
}