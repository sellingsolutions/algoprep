// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
  return getSum(array, 0, 1);
}
function getSum(array, sum, depth) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    if (Array.isArray(value)) {
      depth.value++;
      sum += getSum(value, 0, depth + 1);
    } else {
      console.log(`sum = ${sum} + ${value}`);
      sum += value;
    }
  }

  console.log(`${sum} * ${depth}`);
  return sum * depth;
}

// Do not edit the line below.
exports.productSum = productSum;
