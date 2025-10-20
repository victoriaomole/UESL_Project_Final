const outputDiv = document.getElementById("output");

document.getElementById("greetBtn").addEventListener("click", () => {
  outputDiv.textContent = "👋 Hello Victoria, welcome to UESL Interactive Dashboard!";
});

document.getElementById("scoreBtn").addEventListener("click", () => {
  const score = Math.floor(Math.random() * 100);
  outputDiv.textContent = `🎯 Your random score is: ${score}`;
});

document.getElementById("clearBtn").addEventListener("click", () => {
  outputDiv.textContent = "";
});


