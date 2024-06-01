// function city_country(city:string, country: string) : string {
//     return`\n${city}, ${country}`;
// }
// //calling a function and print the returned value
// console.log(city_country("karachi", "Pakistan"));
// console.log(city_country("Tokyo","Japan"));
// console.log(city_country("Istambul","Turkey"));
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Istambul", "Turkey"));
console.log(city_country("Tokyo", "Japan"));
