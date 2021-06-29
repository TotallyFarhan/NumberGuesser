//Front end numbers
const computerNumberHTML = document.getElementById('computernum');
const playerNumberHTML = document.getElementById('playernum');
const realNumberHTML = document.getElementById('guessnumber');
const playerScoreHTML = document.getElementById('playerscore');
const tieScoreHTML = document.getElementById('tiescore');
const computerScoreHTML = document.getElementById('computerscore');
//buttons
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
//dom variables
const winStatus = document.getElementById('winstatus');

//Player number
let playerNum = 0;
//computer number
let computerNum;
//guessing number
let realNum;
//global variables
let win = '';
let currentlyPlaying = true;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

const resetGame = () => {
    win = '';
    winStatus.innerHTML = '';
    currentlyPlaying = true;
    playerNum = 0;
    playerNumberHTML.innerHTML = '0';
    computerNumberHTML.innerHTML = '?';
    realNumberHTML.innerHTML = '?';
}

resetButton.addEventListener('click', resetGame);

const addPlayerNum  = () => {
    if (playerNum >= 0 && playerNum <= 9 && currentlyPlaying) {
        playerNum ++;
        playerNumberHTML.innerHTML = playerNum;
    }
}

const subtractPlayerNum = () => {
    if (playerNum >= 1 && playerNum <= 10 && currentlyPlaying) {
        playerNum --;
        playerNumberHTML.innerHTML = playerNum;
    }
}

addButton.addEventListener('click', addPlayerNum);
subtractButton.addEventListener('click', subtractPlayerNum);

const checkWin = () => {
    let humanGuessAbs = Math.abs(realNum - playerNum);
    let computerGuessAbs = Math.abs(realNum - computerNum);

    if (humanGuessAbs < computerGuessAbs) {
        win = 'player';
        playerScore ++;
        playerScoreHTML.innerHTML = playerScore;
    }
    else if (humanGuessAbs > computerGuessAbs) {
        win = 'computer';
        computerScore ++;
        computerScoreHTML.innerHTML = computerScore;
    }
    else {
        win = 'tie';
        tieScore ++;
        tieScoreHTML.innerHTML = tieScore;
    }

    if (win === 'player') {
        winStatus.innerHTML = "You win!";
    }
    else if (win === 'computer') {
        winStatus.innerHTML = "Computer wins!";
    }
    else if (win === 'tie') {
        winStatus.innerHTML = "Tie!";
    }

    console.log("Player number: " + playerNum);
    console.log("Computer number: " + computerNum);
    console.log("Real number: " + realNum);
}

submitButton.onclick = () => {
    if (currentlyPlaying) {
        computerNum = Math.floor(Math.random() * 11);
        realNum = Math.floor(Math.random() * 11);
        checkWin();
        currentlyPlaying = false;
        computerNumberHTML.innerHTML = computerNum;
        realNumberHTML.innerHTML = realNum;
    }
}

