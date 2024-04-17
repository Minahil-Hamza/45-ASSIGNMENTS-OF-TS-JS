//creating a guestlist Array ;

let guestlist = [`erum` , `Hina` , `Biya` , `Aqsa`];
// Making variable for those guest who cant come ;
let dontcome = guestlist[0];

console.log(dontcome);
// Add or Remove values for Guest List Array
guestlist.splice(0,1,"Ayesha");
console.log("we have found a big table for Dinner");
//Adding a new value starting index of Array ;
guestlist.unshift("Ayesha");

// Adding a new value at ending index of Array;
guestlist.push("zarnab");

//Add one new value at middle index of Array;
let middleIndex: number = Math.floor(guestlist.length / 2);

//Adding a new guest to middle index of array
guestlist.splice(middleIndex,0, "amber");

//print message of updated list
console.log("updated list of our guest");

// sending a invitation message to our guest one by one with their name
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to Dinner with me`));


