//Practice exercise 3.1
let myArray = ["Milk", "Bread", "Apples"];

myArray[1] = "Bananas";

console.log(myArray);

//Practise exercise 3.2

let shoppingList = [];

shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");

shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList);

shoppingList.pop(); //remove last item
console.log(shoppingList);

shoppingList.sort(); //sort list alphabetically
console.log(shoppingList);

console.log(shoppingList.indexOf("Milk"));
console.log(shoppingList.splice(-2, 0, "Carrots", "Lettuce"));
console.log(shoppingList);

let newList = ["Juice", "Pop"];

let newList1 = shoppingList.concat(newList.concat(newList));

console.log(newList1.lastIndexOf("Pop"));
console.log(newList1);

//Practise exercise 3.3
let originalArray = [1, 2, 3];
let modifiedArray = [originalArray, originalArray, originalArray];
console.log(modifiedArray[1][1]);

//Practise exerecise 3.4

let myCar = {
  make: "Volkwagen",
  model: "Beetle",
  year: 1969,
  color: "Red",
  drive: function () {
    console.log("Vroom!");
  },
};
let newColor = "Blue";
myCar["color"] = newColor;

newColor = "ForSale";
myCar["forSale"] = true;
console.log(myCar.make + " " + myCar.model);
console.log(myCar.forSale);
console.log(myCar);

//Practice exercise 3.5
let people = {
    friends: []
};

let friend1 = {
    firstName: "Pulane",
    lastName: "Mofokeng",
    id: 1
};

let friend2 = {
    firstName: "Njabulo",
    lastName: "Skhosana",
    id: 2
};

let friend3 = {
    firstName: "Daluxolo",
    lastName: "Dhlamini",
    id: 3
};

people.friends.push(friend1, friend2, friend3);

console.log(people);
console.log(myCar.drive);