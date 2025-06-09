const fs = require("fs")
const path = require("path")

const {readTask, writeTask, generateId} = require("./taskModel");

function addTask(description){
    const tasks = readTask();
    const newTask = {
        id: generateId(),
        description,
        status: 'todo',
        createdAt: new Date(),
        updatedAt: new Date()
    };
    tasks.push(newTask);
    writeTask(tasks);
    console.log('✅ Task added.');
}

function updateTask(id, newDescription){
    const tasks = readTask();
    const task = tasks.find(t => t.id === id);
    if (!task) return console.log("❌ Task not found");
    task.description = newDescription;
    task.updatedAt = new Date();
    writeTask(task);
    console.log("Task Updated")
}

function deleteTask(id){
    const tasks = readTask()
    const initialLength = tasks.length
    tasks = tasks.filter(t => t.id !== id)
    if (tasks.length === initialLength) return console.log("Task not found");
    writeTask(tasks);
    console.log("Task updated")
}

function updateStatus(id, status){
    const validStatus = ["Todo", "In Progress", "Done"]
    if (!validStatus.includes(status)){
        return console.log("Invalid status use 'Todo', 'In Progress', 'Done'")
    }

    const tasks = readTask()
    const task =  tasks.find(t => t.id === id)
    if (!task) return console.log("Task not found");
    tasks.status = status;
    tasks.updatedAt = new Date();
    writeTask(tasks)
    console.log(`Task marked as "${status}"`)
}

function listAllTasks(){
    const tasks = readTask()
    if(tasks === 0) return console.log("No task found");
    console.table( tasks.map( ({id, description, validStatus}) => ({id, description, validStatus}) ))
}

function listTaskByStatus(status){
    const tasks = readTask();
    const filtered = tasks.filter(t => t.status === status);
    if (filtered.length === 0) return console.log(`📭 No "${status}" tasks.`);
    console.table(filtered.map(({ id, description, status }) => ({ id, description, status })));
}

module.exports(
    addTask,
    updateTask,
    deleteTask,
    updateStatus,
    listAllTasks,
    listTaskByStatus
)
