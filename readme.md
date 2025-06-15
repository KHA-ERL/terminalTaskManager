Task tracker is a project used to track and manage your tasks. In this task, you will build a simple command line interface (CLI) to track what you need to do, what you have done, and what you are currently working on. This project will help you practice your programming skills, including working with the filesystem, handling user inputs, and building a simple CLI application.

Requirements
The application should run from the command line, accept user actions and inputs as arguments, and store the tasks in a JSON file. The user will be able to:

Add, Update and Delete tasks<br />
Mark a task status as In Progress or Done<br />
List all tasks<br />
List all tasks that are done<br />
List all tasks that are not done<br />
List all tasks that are in progress

Here are some constraints to guide the implementation:<br />
Navigate to src folder in terminal before running any of the below<br />
node task.js add ""<br />
node task.js delete id<br />
node task.js update id ""<br />
node task.js status id ""<br />
node task.js list<br />
node task.js list "Done"<br />
node task.js list "In Progress"<br />
node task.js list "Todo"

Built this project with nodejs.<br />
Use positional arguments in command line to accept user inputs.<br />
Use a JSON file to store the tasks in the current directory.<br />
The JSON file would be created if it does not exist.<br />
Use the native file system module of your programming language to interact with the JSON file.<br />
Did not use any external libraries or frameworks to build this project.<br />
Ensure to handle errors and edge cases gracefully.

Task Properties<br />
Each task should have the following properties:

id: A unique identifier for the task<br />
description: A short description of the task<br />
status: The status of the task (todo, in-progress, done)<br />
createdAt: The date and time when the task was created<br />
updatedAt: The date and time when the task was last updated<br />
Make sure to add these properties to the JSON file when adding a new task and update them when updating a task.



