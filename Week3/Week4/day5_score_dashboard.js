// Sample dashboard data
let students = [
  { name: "Victoria", course: "JavaScript", score: 95 },
  { name: "Daniel", course: "Python", score: 88 },
  { name: "Sarah", course: "SQL", score: 91 },
  { name: "John", course: "HTML & CSS", score: 84 },
  { name: "Maria", course: "Data Science", score: 93 },
];

const tableBody = document.getElementById("tableBody");
const refreshBtn = document.getElementById("refreshBtn");

// Function to load data into table
function loadTableData() {
  tableBody.innerHTML = "";
  students.forEach(s => {
    const row = `<tr><td>${s.name}</td><td>${s.course}</td><td>${s.score}</td></tr>`;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

// Sort by column index
function sortTable(colIndex) {
  const keys = ["name", "course", "score"];
  students.sort((a, b) => {
    let x = a[keys[colIndex]].toString().toLowerCase();
    let y = b[keys[colIndex]].toString().toLowerCase();
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });
  loadTableData();
}

// Refresh button — randomize scores
refreshBtn.addEventListener("click", () => {
  students.forEach(s => s.score = Math.floor(Math.random() * 100));
  loadTableData();
});

// Initial load
loadTableData();

