"use strict";
//Define a function with a rest parameter that accept items argument representing our sandwich:
function makeSAndwich(...items) {
    console.log("\nMaking a sandwich with a following items:  \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy your Sandwich");
}
//Call the functiion 3 times with 3 different number of Arguments:
makeSAndwich("Chicken", "cheese", "Mayo", "Egg");
makeSAndwich("Bread", "butter");
makeSAndwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
