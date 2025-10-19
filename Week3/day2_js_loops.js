// 🟨 Week 3 — Day 2: JavaScript Loops

// Array of UESL courses
const courses = ["Data Analytics", "Python Programming", "SQL Basics", "Web Development"];

// Traditional for loop
console.log("📘 UESL Courses (for loop):");
for (let i = 0; i < courses.length; i++) {
  console.log(i + 1 + ".", courses[i]);
}

// forEach loop (cleaner)
console.log("\n📗 UESL Courses (forEach loop):");
courses.forEach((course, index) => {
  console.log(`${index + 1}. ${course}`);
});

