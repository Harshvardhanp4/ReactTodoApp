const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const zodMiddleware = require("../middlewares/zodMiddleware");
const { todoSchema } = require("../utils/zod");

const {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
} = require("../controllers/todoController");

router.use(authMiddleware); // all routes below require auth

router.post("/", zodMiddleware(todoSchema), createTodo);
router.get("/", getTodos);
router.put("/:id", zodMiddleware(todoSchema), updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
