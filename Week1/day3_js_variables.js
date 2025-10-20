// 🧠 Day 3 – JavaScript Variables: let vs var vs const

// var = old way (global or function scope)
var course = "UES Learning Plan";
var course = "UES Month 2"; // re-declaring works
console.log("📘 Using var:", course);

// let = block scope (can be updated but not re-declared in same scope)
let year = 2025;
year = 2026; // update is ok
console.log("📅 Using let:", year);

// const = block scope (cannot be changed)
const studentName = "Victoria";
console.log("👩🏽‍💻 Using const:", studentName);

// Uncomment the next line to see an error
// studentName = "Grace"; // ❌ TypeError

// Example of block scope
if (true) {
   let session = "Morning Class";
   var topic = "JavaScript Basics";
   console.log("Inside block (let):", session);
}
console.log("Outside block (var):", topic);
// console.log(session); // ❌ ReferenceError

