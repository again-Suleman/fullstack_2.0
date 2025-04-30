const express = require('express')
const router = express.Router()

const posts = [
    {
      id: 1,
      title: "Welcome to Fullstack 2.0!",
      body: "This is your very first post—congrats on setting up your API.",
      author: "Suleman",
      tags: ["intro", "getting-started"],
      likes: 42,
      comments: [
        { id: 1, author: "JaneDoe", body: "Nice work!", createdAt: "2025-04-28T10:15:00Z" },
        { id: 2, author: "JohnSmith", body: "Looking forward to more.", createdAt: "2025-04-28T12:30:00Z" },
      ],
      createdAt: "2025-04-27T08:00:00Z",
      updatedAt: "2025-04-27T08:00:00Z"
    },
    {
      id: 2,
      title: "Second Post: Routing Deep Dive",
      body: "Let’s talk about nested routes, `Outlet`, and protected pages in React Router v6…",
      author: "Suleman",
      tags: ["react", "router", "tutorial"],
      likes: 17,
      comments: [],
      createdAt: "2025-04-28T09:00:00Z",
      updatedAt: "2025-04-28T09:00:00Z"
    }
  ];

router.get('/', (req, res)=>{
    res.status(200).send(posts)
})

router.post('/new', (req, res)=>{
    data = req.body
    console.log(data)
    res.status(200).send(data)
})


module.exports = router