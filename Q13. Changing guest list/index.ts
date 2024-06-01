
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

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



