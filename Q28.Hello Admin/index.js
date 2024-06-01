var userNames = ["Ahmed", "Fahad", "Hamza", "Admin", "Salman"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hi ".concat(oneUser, ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(oneUser, " Thank you for loggin again"));
    }
});
