// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
// function show_megician (megician : string[]){
//     megician.forEach(name => console.log(name));
// }
// let megician_name = ['Harry poter', 'Thomas', 'John']
// show_megician(megician_name)
function show_magicians(megician) {
    megician.forEach(function (name) { return console.log(name); });
}
var megicians_name = ["Harry potter", "Thomas", "Charlie"];
show_magicians(megicians_name);
