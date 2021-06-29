function computerPlay() {
    let roll = Math.floor(Math.random() * 3);
    switch (roll) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return 'Computer roll failure';
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'draw';
    } else if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection) {
            case 'Paper':
                return 'lose';
            case 'Scissors':
                return 'win';
        } 
    } else if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            case 'Rock':
                return 'win';
            case 'Scissors':
                return 'lose';
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 'Rock':
                return 'lose';
            case 'Paper':
                return 'win';
        }
    }
    else {
        return 'Invalid choice, try again.';
    }
}

let playerScore = 0;
let computerScore = 0;

function game(choice) {
    let computerChoice = computerPlay();
    displayResult(playRound(choice, computerChoice), computerChoice);
}

const gameContainer = document.querySelector('.game');
const score = document.createElement('p');
score.textContent = 'Score: 0 - 0';
gameContainer.insertBefore(score, gameContainer.firstChild);

function displayResult(result, computer) {
    let computerResult = (computer === 'Rock') ? 
        'Computer chooses Rock.' : (computer === 'Paper') ? 
        'Computer chooses Paper.': 'Computer chooses Scissors.';
    
    let winOrLose = (result === 'win') ? 
        'You Win!' : (result === 'lose') ? 
        'You Lose!' : 'Draw!';

    const resultText = document.createElement('h3');
    resultText.classList.add('result-text');
    resultText.textContent = computerResult + " " + winOrLose;
    gameContainer.appendChild(resultText);

    //Update score
    if (winOrLose === 'You Win!') {
        playerScore++;
    }
    else if (winOrLose == 'You Lose!') {
        computerScore++;
    }

    //remove old score
    let oldScore = gameContainer.firstChild;
    gameContainer.removeChild(oldScore);
    //create and insert new score
    const newScore = document.createElement('p');
    newScore.classList.add('.score');
    newScore.textContent = `Score: ${playerScore} - ${computerScore}`;
    gameContainer.insertBefore(newScore, gameContainer.firstChild);
}

const gameButtons = document.querySelectorAll('.game-button');

gameButtons.forEach(button => {
    button.addEventListener("click", () => {
        let img = button.querySelector("img");
        let choice = img.alt;
        game(choice);
    });
});

