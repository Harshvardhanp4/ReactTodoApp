//packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = 3000;

//Mongoose models
const user = require("./models/user");
const todo = require("./models/todo");

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(async () => {
    console.log(" Connected to MongoDB");

//Create a test user (for testing purpose only)
    // const testUser = await user.create({
    //     username: "testUser",
    //     password: "test123"
    // });

    //Create a sample todo linked to that user
    // await todo.create({
    //     title: "First Todo",
    //     description: "testing",
    //     completed: false,
    //     userId: testUser._id
    // });

    // console.log("Sample data inserted (test user + todo)");
})
.catch((err) => {
    console.log("Connection error:", err);
});


app.use(cors());


app.use(express.json());

// Define routes here 

const authRoutes = require ("./routes/authRoutes")
const todoRoutes = require ("./routes/todoRoutes")

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
