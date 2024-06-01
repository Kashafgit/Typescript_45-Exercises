// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
var guestName = ['kashaf', 'Maria', 'Mehak', 'Simran', 'Dua'];
for (var i = 0; i < guestName.length; i++) {
    console.log("Dear ".concat(guestName[i], ": \n would you like to dinner with me? "));
}
console.log("Unfortunately ".concat(guestName[2], ", can't come to dinner"));
guestName[2] = "Sadia";
console.log("\n NEW LIST OF INVITATION");
for (var j = 0; j < guestName.length; j++) {
    console.log("Hi ".concat(guestName[j], ":\n Would you like to dinner with me?"));
}
console.log("\n Good news! we've found a bigger dinner table of space more the 3 peoples");
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
guestName.unshift("Zohra");
guestName.splice(4, 0, "Faria");
guestName.push("Noor");
for (var i = 0; i < guestName.length; i++) {
    console.log("".concat(guestName[i], ", You are invited to dinner"));
}
