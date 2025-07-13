const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config();
const app = express();


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connect to MongoDB")
})
.catch((err)=>{
    console.log("Connectione error: ",err)
})

//routes
const authRoutes=require("./routes/authRoutes");
const todoRoutes=require("./routes/todoRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("api/todos", todoRoutes);

app.listen(3000,()=>{
    console.log(`Server is running on ${PORT}`)
})