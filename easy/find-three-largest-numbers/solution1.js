function findThreeLargestNumbers(array) {
  let largest = [null, null, null];

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (largest[0] === null || largest[0] < value) {
      largest[2] = largest[1];
      largest[1] = largest[0];
      largest[0] = value;
    } else if (largest[1] === null || largest[1] < value) {
      largest[2] = largest[1];
      largest[1] = value;
    } else if (largest[2] === null || largest[2] < value) {
      largest[2] = value;
    }
  }

  return [largest[2], largest[1], largest[0]];
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
