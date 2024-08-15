let myArray= [];

let object1 = {
    name: "Apple",
    model: "Iphone 13",
    cost: 850,
    quantity: 100
}

let object2 = {
    name: "Samsung",
    model: "Galaxy S21",
    cost: 950,
    quantity: 50
}

let object3 = {
    name: "Xiaomi",
    model: "Redmi 10 Pro",
    cost: 650,
    quantity: 75
}

myArray.push(object1, object2, object3);

console.log(myArray[2].quantity);
