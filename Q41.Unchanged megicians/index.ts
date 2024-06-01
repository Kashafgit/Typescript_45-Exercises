
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_grewq at() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

function show_megician(megicians: string[]){
    megicians.forEach(name => console.log(name));
}
function make_great(megicians: string[]){
   return  megicians.map(name => `The Great megician ${name}`)
}
let megician_name = ['Harry', 'John', 'Thomas'];
let copy_megicians_name = megician_name.slice()

let copy = make_great(copy_megicians_name);

show_megician(megician_name);
show_megician(copy);
