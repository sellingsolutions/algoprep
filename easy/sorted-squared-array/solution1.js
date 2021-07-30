/*
  SORTED SQUARED ARRAY

  Write a function that takes in a non-empty array of integers that are sorted in ascending order 
  and returns a new array of the same length with the squares of the orginal integers also sorted in ascending order
*/

// Time Complexity : O(nlogn) + O(n) -> O(nlogn)
// Space Complexity : O(1)

function sortedSquaredArray(array) {
  console.log(`input ${array}`);
  for (var i=0;i<array.length;i++) {
		var number = array[i];
		array[i] = number * number;
	}
	
	console.log(`output ${array}`);
	return array.sort(function(a,b) { return a - b;});
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;