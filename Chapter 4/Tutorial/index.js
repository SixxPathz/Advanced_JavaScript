//Exercise 4.1-----ELSE STATEMENTS

let myVar = true;
console.log(myVar);

if (myVar){
    console.log("The value of the variable is true");
}
else{
    console.log("The value of the variable is false");
}

//ElSE IF STATEMENTS

let theAge= prompt("What is your age?");
let cost = 0;
let theMessage;

if (theAge < 3){
    cost = 0;
    theMessage="You are free to enter the venue";
    alert(theMessage);
}else if (theAge >= 3 && age < 12){
    cost = 5;
    theMessage="You are charged $5 for admission";
    alert(theMessage);
}else if (theAge >= 12 && age < 65){
    cost = 10;
    theMessage="You are charged $10 for admission";
    alert(theMessage);
}
else{
    cost = 7;
    theMessage="You are charged $15 for admission";
    alert(theMessage);
}

console.log(theMessage);
console.log("The cost for admission is $" + cost);


//EXERCISE 4.2


let userAge = prompt("Please enter your age: ");
let age = Number(userAge);
let message;

if(age >= 21){
    message = "You are allowed in the venue and will be allowed to drink alcohol";
    console.log(message);
}else if(age >= 19){
    message = "You are allowed in the venue, but you may not drink alcohol";
    console.log(message);
}
else {
    message = "You are not allowed in the venue";
    console.log(message);
}

//CONDITIONAL TERNARY OPERATORS

let myAge = Number(prompt("what is your age"));
let access = myAge < 18 ? "Aceess denied" : "welcome:";
alert(access);


//EXERCSE 4.3
let validID = true;

let accessVenue = validID ? "You can access this venue": "You cannot access this venue";
console.log(accessVenue);



//SWITCH STATEMENTS
let array = ["Get up","Breakfast","Drive to work","Lunch","Drive Home","Dinner"]
let activity=prompt("What is your activity:");

switch (activity) {
    case array[1]:
        console.log("its 6:30AM");
        break;
    case array[2]:
        console.log("its 7:00AM");
        break;
    case array[3]:
        console.log("its 8:00AM");
        break;
    case array[4]: 
    console.log("its 12:00PM");
    break;
    case array[5]:  
    console.log("its 5:00PM");
    break;
    case array[6]: 
    console.log("its 6:30PM"); 
    break;  
}


//DEFAULT CASE
let array1 = ["Get up","Breakfast","Drive to work","Lunch","Drive Home","Dinner"]
let activity1=prompt("What is your activity:");

switch (activity1) {
    case array[1]:
        console.log("its 6:30AM");
        break;
    case array[2]:
        console.log("its 7:00AM");
        break;
    case array[3]:
        console.log("its 8:00AM");
        break;
    case array[4]: 
    console.log("its 12:00PM");
    break;
    case array[5]:  
    console.log("its 5:00PM");
    break;
    case array[6]: 
    console.log("its 6:30PM"); 
    break;  
    default:
        console.log("Invalid activity");
        break;
}


//EXERCISE 4.4
let randomNum = Math.floor(Math.random() * 6);
let question = prompt("What is your question?");

switch (randomNum) {
  case 0:
    alert(question + ":" + " Yes you should go there");
    break;
  case 1:
    alert(question + ":" + " No you should not go there");
    break;
  case 2:
    alert(question + ":" + " Maybe you should go there");
    break;
  case 3:
    alert(question + ":" + " It is not possible to say");
    break;
  case 4:
    alert(question + ":" + " You should not go there alone");
  case 5:
    alert(question + ":" + " You should go there with others");
    break;
}



//COMBINING CASES
let grade = prompt("Please enter a grade ranging from A to F");
grade.toUpperCase(); 

switch (grade) {
  case "F":
  case "D":
    console.log("You've failed!");
    break;
  case "C":
  case "B":
    console.log("You've passed!");
    break;
  case "A":
    console.log("Nice!");
    break;
  default:
    console.log("I don't know this grade.");
}
//EXERCISE 4.5
let prize = Number(prompt("Please enter a value between 0 and 10"));
let userMessage = "Your prize is: ";

let prizeArray = [
  "Gaming PC",
  "PS4",
  "Mac Book",
  "iPhone 14 PRO",
  "Basketball",
  "Nothing Phone 1",
  "Samsung Galaxy S24",
  "Nothing Phone 2",
  "ASUS ROG 5",
  "$100000",
];

switch (prize) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log(userMessage + prizeArray[prize]);
    break;
  default:
    console.log(userMessage + "Nothing");
    break;
}
