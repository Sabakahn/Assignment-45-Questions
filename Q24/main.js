var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruites = ["apple", "banana", "orange"];
//Test for equality & unequality
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("Is apple is note equal to apple?");
console.log(apple != "apple");
//Test using LowerCase 
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical Tests
//Equal to
console.log("Is ten is equal to twenty?");
console.log(ten == twenty);
//not Equal to
console.log("Is ten is equal to twenty?");
console.log(ten != twenty);
//Greater than
console.log("Is ten is greater than zero?");
console.log(ten > 0);
//Less than 
console.log("Is twenty is less than 10");
console.log(twenty < 10);
//Greater than or equal to 
console.log("Is ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than or equal to 
console.log("Is twenty is less than or equal to 10?");
console.log(twenty <= 10);
//Tests using "AND" 
console.log("Is twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("Is twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//using || (OR)
console.log("Is 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 + 20);
//Test whether & item is include in array
console.log("Is orange is include in my fruits array");
console.log(fruites.includes("orange"));
console.log("Is orange is note include in my Fruits array");
console.log(!fruites.includes("orange"));
