const express = require('express')
const postController = require('../controllers/post')
const validator = require('../validator')
const router = express.Router()
const {check, validationResult} = require('express-validator');
router.get('/', postController.getPosts)
router.post('/post', [
    // title
    check('title', "Write a title").notEmpty(),
    check('title', 'Title must be between 4 to 150 characters ').isLength({
        min: 4,
        max: 150
    }),
    // body
    check('body', "Write a title").notEmpty(),
    check('body', 'Title must be between 4 to 150 characters ').isLength({
        min: 4,
        max: 150
    }),
    (req,res) => {
        // check for errors
        const errors = validationResult(req)
        // if error show them as they appear
        if(errors){
            //show first error
            console.log(errors)
            //const firstError = errors.map(error=>error.msg)[0]
            return res.status(400).json({errors})
        }
    }
],
postController.createPost)

module.exports = router
