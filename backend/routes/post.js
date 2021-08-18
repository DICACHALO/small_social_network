const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post");
const Auth = require("../middleware/auth.js");
const ValidateUser = require("../middleware/validateUser");


router.post("/savePost",  Auth, ValidateUser, PostController.savePost);

router.get("/listPost", Auth, ValidateUser, PostController.listPost);

module.exports = router; 