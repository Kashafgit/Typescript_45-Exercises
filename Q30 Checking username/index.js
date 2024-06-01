// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let currentUsers = ['Usman', 'Ali', 'Areeba', 'Osama', 'Fahad'];
// let newUsers = ['Hamza', 'Ayesha','Ali', 'Ahmed', 'Areeba']
// //loop through new users to check for usernames availability
// newUsers.forEach(one_new_user => {
//     let ourCondition = currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === one_new_user.toLowerCase())
//     if(ourCondition){
//         console.log(`Sorry ${one_new_user} is already taken`)
//     }else{
//         console.log(`This username ${one_new_user} is available`)
//     }
// }
// )
var currentUser = ["malik", "sameer", "irfan", "saqib", "nofil"];
var newUser = ["fahad", "sameer", "sams", "nofil", "mehak"];
newUser.forEach(function (oneNewUser) {
    var ourCondition = currentUser.some(function (currentOneUser) { return currentOneUser.toLowerCase() === oneNewUser.toLowerCase(); });
    if (ourCondition) {
        console.log("sorry ".concat(oneNewUser, " is already taken"));
    }
    else {
        console.log("This username ".concat(oneNewUser, " is available"));
    }
});
