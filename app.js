let playerCount = 0,
  computerCount = 0;

// Element selection and creation
const container = document.querySelector("#container");
const btn = document.querySelectorAll("#choice button");
const resultDiv = document.createElement("div");
const resultText = document.createElement("p");
const scoreDiv = document.createElement("div");
const playerScore = document.createElement("p");
const computerScore = document.createElement("p");

window.addEventListener("load", () => {
  resultText.textContent = "";
  resultDiv.appendChild(resultText);
  playerScore.textContent = `Player : ${playerCount}`;
  computerScore.textContent = `Computer : ${computerCount}`;
  scoreDiv.appendChild(playerScore);
  scoreDiv.appendChild(computerScore);
  container.appendChild(scoreDiv);
  container.appendChild(resultDiv);
});

// Random selection by the computer
function computerPlay() {
  let option = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return option[randomNum];
}

// Choice comparison for each round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
      } else if (computerSelection === "paper") {
        return "You lose! Paper covers Rock";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "You win! Paper Covers Rock";
      } else if (computerSelection === "scissors") {
        return "You lose! Scissors cuts Paper";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        return "You win! Scissors cuts Paper";
      } else if (computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
      }
    }
  }
}

// Update UI to show results
function updateUI(result) {
  resultText.textContent = result;
  playerScore.textContent = `Player : ${playerCount}`;
  computerScore.textContent = `Computer : ${computerCount}`;
  if (/win/gi.test(result)) {
    resultText.style.cssText = "font-size: 20px; color:green";
  } else if (/lose/gi.test(result)) {
    resultText.style.cssText = "font-size: 20px; color:red";
  } else {
    resultText.style.cssText = "font-size: 20px; color:black";
  }

  if (playerCount === 5) {
    alert("YOU WIN!!!");
    resetGame();
  } else if (computerCount === 5) {
    alert("YOU LOSE!!!");
    resetGame();
  }
}

// reset the ui after either reaches 5 score
function resetGame() {
  (playerCount = 0), (computerCount = 0);
  playerScore.textContent = `Player : ${playerCount}`;
  computerScore.textContent = `Computer : ${computerCount}`;
  resultText.textContent = "";
}

function game(e) {
  console.clear();
  let playerChoice, computerChoice;
  let result;
  playerChoice = e.target.value.toLowerCase();
  console.log("\n" + playerChoice);
  computerChoice = computerPlay().toLowerCase();
  console.log(computerChoice);
  result = playRound(playerChoice, computerChoice);
  console.log(result);
  if (/win/gi.test(result)) {
    playerCount++;
  } else if (/lose/gi.test(result)) {
    computerCount++;
  }
  console.log(playerCount);
  console.log(computerCount);

  updateUI(result);
}

btn.forEach((item) => {
  item.addEventListener("click", (e) => game(e));
});
