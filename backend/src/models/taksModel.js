const connection = require('./connection')


/*  
    function
    get all taks
*/
const getAll = async () => {
    // Query SQL
    const [taks] = await connection.execute('SELECT * FROM tarefas');
    return taks;
};

/* 
    function
     insert new task
*/
const addTask = async (taks) => {
    const { title } = taks;
    
    const dateUTC = new Date(Date.now()).toUTCString();

    const [createdTask] = await connection.execute('INSERT INTO tarefas(titulo, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', dateUTC]);

    return {insertId: createdTask.insertId};

};
/* 
    function
     delete task
*/
const deleteTask = async (id) => {
    const removeTask = await connection.execute('DELETE FROM tarefas WHERE id = ?', [id])
    return removeTask;
};

/* 
    function
     update task
*/
const updateTask = async (id, task) => {
    const {title, status} = task;

    const [updateTask] = await connection.execute('UPDATE tarefas set titulo = ?, status = ? WHERE id = ?', [title, status, id]);
    
    return updateTask;
};
module.exports = {
    getAll,
    addTask,
    deleteTask,
    updateTask,
};