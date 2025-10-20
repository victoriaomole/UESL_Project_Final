// 🧠 Day 5 – Mini Project (JS)
// Goal – Show Top 3 UES Services dynamically

// Array of services and ratings
let services = [
  { name: "Data Analytics", rating: 9.7 },
  { name: "AI Solutions", rating: 9.4 },
  { name: "Web Development", rating: 9.2 },
  { name: "Digital Training", rating: 8.9 },
  { name: "Automation Tools", rating: 8.7 }
];

// Sort services by rating (descending)
services.sort((a, b) => b.rating - a.rating);

// Display Top 3
console.log("🏆 Top 3 UES Services:");
for (let i = 0; i < 3; i++) {
   console.log(`${i + 1}. ${services[i].name} (${services[i].rating})`);
}
