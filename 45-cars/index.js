"use strict";
//Define a function to create a car object with optional options...
function create_Car(manufacturere, model, optional) {
    return Object.assign({ manufacturere,
        model }, optional);
}
const mycar = create_Car("Toyota", "corolla", { color: "silver", year: 2021 });
console.log(mycar);
