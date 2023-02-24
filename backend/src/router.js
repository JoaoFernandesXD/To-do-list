const exepress = require('express')
const taksControllers = require('./controllers/taksControllers');
const taskMiddleware = require('./middlewares/tasksMiddleware');

const router = exepress.Router();


/*
    get all taks
*/
router.get('/tasks', taksControllers.getAll);


/* 
    insert new task
*/
router.post('/tasks/insert', taskMiddleware.validador, taksControllers.addTask);


/* 
    delete task
*/
router.delete('/tasks/delete/:id', taksControllers.deleteTask);


module.exports = router;
