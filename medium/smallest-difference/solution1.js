// Time Complexity O(nlog(n) + mlog(m)) : Space Complexity O(1)
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
