8; /*-------------------------------------------------------------------------
//wHILE LOOPS


let i = 0;
while (i < 20){
    console.log(i);
    i++;
}

//Looking for values in an array

let myArray = ["Jacky", "Xolani", "Njabulo", "Pulane", "Sandile"];
let Found = false;

while (!Found && myArray.length > 0) {
  if (myArray[0] === "Sandile") {
    Found = true;
    console.log("Found Sandile at first position");
  } else {
    myArray.shift();
  }
}

//Fibonacci sequence

let nr1 = 0,
  nr2 = 1;
let temp;

fibonacciArray = [];
while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}
  console.log(fibonacciArray);


//Exercise 5.1
let maxValue = 5;
let randomNum = Math.floor(Math.random() * maxValue) + 1;
let validAnswer = false;

while (!validAnswer) {
  let userInput = Number(prompt("Please enter a number between 1 and 5"));
  if (userInput === randomNum) {
    validAnswer = true;
    alert("Congratulations! You guessed the right number.");
  } else if (userInput < randomNum) {
    alert("Too low! Try again.");
  } else {
    alert("Too high! Try again.");
  }
}


//Exercise 5.2--Do while loop

let counterStep = 5;
let count = 0;
do {
  console.log(count);
  count += counterStep;
  
} while (!count >= 100);
//for loops
//Exercise 5.3

let myWork = [];

for (let i = 1; i <= 10; i++) {
  let status = i % 2 === 0 ? false : true;

  let lesson = {
    name: `Lesson ${i}`,
    status: status,
  };

  myWork.push(lesson);
}

console.log(myWork);


//Exercise 5.4

let myTable= [];
let col;
let row;
let counter = 0;

for (row = 1; row <= 10; row++) {
    let tempArray = [];
    for (col = 1; col <= 10; col++) {
        counter++;
        tempArray.push(counter);
    }   
    myTable.push(tempArray);
}

console.log(myTable);


//Exercise 5.5

const grid = [];
const cells = 64;
let counter = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
if (counter % 8 == 0) {
if (row != undefined) {
grid.push(row);
}
row = [];
}
counter++;
let temp = counter;
row.push(temp);
}
console.table(grid);



//Exercise 5.6
let newArray = [];

for (let i = 0; i < 10; i++) {
  newArray.push(i + 7);
}

console.log(newArray);

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

for (let myArray of newArray) {
  console.log(myArray);
}
----------------*/
//Exercise 5.7---For in loop

let myObject = { item1: "Pen", item2: "Laptop", item3: "Book" };

for (let key in myObject) {
  console.log(key + ": " + myObject[key]);
}

//Exercise 5.8----Break and continue

let myString ="";
let skipNo = 7;

for (let i = 0; i < 10; i++) {
    if (i === skipNo) {
        continue;
    }
    myString += i + " ";
}
