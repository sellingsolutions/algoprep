// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
  // sorts the array inline
  // this makes it possible for us to use pointers
  array.sort((a, b) => a - b);

  var triplets = [];
  for (var i = 0; i < array.length - 2; i++) {
    var left = i + 1;
    var right = array.length - 1;
    // left and right pointers don't fit after i becomes > array.length - 2

    while (left < right) {
      const currSum = array[i] + array[left] + array[right];
      if (currSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        // if we found a match, we still want to keep looking
        // which is why we move both pointers since we've 'used them up'
        left++;
        right--;
      }
      // if we're too low, move the left pointer up to increase our sum
      if (currSum < targetSum) {
        left++;
      }
      // if we're too high, move the right pointer down to decrease our sum
      if (currSum > targetSum) {
        right--;
      }
    }
  }

  return triplets;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
