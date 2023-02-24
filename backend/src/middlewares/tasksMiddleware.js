const validador =  (req, response, next) => {
    const { body } = req;

    if (body.title == undefined){
        return response.status(400).json({message: 'The filed "title" is required'});
    }
    if (body.title == ''){
        return response.status(400).json({message: 'Title cannot be empty'});
    }

    // return ok
    next();
};

module.exports = {
    validador,
};