// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let userName= ["Zeeshan", "Admin", 'Usman', "Ali"]
for(let i = 0; i < userName.length; i++){
    console.log(`${userName[i]}`)
}
let userNames = []
//let userNames = []
if(userNames.length === 0){
    console.log(" Your Array is Empty We need to find some users")
}
