/**
 * This SMall Module Illustrates How can we perform CPU Intensive Operations on a child process
 * as it can block the main process
 */
var childProcess = require("child_process");
var fs = require("fs");
var childWorker = childProcess.fork("./script/longRunningTask");

childWorker.send(null);


childWorker.on('message', function(msg){
    console.log("Finished Background Processing");
    //End Child Process
    childWorker.kill('SIGINT');
})


console.log("Started CPU Intensive Operations On Main Process")

let i = 0;
console.time("Task 1")
for( i = 0 ; i < 1000000000 ; i++){}
console.timeEnd("Task 1")
console.time("Task 2")
for( i = 0 ; i < 1000000000 ; i++){}
console.timeEnd("Task 2")
console.time("Task 3")
for( i = 0 ; i < 1000000000 ; i++){}
console.timeEnd("Task 3")

console.log("Finished Normal Work")
