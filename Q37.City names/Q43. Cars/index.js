// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
// function create_car(manufacturer, model1, ...options){
//     let car={
//         manufacturer: manufacturer,
//         model1: model1
//     };
//     options.forEach(option => {
//         let [key, value] = option.split(":");
//         car [key.trim()] = value.trim();
//     });
//     return car;
// }
// let myCar = create_car("Toyota", "corolla", "color: black", "Sunroof: True");
// console.log(myCar);
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var myCar = create_car("Toyota", "Corolla", "color: black", "sunroof: true");
console.log(myCar);
