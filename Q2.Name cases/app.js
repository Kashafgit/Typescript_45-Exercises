// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "kashaf muhammad akram ";
console.log(personName.toLowerCase());
// console.log(personName.toUpperCase())
// let step1 = personName.split(" ");
// let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
// let step3 = step2.join(" ");
// console.log(`Name in title case: ${step3}`);
var titleCaseName = personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log(titleCaseName);
