const { response } = require('express');
const taksModel = require('../models/taksModel')


/*
    get all taks
*/
const getAll = async (_req, response) => {
    const taks = await taksModel.getAll()
    return response.status(200).json(taks);
};

/* 
    insert new task
*/
const addTask = async (req, response) => {
    const addTask = await taksModel.addTask(req.body);
    return response.status(201).json(addTask);
};

/* 
    delete task
*/
const deleteTask = async (req, response) => {
    const { id } = req.params;
    await taksModel.deleteTask(id);
    return response.status(204).json({ message:'task delete sucess!'})

};

/* 
    update task
*/
const updateTask = async (req, response) => {
    const { id } = req.params;
    await taksModel.updateTask(id, req.body);
    return response.status(204).json({ message:'task upadte sucess!'})

};



module.exports = {
    getAll,
    addTask,
    deleteTask,
    updateTask,
};