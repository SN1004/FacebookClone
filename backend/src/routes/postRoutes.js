const express = require("express");
const router = express.Router();

const {
	getPosts,
	postPost,
	likePost,
	deletePost,
} = require("../controllers/postController");

router.get("/", getPosts);
router.post("/", postPost);
router.patch("/:id/like", likePost);
router.delete("/:id", deletePost);

module.exports = router;
