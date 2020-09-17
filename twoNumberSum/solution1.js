function twoNumberSum(array, targetSum) {
  for (var i = 0; i < array.length; i++) {
    var n1 = array[i];
    for (var j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      }

      var n2 = array[j];
      if (n1 + n2 === targetSum) {
        return [n1, n2];
      }
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
