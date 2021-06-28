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
    if (playerSelection.toLowerCase() === 'rock') {
        return rockLogic(computerSelection);
    } else if (playerSelection.toLowerCase() === 'paper') {
        return paperLogic(computerSelection);
    } else if (playerSelection.toLowerCase() === 'scissors') {
        return scissorLogic(computerSelection);
    }
    else {
        return 'Invalid choice, try again.';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(computerPlay(), computerPlay()));
    }
}

game();

function rockLogic(opponent) {
    switch (opponent) {
        case 'Rock':
            return 'Rock vs. Rock, it\'s a draw.';
        case 'Paper':
            return 'Rock vs. Paper, you lose!';
        case 'Scissors':
            return 'Rock vs. Scissors, you win!';
        default:
            return "Rock logic failure";
    }
}

function paperLogic(opponent) {
    switch (opponent) {
        case 'Rock':
            return 'Paper vs. Rock, you lose!';
        case 'Paper':
            return 'Paper vs. Paper, it\'s a draw.';
        case 'Scissors':
            return 'Paper vs. Scissors, you win!';
        default:
            return "Paper logic failure";
    }
}

function scissorLogic(opponent) {
    switch (opponent) {
        case 'Rock':
            return 'Scissors vs. Rock, you lose!';
        case 'Paper':
            return 'Scissors vs. Paper, you win!';
        case 'Scissors':
            return 'Scissors vs. Scissors, it\'s a draw.';
        default:
            return "Scissor logic failure";
    }
}


