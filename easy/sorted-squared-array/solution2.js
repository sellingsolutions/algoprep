/*
  SORTED SQUARED ARRAY

  Write a function that takes in a non-empty array of integers that are sorted in ascending order 
  and returns a new array of the same length with the squares of the orginal integers also sorted in ascending order
*/

// Time Complexity : O(n)
// Space Complexity : O(n)

function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
	
	var leftIdx = 0;
	var rightIdx = array.length - 1;
	
	for (let idx = array.length -1; idx >= 0; idx--) {
		if (Math.abs(array[leftIdx]) > Math.abs(array[rightIdx])) {
			sortedSquares[idx] = array[leftIdx] * array[leftIdx];
			leftIdx++;
		} else {
			sortedSquares[idx] = array[rightIdx] * array[rightIdx];
			rightIdx--;
		}
	}
	return sortedSquares;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
