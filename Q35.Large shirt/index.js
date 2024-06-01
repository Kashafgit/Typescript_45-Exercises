// function make_shirt(size: string = "Large", printMessage: string = "I love Typescript"){
//     console.log(`\nCreating a ${size} shirt with ${printMessage} prints on shirts`)
// }
// make_shirt();
// make_shirt("Medium");
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("creating a ".concat(size, " shirt with ").concat(printMessage, " prints on shirt"));
}
make_shirt();
make_shirt("Small", "I Love Javascript");
