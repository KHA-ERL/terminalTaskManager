const fs = require("fs")
const path = require("path");
const { json } = require("stream/consumers");

const filepath = path.join(__dirname, "../data/task.json")

function readTask(){
    try {
        if (!fs.existsSync(filepath)){
            return[];
        }
        const data = fs.readFileSync(filepath, "utf8");
        // Check if file is empty
        if (data.trim() === "") {
            return [];
        }
        return JSON.parse(data);
    }

    catch(err){
        console.error("ERROR READING TASK FILE", err)
        return[];
    }
};

function writeTask(task){
    try{
        fs.writeFileSync(filepath, JSON.stringify(task, null, 2))
    }
    catch(err){
        console.error("ERROR SAVING TASK FILE", err)
        return[]
    }
;}

function generateId(){
    return Date.now().toString();
}

module.exports = {
    readTask,
    writeTask,
    generateId
};