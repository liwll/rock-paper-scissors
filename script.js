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

let gameStarted = false;
let gameFinished = false;
let playerScore = 0;
let computerScore = 0;

function game(choice) {
    let computerChoice = computerPlay();
    displayResult(playRound(choice, computerChoice), computerChoice);
}

const gameContainer = document.querySelector('.game');
const score = document.createElement('h2');
score.textContent = 'Score: 0 - 0';
score.classList.add('score')
gameContainer.insertBefore(score, gameContainer.firstChild);

function displayResult(result, computer) {
    if (gameFinished) {
        return;
    }
    gameStarted = true;

    //Print result
    let computerResult = (computer === 'Rock') ? 
        'Computer chooses Rock.' : (computer === 'Paper') ? 
        'Computer chooses Paper.': 'Computer chooses Scissors.';
    
    let winOrLose = (result === 'win') ? 
        'You Win!' : (result === 'lose') ? 
        'You Lose!' : 'Draw!';

    const resultText = document.createElement('h3');
    resultText.classList.add('result-text');
    resultText.textContent = computerResult + " " + winOrLose;

    //Update score
    if (result === 'win') {
        playerScore++;
        resultText.classList.add('win');
    }
    else if (result == 'lose') {
        computerScore++;
        resultText.classList.add('lose')
    }
    gameContainer.appendChild(resultText);

    //remove old score
    let oldScore = gameContainer.firstChild;
    gameContainer.removeChild(oldScore);
    //create and insert new score
    const newScore = document.createElement('h2');
    newScore.classList.add('score');
    newScore.textContent = `Score: ${playerScore} - ${computerScore}`;
    gameContainer.insertBefore(newScore, gameContainer.firstChild);

    if (playerScore == 5) {
        gameFinished = true;
        const victoryText = document.createElement('p');
        victoryText.classList.add('game-over-victory');
        victoryText.textContent = "Victory! You are the Rock, Scissors, Paper Champion!"
        gameContainer.appendChild(victoryText);
    }
    else if (computerScore == 5) {
        gameFinished = true;
        const defeatText = document.createElement('p');
        defeatText.classList.add("game-over-defeat");
        defeatText.textContent = "Defeat, better luck next time."
        gameContainer.appendChild(defeatText);
    }
}

const gameButtons = document.querySelectorAll('.game-button');

gameButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (gameFinished) {
            return;
        }
        if (gameStarted) {
            const oldResults = document.querySelector('h3');
            gameContainer.removeChild(oldResults);
        }

        let img = button.querySelector("img");
        let choice = img.alt;
        game(choice);
    });
});