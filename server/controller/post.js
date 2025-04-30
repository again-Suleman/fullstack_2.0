const prisma = require("../prisma/prismaClient");

const getPost = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: { comments: true },
    });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, body, author, tags } = req.body;
    if(!title || !body || !author || !tags){
        res.status(400).json({error: "Body params are not complete"})
    } 

    const post = await prisma.post.create({
      data: { title, body, author, tags },
    });
    res.status(201).json(post);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to create a post" });
  }
};

module.exports = {
  getPost,
  createPost,
};
