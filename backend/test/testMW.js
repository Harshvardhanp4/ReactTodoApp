const express = require("express")
const authMiddleware = require("../middlewares/authMiddleware");
const zodMiddleware = require("../middlewares/zodMiddleware");
const { loginSchema, todoSchema } = require("../utils/zod");
const app = express();
require("dotenv").config();



app.use(express.json())
app.get("/protected",authMiddleware,(req,res)=>{
    res.json({
        msg:"You are authorized for authacess!"
    })
})

app.post("/test-zod" ,zodMiddleware(loginSchema), (req,res)=>{
        res.json({
            msg: "Zod is working just fine!"
        })
})

app.listen(3000)