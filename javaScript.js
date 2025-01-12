// A logice to get the computer choice
// Create a new function named getComputerChoice
// Randomly return the string value of rock, paper, scissors
function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";

    let randomChoice = Math.floor(Math.random() * 3);

    let choice;

    if (randomChoice === 0) {
        choice = rock;
    } else if (randomChoice === 1) {
        choice = paper;
    } else if (randomChoice === 2) {
        choice = scissors;
    } else {
        console.log(error);
    }

    return choice;
}
