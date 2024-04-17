// Creating a Array with 5 Values :
var userNames = ["Minahil", "Hamza", "Arshiya", "Admin", "Muaaz"];
// Remove all the values fron one Array now our Array is empty 
userNames = [];
// If Statement for checking Length of our Array is empty?
if (userNames.length === 0) {
    console.log("Your Array is empty we need to find some users!");
}
else {
    // If Array is not empty us forEach loop on Array :
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("hello ".concat(oneUser, ", Would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
