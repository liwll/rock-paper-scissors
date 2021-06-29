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

function game(choice) {
    let computerChoice = computerPlay();
    displayResult(playRound(choice, computerChoice), computerChoice);
}

function displayResult(result, computer) {
    const gameContainer = document.querySelector('.game');

    const computerResult = document.createElement('h3');
    computerResult.classList.add('result-text');
    computerResult.textContent = (computer === 'Rock')? 'Rock' : (computer === 'Paper') ? 'Paper': 'Scissors';
    gameContainer.appendChild(computerResult);

    const resultText = document.createElement('h3');
    resultText.classList.add('result-text');
    resultText.textContent = (result === 'win') ? 'You Win!' : (result === 'lose') ? 'You Lose!' : 'Draw!';
    gameContainer.appendChild(resultText);
}



const gameButtons = document.querySelectorAll('.game-button');

gameButtons.forEach(button => {
    button.addEventListener("click", () => {
        let img = button.querySelector("img");
        let choice = img.alt;
        game(choice);
    });
});

