// 🟨 Week 3 — Day 4: Array Methods (map, filter, reduce)

let scores = [95, 88, 72, 81, 90];

// map() → Transform every element
let updatedScores = scores.map(score => score + 5);
console.log("📈 Updated Scores (+5):", updatedScores);

// filter() → Keep only passing scores
let passingScores = updatedScores.filter(score => score >= 80);
console.log("✅ Passing Scores (≥80):", passingScores);

// reduce() → Calculate total and average
let total = passingScores.reduce((sum, val) => sum + val, 0);
let average = total / passingScores.length;

console.log("📊 Total of Passing Scores:", total);
console.log("📊 Average Passing Score:", average.toFixed(2));
