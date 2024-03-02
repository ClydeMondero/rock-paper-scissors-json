let xhr = new XMLHttpRequest();

let choices;

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let doc = this.responseText;

    choices = JSON.parse(doc).choices;

    console.log(choices);
  }
};

xhr.open("GET", "choices.json", true);
xhr.send();

let player = document.querySelector("#playerChoice");
let computer = document.querySelector("#computerChoice");

function displayPlayerChoice(choice) {
  switch (choice) {
    case "Rock":
      player.src = "images/rock.png";
      break;
    case "Paper":
      player.src = "images/paper.png";
      break;
    case "Scissors":
      player.src = "images/scissors.png";
      break;
  }

  displayComputerChoice(choice);
}

function displayComputerChoice(playerChoice) {
  let random = Math.floor(Math.random() * 3);

  computer.src = choices[random].location;

  let computerChoice = choices[random].name;

  decideWinner(playerChoice, computerChoice);
}

let winner = document.querySelector("#winner");
let score = document.querySelector("#score");
let gameScore = 0;
function decideWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    winner.innerHTML = "Draw";
    return;
  }

  if (playerChoice == "Rock" && computerChoice == "Scissors") {
    gameScore++;
    winner.innerHTML = "You win!";
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    gameScore++;
    winner.innerHTML = "You win!";
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    gameScore++;
    winner.innerHTML = "You win!";
  } else {
    if (gameScore != 0) {
      gameScore--;
    }
    winner.innerHTML = "You lose!";
  }

  score.innerHTML = gameScore;
}
