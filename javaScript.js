// A logice to get the computer choice
// Create a new function named getComputerChoice
// Randomly return the string value of rock, paper, scissors
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    let computerChoice;

    if (randomChoice === 0) {
        computerChoice = rock;
    } else if (randomChoice === 1) {
        computerChoice = paper;
    } else if (randomChoice === 2) {
        computerChoice = scissors;
    } else {
        console.log(error);
    }

    console.log(computerChoice);
    return(computerChoice);
}

// A logic to get the human choice
// Create a new function named getHumanChoice
// Recieve choice via prompt
// Return human's choice
function getHumanChoice() {
    let humanChoice = prompt("Please choose Rock, Paper or Scissors").toLowerCase();


    console.log(humanChoice);
    return(humanChoice);
}

// Score Tracker
var humanScore = 0;
var computerScore = 0;

// A function that plays the rock, paper & scissor game
// Create a new function named playRound
// Create choice to case-insensitive, lowerCase()
// Operation for the the round winner
// score increment base on the winner
function playRound(humanChoice, computerChoice) {
    if (humanChoice === rock && computerChoice === scissors) {
        console.log("You win! Rock beats Scissors");
    } else if (humanChoice === scissors && computerChoice === paper) {
        console.log("You win! Scissors beats Paper");
    } else if (humanChoice === paper && computerChoice === rock) {
        console.log("You win! Paper beats Rock");
    } else if (humanChoice === scissors && computerChoice === rock) {
        console.log("You Lose! Rock beats Scissors");
    } else if (humanChoice === paper && computerChoice === scissors) {
        console.log("You Lose! Scissors beats Paper");
    } else if (humanChoice === rock && computerChoice === paper) {
        console.log("You Lose! Paper beats Rock");
    } else {
        console.log("Tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
