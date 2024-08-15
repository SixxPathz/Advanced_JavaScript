let array = ["Rock", "Paper", "Scissors"];

let randomNumMachine = Math.floor(Math.random() * array.length);
let message = "";
let playerSelection = Number(prompt("Enter a number between 0 and 2 "));

if (
  (playerSelection === 0 && randomNumMachine === 2) ||
  (playerSelection === 1 && randomNumMachine === 0) ||
  (playerSelection === 2 && randomNumMachine === 1)
) {
  if (playerSelection === 0) {
    message = "Player wins! Rock beats Scissors!";
    alert(message);
  } else if (playerSelection === 1) {
    message = "Player wins! Paper beats Rock!";
    alert(message);
  } else {
    message = "Player wins! Scissors beats Paper!";
    alert(message);
  }
} else if (playerSelection === randomNumMachine) {
  message = "It's a tie!";
  alert(
    message +
      "you picked " +
      array[playerSelection] +
      " the computer chose " +
      array[randomNumMachine]
  );
} else {
  message =
    "Computer wins! Computer chose " +
    array[randomNumMachine] +
    " and you chose " +
    array[playerSelection] +
    "!";
  alert(message);
}
