// Define Variables :
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits =["apple", "banana", "orange"];

// Test for equality & inequality with strings;
console.log("is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple");
console.log(apple !="apple");

// Test using lowercase Function :

console.log("Is APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs Apple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");


// Numerical tests :
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// Greater Than :
console.log("\nIs ten is greter than twenty");
console.log(ten > twenty);

// Less Than :
console.log("\nIs twenty is less than ten");
console.log(twenty < ten);

// Greater Than or Equal to :
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten>=5)

// LessThan or Equal to :
console.log("\n twenty is less than or equal to 10?")
    console.log(twenty <= 10);
    

// Test using "and" & "or" operators :
//using && (and):
console.log("\n twenty is nit equal to 10 and twenty is greater than 10");
console.log(twenty !=10 && twenty > 10);

console.log(twenty != 10 && twenty > 30);

// Using || (OR) :
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is not greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Test whether an item is include in array :
console.log("\nIs orange is include in my Fruits array");
console.log(fruits.includes("orange"));

// Not include :
console.log("\nIs orange not include in my Fruits array");
console.log(!fruits.includes("orange"));



