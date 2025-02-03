const Task = require("../models/task");
const mongoose = require('mongoose');
//controller fetch all tasks
const getTasks = (req, res) => {
    Task.find()
        .then((result) => {
            console.log("inside getting data")
            res.json({ result })
        })
        .catch((err) => console.log("yamsebtyy" + err))

}
//controller add a new task
const addTask = (req, res) => {
    const addedData = req.body;
    const task = new Task({
        name: addedData.name,
        description: addedData.description,
        priority: addedData.priority,
        startDate: addedData.startDate,
        endDate: addedData.endDate
    })
    task.save()
        .then((result) => {
            res.json("result of saving data :" + result)
        })
        .catch((err) => {
            res.json("error happend " + err)
        })
}
//controller for update Task
const updateTask = (req, res) => {
    const updatedData = req.body;
    const taskId = parseInt(req.params.id, 10);
    Task.updateOne({ id: taskId }, { $set: { name: updatedData.name, description: updatedData.description , priority : updatedData.priority , startDate : updatedData.startDate , endDate : updatedData.endDate } })
        .then((result) => res.json("done updated" + result))
        .catch((err) => res.json("yamsebtyyyy" + err))
}
//controller for delete Task

const deleteTask = (req, res) => {
    const taskDelId = parseInt(req.params.id, 10);
    Task.deleteOne({ id: taskDelId })
        .then((result) => res.json("deleted" + result))
        .catch((err) => res.json("yalahwee" + err))
};


module.exports = {
    getTasks, addTask, updateTask, deleteTask
}