// 🟨 Week 3 — Day 3: JavaScript Objects

// Define an object
let student = {
  name: "Victoria",
  department: "Data Science",
  score: 95,
  isActive: true
};

// Access object values
console.log("🎓 Student Info:");
console.log("Name:", student.name);
console.log("Department:", student["department"]);
console.log("Active Student:", student.isActive);

// Add a new property
student.level = "Advanced";

// Update property
student.score = 98;

console.log("\n📘 Updated Student Info:");
console.log(student);

// Loop through object
console.log("\n🔍 Looping through object keys:");
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
