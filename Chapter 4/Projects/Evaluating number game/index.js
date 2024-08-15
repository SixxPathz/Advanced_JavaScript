let userInput = prompt("Please enter a number to be evaluated");

let randomNum = Math.floor(Math.random() * 500);

if (userInput > randomNum) {
  alert(
    "Your number is greater than the randomly generated number." +
      "The random number was " +
      randomNum
  );
} else if (userInput === randomNum) {
  alert(
    "Congratulations! Your number matches the randomly generated number." +
      "The random number was " +
      randomNum
  );
} else if(userInput < randomNum) {
  alert(
    "Your number is less than the randomly generated number." +
      "The random number was " +
      randomNum
  );
}
