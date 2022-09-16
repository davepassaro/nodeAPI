const {check, validationResult} = require('express-validator');

exports.createPostValidator = [
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
            console.log(req)
            // check for errors
            const errors = validationResult(req)
            if(errors){
                console.log(errors)
                return res.status(400).json({errors})
            }
        }
    ]
