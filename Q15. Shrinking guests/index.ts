// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let guestName = ['kashaf', 'Maria', 'Mehak', 'Simran', 'Dua'];
for(let i=0; i<guestName.length; i++ ){
    console.log(`Dear ${guestName[i]}: \n would you like to dinner with me? `)
}
console.log(`Unfortunately ${guestName[2]}, can't come to dinner`);
guestName[2] = "Sadia";
console.log("\n NEW LIST OF INVITATION");
for(let j=0; j < guestName.length; j++){
    console.log(`Hi ${guestName[j]}:\n Would you like to dinner with me?`)
}
console.log("\n Good news! we've found a bigger dinner table of space more the 3 peoples")
guestName.unshift("Zohra");
guestName.splice(4,0,"Faria");
guestName.push("Noor");
for(let i = 0; i< guestName.length; i++){
    console.log(`${guestName[i]}, You are invited to dinner`)
}
console.log("Unfortunately,the bigger dinner table won't arrive at the time so we can invite onnly two people")
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
while(guestName.length > 2){
     let removedGuests =guestName.pop()
     console.log(`Sorry ${removedGuests} we can't invite you to dinner`)
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for(let j=0; j < guestName.length; j++){
    
console.log(`\n${guestName[j]} You are still invite to dinner\n`)
}
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
guestName.splice(0,guestName.length);
console.log(`Empty list: ${guestName}`)







