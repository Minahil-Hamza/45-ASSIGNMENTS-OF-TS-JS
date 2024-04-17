// Define a Function to print each magician name for an array :

function show_magicians(magicians: string[]){
    magicians.forEach(name=> console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of Magician names :
let magicians_names = ["Mahnoor", "Meerub", "Danish"];

let great_magicians = make_great(magicians_names);
console.log(great_magicians);

//  Call show_magicins that show modified list of magicians: 
show_magicians(great_magicians);
    
    
