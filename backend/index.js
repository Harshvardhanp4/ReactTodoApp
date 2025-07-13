const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
const user = require("./models/user")
const todo = require("./models/todo")
const PORT = 3000;
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI)
.then(async()=>{
    console.log("Connect to MongoDB")

    const testUser = await user.create({
        username: "testUser",
        password: "test123"
});

     await todo.create({
        title: "First Todo",
        description: "testing",
        completed: false,
        userId: testUser._id
    })
    
console.log("working buddy!")
})
.catch((err)=>{
    console.log("Connectione error: ",err)
})



app.use(cors());
app.use(express.json());





app.listen(3000,()=>{
    console.log(`Server is running on ${PORT}`)
})