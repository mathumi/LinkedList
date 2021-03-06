const LinkedList = require('./LinkedList');
const linkedList = new LinkedList();

console.log("Push: 4")
console.log("================\n")
console.log(JSON.stringify(linkedList.push(4)))
console.log("\n-----------------------------------------------------\n")
console.log("InsertAt: 5 at 1")
console.log("================")
console.log(JSON.stringify(linkedList.insertAt(5,1)))
console.log("\n-----------------------------------------------------\n")
console.log("IndexOf: 5")
console.log("================")
console.log(JSON.stringify(linkedList.indexOf(5)))
console.log("\n-----------------------------------------------------\n")
console.log("join")
console.log("================")
console.log(JSON.stringify(linkedList.join(",")))
console.log("\n-----------------------------------------------------\n")
console.log("Pop: ")
console.log("================")
console.log(JSON.stringify(linkedList.pop()))
console.log("\n-----------------------------------------------------\n")
console.log("unShift: 200")
console.log("================")
console.log(JSON.stringify(linkedList.unShift(200)))
console.log("\n-----------------------------------------------------\n")
console.log("Shift")
console.log("================")
console.log(JSON.stringify(linkedList.shift()))
console.log("\n-----------------------------------------------------\n")

