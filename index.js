// Include fs module
var fs = require("fs");
let { QueueManagement } = require("./controller/QueueManagement");

let queuemanagement = new QueueManagement();

let data = fs.readFileSync("actions.txt", "UTF-8");
let lines = data.split(/\r?\n/);

lines.forEach((line) => {
    let aAction = line.split(",");
    switch (aAction[0]) {
        case "ADD":
            console.log("Adding..", aAction[1]);
            queuemanagement.add(aAction[1]);
            break;
        case "REMOVE_USER":
            console.log("Removing by user..", aAction[1]);
            queuemanagement.removeByUser(aAction[1]);
            break;
        case "MOVE":
            console.log("Moving..", aAction[1], aAction[2]);
            queuemanagement.move(aAction[1], aAction[2]);
            break;
        case "REVERSE":
            console.log("Reversing..");
            queuemanagement.reverse();
            break;
        case "SWAP":
            console.log("Swaping..", aAction[1], aAction[2]);
            queuemanagement.swap(aAction[1], aAction[2]);
            break;
        case "REMOVE_POSITION":
            console.log("Removing by Position..", aAction[1]);
            queuemanagement.removeByPosition(aAction[1]);
            break;
        case "PRINT":
            console.log("Printing..\n");
            console.log(queuemanagement.print());
            break;
    }
});
