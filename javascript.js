
game();

function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * computerChoice.length);
    const randomChoice = computerChoice[randomNumber];
    return randomChoice;
}

function gameRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`It's a tie ! You both played ${playerSelection}`);
        return [0,0];
    } else if ((playerSelection == "Rock" & computerSelection == "Scissors") || (playerSelection == "Paper" & computerSelection == "Rock") 
    || (playerSelection == "Scissors" & computerSelection == "Paper")) {
        console.log(`You won this round ! ${playerSelection} beats ${computerSelection} !`);
        return [1,0];
    } else if ((playerSelection == "Scissors" & computerSelection == "Rock") || (playerSelection == "Rock" & computerSelection == "Paper") 
    || (playerSelection == "Paper" & computerSelection == "Scissors")) {
        console.log(`You lost this round ! ${computerSelection} beats ${playerSelection} !`);
        return [0,1];
    } else {
        console.log("Wrong input, you need to choose Rock, Paper or Scissors !");
        return [0,0];
    }
}

function capitalize(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    capitalizedLetter = playerSelection.charAt(0);
    capitalizedLetter = capitalizedLetter.toUpperCase();
    playerSelection = capitalizedLetter + playerSelection.slice(1);
    return playerSelection;
}

function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let gamecount = 0; gamecount < 5; gamecount++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper or Scissors ? Make your choice !");
        playerSelection = capitalize(playerSelection);
        let [playerWon, computerWon] = gameRound(playerSelection, computerSelection);
        if (playerWon == 1) {
            playerScore++;
        } else if (computerWon == 1) {
            computerScore++;
        }
        console.log(`Your score is : ${playerScore}\nComputer score is : ${computerScore}`);
    }
    console.log(playerScore, computerScore);
    if(playerScore > computerScore) {
        console.log("Congratulations ! You won the game !");
    } else if (playerScore < computerScore) {
        console.log("Oh no! You lost against the computer, too bad !");
    } else {
        console.log("No way ! It's a tie !");
    }
}