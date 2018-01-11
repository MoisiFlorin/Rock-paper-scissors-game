function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    
    if (computerChoise === 1) {
        computerChoice = 'rock';
    } else if (computerChoice === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 'rock' && computerSelection === 'scissors')
       (playerSelection === 'paper' && computerSelection === 'rock')
       (playerSelection === 'scissors' && computerSelection === 'paper')
    {
        return('Player won!' + playerSelection + 'beats' + computerSelection);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock')
       (playerSelection === 'rock' && computerSelection === 'paper')
       (playerSelection === 'paper' && computerSelection === 'rock')
    {
        return ('Computer won!' + computerSelection + 'beats' + playerSelection);
    }else {
        return('Draw!' + playerSelection + 'equal' + computerSelection)
    }
}

function game() {
    const rounds = 5; {
 let playerInput = prompt("rock, paper, scissors").toLowerCase();
    }

let computerChoice = computerPlay();
playRound(palyerChoice, computerChoice);
}

let playerPoints = 0;
let computerPoints = 0;

if (playerPoints > computerPoints) {
    console.warn("You won");
  } else if (playerPoints === computerPoints) {
    console.warn("Draw");
  } else {
    console.warn("Computer won");
  }
  console.log(playerPoints);
  console.log(computerPoints);
};