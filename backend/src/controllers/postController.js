let posts = [
	{ id: 1, author: "Suryansh", content: "My first post 🚀", likes: 0 },
	{ id: 2, author: "User2", content: "Learning full stack!", likes: 0 },
];

// GET -> retrieve all users
const getPosts = (req, res) => {
	res.status(201).json(posts);
};

// POST -> add new user
const postPost = (req, res) => {
	const { author, content } = req.body;
	if (!author || !content)
		res.status(400).json({ message: "Author and Content is required" });

	const newPost = {
		id: posts.length + 1,
		author,
		content,
		likes: 0,
	};

	posts.push(newPost);
	res.status(201).json(newPost);
};

// PATCH -> increase likes
const likePost = (req, res) => {
	const { id } = req.params;

	const post = posts.find((p) => p.id === parseInt(id));

	if (post === null) res.status(404).json({ message: "Post not found" });

	post.likes += 1;
	res.json(post);
};

//DELETE -> delete post
const deletePost = (req, res) => {
	const { id } = req.params;

	const postIndex = posts.findIndex((p) => p.id === parseInt(id));

	if (postIndex === -1) res.status(404).json({ message: "Post not found" });

	const deletedPost = posts.splice(postIndex, 1);

	res.status(201).json({ message: "Post deleted" }, deletedPost);
};

module.exports = {
	getPosts,
	postPost,
	likePost,
	deletePost,
};
