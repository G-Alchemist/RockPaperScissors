function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * computerChoice.length);
    const randomChoice = computerChoice[randomNumber];
    return randomChoice;
}

console.log(getComputerChoice())