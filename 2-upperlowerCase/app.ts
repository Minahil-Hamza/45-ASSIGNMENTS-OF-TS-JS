//lowerCase
let personName: string = "karachi"
console.log("lowercase:", personName.toLowerCase());

//lowercase
console.log("uppercase:", personName.toLocaleUpperCase())

//titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));