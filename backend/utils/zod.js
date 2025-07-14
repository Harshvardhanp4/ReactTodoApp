const z = require("zod")

const loginSchema = z.object({
    username: z.string().min(3, "Username must be atleast 3 characters"),
    password: z.string().min(6, "Password must be atleast 6 characters")
});

const todoSchema = z.object({
    title: z.string().min(1, "Title is required!"),
    description: z.string().optional(),
    completed: z.boolean().optional()
});

module.exports={
    loginSchema,
    todoSchema
};