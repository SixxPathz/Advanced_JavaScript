let height  = 5; //height in inches
let weight = 50.2056 //pounds

//convert pounds to kilograms   

let weightInKilograms = weight * 0.453592;

console.log(weight+" pounds in kilograms is: " + weightInKilograms.toFixed(2));

// convert inches to meters

let heightInMeters = height * 0.0254;

console.log(height+" inches in meters is: " + heightInMeters.toFixed(2));

// Calculate BMI

let bmi = weightInKilograms / (heightInMeters * heightInMeters) * 703;

console.log("Your BMI is: " + bmi.toFixed(2));


