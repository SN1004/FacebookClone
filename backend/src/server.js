const express = require("express");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes");

const app = express();

// MiddleWare
app.use(cors());
app.use(express.json());

// Test route
app.get("/api/test", (req, res) => {
	res.json({ message: "Backend is working 🚀" });
});

app.use("/api/posts", postRoutes);

console.log("PostRoutes:", postRoutes);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
