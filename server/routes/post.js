const express = require('express')
const router = express.Router()
const postController = require("../controller/post")

router.get('/', postController.getPost)
router.post('/new', postController.createPost)


module.exports = router