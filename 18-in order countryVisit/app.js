"use strict";
//Making a Array of Countries & print it original order :
let countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original order:", countriesToVisit);
//print the Array in Alphabetical order without modifying the Actual Array List:
console.log("Alphabetical order:", [...countriesToVisit].sort());
// show that the array is still  in its original order :
console.log("still in original order:", countriesToVisit);
// print the Array in Reserved order without modifying the Actual Array List :
console.log("Array Reserve order:", [...countriesToVisit].reverse());
// show that the array is still in its original order :
console.log("still in original order:", countriesToVisit);
// we have changed the original Array Order Now:
console.log("Original Array Reserved:", countriesToVisit.reverse());
//print the array to show that its back to its original order:
console.log("Back to Original Order:", countriesToVisit.reverse());
// print the Array to show that its order has been changed in Alphabetical Order now:
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());
//we have changed again the original array order nowin reverse order again:
console.log("Original Array Reserved Again:", countriesToVisit.reverse());
