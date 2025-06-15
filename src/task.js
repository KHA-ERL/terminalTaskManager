const path = require("path");

const {
    addTask,
    updateTask,
    deleteTask,
    listAllTasks,
    updateStatus,
    listTaskByStatus
} = require('./taskController');

const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        addTask(args.join(' '));
        break;
    case 'update':
        updateTask(args[0], args.slice(1).join(' '));
        break;
    case 'delete':
        deleteTask(args[0]);
        break;
    case 'status':
        updateStatus(args[0], args[1]);
        break;
    case 'list':
        if (!args[0]) listAllTasks();
        else listTaskByStatus(args[0]);
        break;
    default:
        console.log('Unknown command.');
}