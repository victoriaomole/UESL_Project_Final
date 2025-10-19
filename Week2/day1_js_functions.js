// 🟨 Day 1 — JavaScript Functions
// Topic: Function Declaration and Return

// Function declaration
function greetUser(name) {
  return `Hello, ${name}! Welcome to UES Learning.`;
}

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Call the functions
console.log(greetUser("Victoria"));
console.log("Sum of 8 + 12 =", addNumbers(8, 12));

// Function expression (alternate way)
const multiply = function (x, y) {
  return x * y;
};

console.log("Product of 5 × 4 =", multiply(5, 4));
