"use strict";
// Define a Function to print each magician name for an array :
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of Magician names :
let magicians_names = ["Mahnoor", "Meerub", "Danish"];
// Making a copy of original array through .slice ()function:
let copy_magician_names = magicians_names.slice();
//Modifying the copied array to include "The Great" with their names:
let copy_great_magicians = make_great(copy_magician_names);
//Show both arrays original and copied
//original:
console.log("Original Array\n");
show_magicians(magicians_names);
//copied:
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
