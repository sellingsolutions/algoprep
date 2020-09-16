function twoNumberSum(array, targetSum) {
  var seen = {};
  for (var i = 0; i < array.length; i++) {
    var n1 = array[i];
    var potentialMatch = targetSum - n1;
    if (potentialMatch in seen) {
      return [n1, potentialMatch];
    } else {
      seen[n1] = true;
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
