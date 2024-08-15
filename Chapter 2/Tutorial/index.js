//Declaring Variables
let firstname = "Maria";
firstname = "John";
console.log(firstname); //Output is John

let nr1 = 12; // let has block scope and can be assigned a different value later
var nr2 = 8; // var has global scope and can be assigned a different value later
const PI = 3.14159; //The value stays the same

//Premitive Data types
//String

let singleString = "Hi there";
let doubleString = "How are you?";

let language = "JavaScript";
let message = `let's learn ${language}`;
console.log(message);

//Escape Characters
let str = 'Hello what\'s your name? Is it "Mike"?';
console.log(str);
let str2 = 'Hello what\'s your name? Is it "Mike"?';
console.log(str2);

let str3 = "New \nline";
let str4 = "I'm containing a backslash \\!";

console.log(str3);
console.log(str4);

//Number
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; //decimal version would be 8
let hexNr = 0x3e8; //decimal version would be 1000
let binNr = 0b101; //decimal version would be 5

//BigInt
let bigNr = 90071992547409920n; //it a big number

//Boolean
let bool1 = false;
let bool2 = true;

let objectIsDeleted = false;
let lightIsOn = true;

//Symbols
let str5 = "JavaScript is fun!";
let str6 = "JavaScript is fun!";
console.log("These two strings are the same:", str5 === str6); //true
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2); //false

//Undefined
let unassigned;
console.log("unassigned");
//You can purporsfully assign an undefined value
let terribleThingToDo = undefined;

//Null
let empty = null; //null is a special value for saying that a variable is empty or has an unknown value

let terribleThingToDo1 = undefined;
let lastName;
console.log("Same undefined:", lastName === terribleThingToDo1); //True
let betterOption = null;
console.log("Same null:", lastName === betterOption); //False

//Working out the type of a variable
let str1 = "Hello";
let nr = 7;
let bigNr1 = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;
console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);

//Converting data types
let nr6 = 2;
let nr7 = "2";
console.log(nr6 * nr7); //Javascript will convert the string to a number and return 4

let nr8 = 2;
let nr9 = "2";
console.log(nr8 + nr9); //Javascript will concatenate the 2 variables and return 22

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr); // String() method will convert the 6 into a number

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr); // Number() method will convert the String to a number

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool); //Boolean() method will convert the string to boolean and return true

//These come in handy when you need to convert a string to 0 when its empty or null
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr1 = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);

//Will evaluate to not a number
let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2); //retrurns true

let strToBool1 = "";
strToBool1 = Boolean(strToBool1);
console.log(strToBool1, typeof strToBool1); // returns false

//Practice Exercise 2.1
let str10 = "Laurence";
console.log(str10, typeof str10);
let str11 = "Svekis";
console.log(str11, typeof str11);
let val1 = undefined;
console.log(val1, typeof val1);
let val2 = null;
console.log(val2, typeof val2);
let myNum = 1000;
console.log(myNum, typeof myNum);

//Operators
//Addition
let nr12 = 12;
let nr13 = 14;
let result1 = nr12 + nr13;
console.log(result1);

let str14 = "Hello ";
let str15 = "addition";
let result2 = str14 + str15;

//Exercise 2.2
let myName = "Sandile";
let myAge = 24;
let canCode = true;

console.log(
  "My name is " +
    myName +
    " and myAge is " +
    myAge +
    " and I can code JavasScript:\n" +
    canCode
);

//Subtraction
let nr20 = 20;
let nr21 = 4;
let str17 = "Hi";
let nr22 = 3;
let result3 = nr20 - nr21;
let result4 = str17 - nr22;
console.log(result3, result4);

//Multiplication
let nr23 = 15;
let nr24 = 10;
let str18 = "Hi";
let nr25 = 3;
let result5 = nr23 * nr24;
let result6 = str1 * nr25;
console.log(result5, result6);

//Division
let nr26 = 30;
let nr27 = 5;
let result7 = nr26 / nr27;
console.log(result7);

//Exponentiation
let nr28 = 2;
let nr29 = 3;
let result8 = nr28 ** nr29;
console.log(result8);

let nr30 = 10;
let nr31 = 3;
let result9 = nr30 % nr31;
console.log(`${nr30} % ${nr31} = ${result9}`);

let nr32 = 8;
let nr33 = 2;
let result10 = nr32 % nr33;
console.log(`${nr32} % ${nr33} = ${result10}`);

let nr34 = 15;
let nr35 = 4;
let result11 = nr34 % nr35;
console.log(`${nr34} % ${nr35} = ${result11}`);

//Unary operators: increment and decrement
let nr36 = 4;
nr36++;
console.log(nr36);

let nr37 = 4;
nr37--;
console.log(nr37);

//postfix
let nr38 = 2;
console.log(nr38++);
console.log(nr38);

//prefix
let nr39 = 2;
console.log(++nr39);
/*

//Exercise 2.3
let a = prompt("For one side of the triangle: ");
let b = prompt("For the other side of the triangle: ");

let c = Math.sqrt(a ** 2 + b ** 2);

console.log("The length of the third side of the triangle is: " + c);
*/

//Practise Exercise 2.4

let a1 = 17;
let b1 = 38;
console.log(a1 + b1);

let c1 = 5;

console.log(a1 / c1);


//Comparison operators
let x = 5;
let y = "5";
console.log(x == y);//true--loose equality

let x2 = 5;
let y2 = "5";
console.log(x2 === y2);//false


//Not equal

let x3 = 5;
let y3 = 6;
console.log(y3 > x3);//true
console.log(y3 >= y3);//checks if greater than or equal
console.log(x3 > y3); //false
console.log(y3 > y3);//false
console.log(y3 < x3);


let x4 = 1;
let y4= 2;
let z = 3;

console.log(x4 < y4 && y4 < z);//true


console.log(x4 > y4 && y4 < z);//false

//OR
console.log(x4 > y4 || y4 < z);//TRUE
console.log(x4 > y4 || y4 > z);//FALSE

//NOT
let x5 = false;
console.log(!x5);//TRUE

let x6 = 1;
let y6 = 2;
console.log(!(x6 < y6));//FALSE


