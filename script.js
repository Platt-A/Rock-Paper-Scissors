
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    } else {
        computerScore++;
        return `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
    }
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    document.getElementById('result').textContent = `Computer chose: ${capitalize(computerChoice)}. ${roundResult}`;
    document.getElementById('score').textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}