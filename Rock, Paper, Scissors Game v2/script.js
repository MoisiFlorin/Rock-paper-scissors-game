var choices = ['rock', 'paper', 'scissor']
var playerScore = 0;
var computerScore = 0;


function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {

    var tie = 'It`s a tie!';
    var win = 'You win! ' + playerSelection.toUpperCase() + ' beats ' + computerSelection.toUpperCase();
    var lose = 'You loose! ' + computerSelection.toUpperCase() + ' beats ' + playerSelection.toUpperCase();

    document.querySelector('.computer-choice').textContent = "Computer's choice : " + computerSelection;

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                return tie;
            } else if (computerSelection === 'paper') {
                computerScore += 1;
                return lose;
            } else {
                playerScore += 1;
                return win;
            }
        case 'paper':
            if (computerSelection === 'rock') {
                playerScore += 1;
                return win;
            } else if (computerSelection === 'paper') {
                return tie;
            } else {
                computerScore += 1;
                return lose;
            }
        case 'scissor':
            if (computerSelection === 'rock') {
                computerScore += 1;
                return lose;
            } else if (computerSelection === 'paper') {
                playerScore += 1;
                return win;
            } else {
                return tie;
            }
    }
};


var buttons = document.querySelectorAll('button');
var a = document.getElementsByClassName('option');

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        document.querySelector('.round-result').textContent = playRound(button.id, computerPlay());
        document.querySelector('.player-score').textContent = "Your score : " + playerScore;
        document.querySelector('.computer-score').textContent = "Computer`s score : " + computerScore;
        if (playerScore == 5) {
            document.querySelector('.final-result').textContent = "You won!";
            setGameOver();
        } else if (computerScore == 5) {
            document.querySelector('.final-result').textContent = "You loose!";
            setGameOver();
        };
    });

    function setGameOver() {
        a.disabled = true;
        a.classList.add("disabled");
    }
});


