
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.


let friendsName = ['kashaf', 'Maria', 'Mehak', 'Rabia'];
// friendsName.forEach(friendName => console.log(`HI ${friendName}, How are you ?`));
for(let i=0; i< friendsName.length; i++){
    console.log(`Hi ${friendsName[i]} how are you?`)
}