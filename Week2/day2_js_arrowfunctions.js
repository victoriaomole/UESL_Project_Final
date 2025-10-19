// 🟨 Day 2 – JavaScript Arrow Functions
// Topic: Cleaner function syntax

// Regular function
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function (shorter way)
const greetArrow = (name) => `👋 Hello, ${name}!`;

// Function with multiple lines
const calculateAverage = (scores) => {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total / scores.length;
};

// Run functions
console.log(greet("Victoria"));
console.log(greetArrow("Victoria"));
console.log("📊 Average Score:", calculateAverage([88, 92, 81, 95]));

