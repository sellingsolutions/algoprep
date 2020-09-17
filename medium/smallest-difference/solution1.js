/*
  Smallest Difference

  Write a function that takes in two non-empty arrays of integers, finds the pair of numbers(one from each array)
  whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position

  You can assume that there will only be one pair of numbers with the smallest difference.

  ------------------------------------------------------------------------------------------------

  Space Time Complexity Analysis:
  We get O(N*log(N) + M*log(M)) time and O(1) space, why?

  1. Assuming that .sort uses quicksort, we get N*log(N) time complexity for each array
  2. We are using one loop to scan through both arrays only once, that gives us O(N) + O(M)
     where N is the length of arrayOne and M is the length of arrayTwo
  3. The logic of bumping each number closer to each other is neglible and doesn't affect the O(N) time complexity
*/

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  var tuple = [];
  var min = Infinity;
  var current = Infinity;
  var i = 0;
  var j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    var n1 = arrayOne[i];
    var n2 = arrayTwo[j];

    // Our goal is to find two numbers as close to each other as possible
    // Our general strategy is to bump the smaller number of the two, to get it closer to the bigger number
    // Every time we look at which number should be bumped closer to the other
    // we are effectively disregarding all the numbers that would push them farther apart
    // however this not a binary operation like binary search, which would disregard half the array in each operation
    // it simply allows to us to scan both arrays with one loop
    //
    // If n1 is larger than n2, that means we need to bump n2 to get it closer to n1
    if (n1 > n2) {
      current = n1 - n2;
      j++;

      // if n1 is smaller than n2, that means we need to bump n1 to get it closer to n2
    } else if (n1 < n2) {
      current = n2 - n1;
      i++;
      // If the two numbers are equal, return immediately
    } else {
      return [n1, n2];
    }
    // Store the smallest diff as we progress through the arrays
    if (current < min) {
      min = current;
      tuple = [n1, n2];
    }
  }

  return tuple;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
