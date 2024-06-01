// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let favCountry =['Turkey','Dubai', 'China', 'Saudia Arabia', 'London'];
console.log("Original order:", favCountry);
//print the array in aplhabatical order woithout modifying the actual array
console.log("Alphabatical order:", [...favCountry].sort());
//show that the array is still in its original array
console.log("Still in original order:",favCountry);
//print the array in reverse order without modifying th eactual array list
console.log("Reverse order:", [...favCountry].reverse());

//show that the array is still in its original array
console.log("Still in original order:",favCountry);
//we have changed the original array order now
console.log("Original Array Reverse:", favCountry.reverse());
//print the array to show that its back to its original order
console.log('Back to original order:', favCountry.reverse());
//print the array to show that your order has been changed in Alphabatical order now
console.log('Sorted in Alphabatical order:', favCountry.sort());
//we have changed again the original array order now in reverse order again
console.log("Original Array Reversed again:", favCountry.reverse());

