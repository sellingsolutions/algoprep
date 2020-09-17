// O(n^3) time | O(n) space
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      for (var k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) {
          result.push([array[i], array[j], array[k]]);
        }
      }
    }
  }

  var sortedResult = result.sort(function (a, b) {
    for (var i = 0; i < 3; i++) {
      if (a[i] !== b[i]) {
        const comparison = a[i] < b[i] ? -1 : 1;
        return comparison;
      }
    }
    return 0;
  });

  return sortedResult;
}
// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
