const commands = [
    {name: "add", description: "", status: "", createdAt: "", updatedAt: ""},
    {name: "update", description: ""},
    {name: "delete", description: ""},
    {name: "list", description: ""},
    {name: "list_done", description: ""},
    {name: "list_not_done", description: ""},
    {name: "list_in_progress", description: ""},
] = require('./taskController');

//node task.js add ""
//node task.js delete ""
//node task.js update ""
//node task.js list ""
//node task.js list_done""
//node task.js list_not_done ""
//node task.js list_in_progress ""

const args = [,, commands, args] = process.argv;

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
        else listTasksByStatus(args[0]);
        break;
    default:
        console.log('Unknown command.');
}