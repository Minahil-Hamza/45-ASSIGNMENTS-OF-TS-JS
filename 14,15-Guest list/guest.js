"use strict";
let guest_list = [`Erum`, `Mariam`, `Hina`, `Biya`, `Aqsa`];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear` + guest_list[i] + `\n\nyou are invited for a Dinner tommorrow.\n\nThank you`);
}
let not_coming = `erum`;
let new_guest = `ayesha`;
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear` + guest_list[i] + `\n\nyou are invited for a Dinner tommorrow.\n\nThank you`);
}
console.log(`Dear ${guest_list}\n\nYou are invited for dinner tommorrow.\n\nThank You\n\n`);
console.log(`ms ${not_coming}, is not coming for dinner tommorrow,`);
