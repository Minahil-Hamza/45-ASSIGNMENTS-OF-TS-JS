//lowerCase
var personName = "karachi";
console.log("lowercase:", personName.toLowerCase());
//lowercase
console.log("uppercase:", personName.toLocaleUpperCase());
//titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
