exports.createPostValidator = (req, res, next) =>{
    // Title
    req.check('title', "Write a title").notEmpty()
    req.check('title', 'Title must be between 4 to 150 characters ').isLength({
        min: 4,
        max: 150
    })
    // body
    req.check('title', "Write a title").notEmpty()
    req.check('title', 'Title must be between 4 to 150 characters ').isLength({
        min: 4,
        max: 150
    })
    // check for errors
    const errors = req.validationErrors()
    // if error show them as they appear
    if(errors){
        //show first error
        const firstError = errors.map(error=>error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    // proceed to next middleware
    next();
}