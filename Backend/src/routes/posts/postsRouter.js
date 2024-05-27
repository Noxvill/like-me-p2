const router = require('express').Router()
// const {addPostController, getPostController} = require('../controllers/dbController')

const {getPostController, addPostController, deletePostController, modPostController} = require ('../../controllers/posts/postsController')

router.post('/add', addPostController)
router.get('/getPosts', getPostController)
// router.delete('/delPosts/:id', deletePostController)
router.put('/put/:id', modPostController )
module.exports = router 


