const express = require("express")
const router = express.Router();

const {signup, login} = require("../controllers/authController")
const zodMiddleware = require("../middlewares/zodMiddleware")
const {loginSchema} = require("../utils/zod");

router.post("/signup", zodMiddleware(loginSchema),signup);

router.post("/login", zodMiddleware(loginSchema),login)

module.exports = router; 