// Creating a function with parameters which return a values in string :

function city_country(city: string, country: string ) : string{
    return `${city} , ${country}`;
}

//  Calling a function and print the return value :
city_country("Karachi", "Pakistan");
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("tokyo", "japan"));
console.log(city_country("Berlin", "Germany"));