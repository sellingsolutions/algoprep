/*
  Write a function that takes in an array of integers and return sthe length of the longest peak in the array

  A peak si defined as adjacent integers in the array are strictly increasing until they reach a tip (the highest value in the peak),
  at which point they become strictly decreasing. At least three integers are required to form a peak

  ----------------------------------------------------------------------------------------------------
  The trick is to understand that a peak has to have a lower number on both its left and right side
  in other words you only have to find a number that has two lower numbers as its neighbors and fan out from there
*/
function longestPeak(array) {
  if (array.length < 3) {
    return 0;
  }

  var longest = 0;
  var peak = 0;
  var i = 1;

  while (i < array.length - 1) {
    var previous = array[i - 1];
    var current = array[i];
    var next = array[i + 1];

    if (previous < current && next < current) {
      var left = i - 1;
      var right = i + 1;
      peak = 1;

      console.log(`potential peak ${array[i]}`);
      while (left >= 0) {
        if (array[left + 1] <= array[left]) break;
        peak++;
        left--;
        console.log(`left ${array[left]}`);
      }
      while (right < array.length) {
        if (array[right - 1] <= array[right]) break;
        peak++;
        right++;
        console.log(`right ${array[right]}`);
      }

      if (peak > longest) {
        longest = peak;
      }
    }

    i++;
  }

  return longest;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
