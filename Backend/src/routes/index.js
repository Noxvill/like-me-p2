const router = require('express').Router()
const postsRouter = require('./posts/postsRouter')
router.use('/posts', postsRouter)

module.exports = router 


