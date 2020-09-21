/*
	You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array t othe end of the array and returns the array.

	The function should perform this in place(i.e. it should mutate the input array) and doesn't need to maintain the order of the other integers

	------------------------------------------------------------------------------------------------

 	 Space Time Complexity Analysis:
   We get O(N) time and O(1) space, why?

	1.  We're not sorting the array
	2.  We're only scanning the array once O(N)
*/
function moveElementToEnd(array, toMove) {
  var i = 0;
  var dest = array.length - 1;

  while (i < dest) {
    var current = array[i];
    while (i < dest && array[dest] === toMove) dest--;

    if (current === toMove) swap(i, dest, array);

    i++;
  }
  return array;
}
function swap(i, j, array) {
  var a = array[i];
  var b = array[j];
  array[i] = b;
  array[j] = a;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
