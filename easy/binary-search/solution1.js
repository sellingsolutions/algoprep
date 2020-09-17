function binarySearch(array, target) {
  // Write your code here.

  return find(array, target, 0, array.length - 1);
}
function find(array, target, left, right) {
  if (left > right) return -1;

  const middleIndex = ~~((left + right) / 2);
  const middleValue = array[middleIndex];
  console.log(`${middleIndex} ${middleValue}`);

  if (middleValue === target) return middleIndex;

  if (target < middleValue) return find(array, target, left, middleIndex - 1);
  else return find(array, target, middleIndex + 1, right);
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
