// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function show_magicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
function make_great(megicians) {
    return megicians.map(function (name) { return "The Great ".concat(name, " "); });
}
var megicians_name = ["Harry potter", "Charlie", "Thomas"];
var great_megicians = make_great(megicians_name);
show_magicians(great_megicians);
