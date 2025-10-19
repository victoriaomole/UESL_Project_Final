// 🟨 Day 3 – JavaScript DOM Basics

function changeText() {
  let heading = document.getElementById("heading");
  let message = document.getElementById("message");

  heading.innerText = "🎓 DOM Manipulation in Action!";
  message.innerText = "You clicked the button — great job, Victoria!";
  message.style.color = "green";
}



