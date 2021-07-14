function computerPlay() {
  let option = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return option[randomNum];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
    return "It's a tie";
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors");
        return "You win! Rock beats Scissors";
      } else if (computerSelection === "paper") {
        console.log("You lose! Paper covers Rock");
        return "You lose! Paper covers Rock";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        console.log("You win! Paper Covers Rock");
        return "You win! Paper Covers Rock";
      } else if (computerSelection === "scissors") {
        console.log("You lose! Scissors cuts Paper");
        return "You lose! Scissors cuts Paper";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        console.log("You win! Scissors cuts Paper");
        return "You win! Scissors cuts Paper";
      } else if (computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors");
        return "You lose! Rock beats Scissors";
      }
    }
  }
}

function game() {
  let userInput;
  let playerChoice, computerChoice;
  let playerCount = 0,
    computerCount = 0;
  let result;
  for (let i = 1; i <= 5; ++i) {
    userInput = prompt("Choose an option");
    if (userInput === null || userInput === undefined) {
      console.log("Please enter an option");
    } else {
      playerChoice = userInput.toLowerCase();
      console.log("\n" + playerChoice);
      computerChoice = computerPlay().toLowerCase();
      console.log(computerChoice);
      if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
      ) {
        result = playRound(playerChoice, computerChoice);
      } else {
        console.log(
          "Enter any one option among rock, paper or scissors only, Round disqualified"
        );
        i -= 1;
        result = "Round disqualified";
      }
      if (/win/gi.test(result)) {
        playerCount++;
      } else if (/lose/gi.test(result)) {
        computerCount++;
      }
    }
  }
  if (playerCount > computerCount) {
    console.log("\n\nPlayer wins");
  } else if (playerCount < computerCount) {
    console.log("\n\nComputer wins");
  } else {
    console.log("\n\nIt's a tie");
  }
}

game();
