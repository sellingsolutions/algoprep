/*
	Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

	An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

	Note that empty arrays and array sof one element are monotonic

  Space Time Complexity Analysis:
	Time O(N) since we're only scanning the array once and we're not sorting
	Space O(1) since we're not allocating any new arrays
*/
function isMonotonic(array) {
  var size = array.length;
  if (size <= 2) return true;

  var decreasing = 0;
  var increasing = 0;
  var unchanged = 0;
  for (var i = 0; i < size - 1; i++) {
    if (array[i] === array[i + 1]) {
      unchanged++;
    }
    if (array[i] < array[i + 1]) {
      increasing++;
    }
    if (array[i] > array[i + 1]) {
      decreasing++;
    }
    if (increasing > 0 && decreasing > 0) {
      return false;
    }
  }

  return (
    decreasing + unchanged === size - 1 || increasing + unchanged === size - 1
  );
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
