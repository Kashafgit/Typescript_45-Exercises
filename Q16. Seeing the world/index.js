var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favCountry = ['Turkey', 'Dubai', 'China', 'Saudia Arabia', 'London'];
console.log("Original order:", favCountry);
//print the array in aplhabatical order woithout modifying the actual array
console.log("Alphabatical order:", __spreadArray([], favCountry, true).sort());
//show that the array is still in its original array
console.log("Still in original order:", favCountry);
//print the array in reverse order without modifying th eactual array list
console.log("Reverse order:", __spreadArray([], favCountry, true).reverse());
//show that the array is still in its original array
console.log("Still in original order:", favCountry);
//we have changed the original array order now
console.log("Original Array Reverse:", favCountry.reverse());
//print the array to show that its back to its original order
console.log('Back to original order:', favCountry.reverse());
//print the array to show that your order has been changed in Alphabatical order now
console.log('Sorted in Alphabatical order:', favCountry.sort());
//we have changed again the original array order now in reverse order again
console.log("Original Array Reversed again:", favCountry.reverse());
