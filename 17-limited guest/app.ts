//creating a guestlist Array ;

let guestsList: string[]= ["Erum" , "Hina" , "Biya" , "Aqsa", "usama"];

// Informing only two people that can be invited: 
console.log("Due to limited seats, only two people can be invited for dinner.");

// using While loop to remove guests from the array until 2 names remain:
while (guestsList.length >2){
    let removedGuest = guestsList.pop(); // Remove the last two guest from the list 
    console.log(`sorry, ${removedGuest}, You are no longer invited for Dinner,`);

}

//printing invitations to the remining two guests
console.log("Invitation to the last two Guests");
guestsList.forEach(lasttwo => console.log(`lucky  ${lasttwo}, you are still invited for the Dinner `));

// Removing the last two names from the list :
guestsList.pop();
guestsList.pop();
guestsList.pop();


// Printing the final list to confirm its empty :
console.log("Empty list:" guestsList);