function findThreeLargestNumbers(array) {
  var numbers = array;
  var result = [0, 0, 0];
  var hits = {};
  var indices = {};

  for (var i = 2; i >= 0; i--) {
    var match = findLargest(array, indices);
    indices[match.index] = true;
    result[i] = match.value;
    console.log(match);
  }

  console.log(result);
  return result;
}
function findLargest(array, avoid) {
  var max = -1000000;
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max && !avoid[i]) {
      max = array[i];
      index = i;
    }
  }
  return {
    value: max,
    index: index,
  };
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
