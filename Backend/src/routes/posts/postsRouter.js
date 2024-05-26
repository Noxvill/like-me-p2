const router = require('express').Router()
// const {addPostController, getPostController} = require('../controllers/dbController')

const {getPostController, addPostController} = require ('../../controllers/posts/postsController')

router.post('/add', addPostController)
router.get('/getPosts', getPostController)
module.exports = router 


