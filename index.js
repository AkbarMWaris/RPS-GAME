// popup portion
function showPopup() {
  document.getElementById("popupOverlay").style.display = "flex";
}

function hidePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

// score update section
let playerScore = 0;
let computerScore = 0;

if (localStorage.getItem("playerScore")) {
  playerScore = parseInt(localStorage.getItem("playerScore"));
}
if (localStorage.getItem("computerScore")) {
  computerScore = parseInt(localStorage.getItem("computerScore"));
}

function updateScores() {
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}
updateScores();

// new section
let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let user = document.querySelector(".user");
let pc = document.querySelector(".pc");
let winArea = document.querySelector(".winArea");
let result = document.querySelector(".result");
let against = document.querySelector(".against");
let playBtn = document.querySelector(".playBtn");
let RuleBtn = document.querySelector(".btn-rule");
let nextButton = document.getElementById('next');
let random = Math.floor(Math.random() * 3);
let triangle = document.querySelector(".triangle");
let youWinDiv = document.getElementById("youWin");
let youLoseDiv = document.getElementById("youLose");

con.forEach((element, index) => {
  element.addEventListener("click", () => {
    user.style.opacity = "1";
    triangle.style.display = "none";
    con.forEach((item) => {
      item.style.display = "none";
    });
    element.style.display = "block";
    element.classList.add("shiftingLeft");
    setTimeout(() => {
      pc.style.opacity = "1";
      setTimeout(() => {
        computer[random].style.display = "block";
        computer[random].classList.add("shiftingRight");
      }, 1000);
    }, 500);
    setTimeout(() => {
      if (index == random) {
        RuleBtn.style.display = "flex";
        winArea.style.display = "grid";
        result.innerHTML = "TIE UP 🤝";
        against.innerHTML = "";
        playBtn.textContent = "Replay";
        nextButton.style.display = 'none'; 
        youWinDiv.style.display = "none";
        youLoseDiv.style.display = "none";
      } else if (
        (index == 0 && random == 2) ||
        (index == 1 && random == 0) ||
        (index == 2 && random == 1)
      ) {
        winArea.style.display = "grid";
        result.innerHTML = "YOU WIN";
        against.innerHTML = "AGAINST PC";
        playerScore++;
        updateScores();
        nextButton.style.display = 'flex'; 
        youWinDiv.style.display = "block";
        youLoseDiv.style.display = "none";
      } else {
        winArea.style.display = "grid";
        result.innerHTML = "YOU LOST";
        against.innerHTML = "AGAINST PC";
        computerScore++;
        updateScores();
        nextButton.style.display = 'none'; 
        youWinDiv.style.display = "none";
        youLoseDiv.style.display = "block";
      }
    }, 1500);
  });
});

playBtn.addEventListener("click", () => {
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);
  window.location.reload();
});

