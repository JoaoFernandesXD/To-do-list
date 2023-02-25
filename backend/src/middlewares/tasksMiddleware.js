const validador =  (req, response, next) => {
    const { body } = req;

    if (body.title == undefined){
        return response.status(400).json({message: 'The filed "title" is required'});
    }
    if (body.title == ''){
        return response.status(400).json({message: 'Title cannot be empty'});
    }

    // titulo ok
    next();
};
const validadorStatus =  (req, response, next) => {
    const { body } = req;

    if (body.status == undefined){
        return response.status(400).json({message: 'The filed "status" is required'});
    }
    if (body.status == ''){
        return response.status(400).json({message: 'Status cannot be empty'});
    }

    // status ok
    next();
};

module.exports = {
    validador,
    validadorStatus,
};