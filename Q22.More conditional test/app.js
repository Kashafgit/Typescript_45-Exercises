"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let A = "apple";
let UppercaseApple = "APPLE";
let num1 = 10;
let num2 = 20;
let makeUp = ["lipstick", 'eyeshadow', "mascuara", "base"];
//Equality test
console.log("is A is equal to apple?");
console.log(A == "apple");
// Inequality test
console.log("\nIs A is not equal to apple?");
console.log(A != "apple");
//Lowercase test
console.log("Is APPLE is equal to apple after converting to lowercase");
console.log(UppercaseApple.toLowerCase() == "apple");
//not equal lowecase
console.log("Is APPLE is  not equal to apple after converting to lowercase");
console.log(UppercaseApple.toLowerCase() != "apple");
//numerical tests
console.log("Is num1 is equal to 10?");
console.log(num1 == num2);
console.log('Is num2 is not equal to  num2?');
console.log(num1 != num2);
//greator then
console.log("\n Is num1 is greator then zero?");
console.log(num1 > 0);
//less then
console.log("\n Is 20 is less then 10");
console.log(20 < num1);
//greator then or equal to
console.log("\n Is num2 is greator then num1?");
console.log(num2 >= 10);
//less then or equal to 
console.log("\n num2 is equal to 20");
console.log(num2 <= 10);
//Test using And && operator
console.log("\n num2 is not equal to 10 and 20 is greator then  10");
console.log(num2 != 10 && num2 > 10);
console.log("\n num2 is equal to 10 and 20 is greator then  10");
console.log(num2 != 10 && num2 < 10);
//Test using OR || operator
console.log("\n 20 is greator then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greator then 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test whether an item is include in array
console.log("\n Is lipstick include in my makeUp array?");
console.log(makeUp.includes("lipstick"));
console.log("\n Is lipstick not include in my makeUp array?");
console.log(!makeUp.includes("lipstick"));
