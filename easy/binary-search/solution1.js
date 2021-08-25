function binarySearch(array, target) {
  console.log("array " + array);
  console.log("target " + target);

  let size = array.length;
  let pos = size / 2;
  let start = 0;
  let end = array.length;
  let checks = 0;

  // Instead of checking if we've exhausted every single index in the array
  // we should probably realize that we can just check whether the start index has exceeded the end index
  // the start index only exceeds the end index when the target doesn't exist in the array

  while (checks < array.length) {
    let index = start + pos;
    let value = array[index];

    if (target === value) {
      return index;
    } else if (target < value) {
      console.log(
        `target(${target}) < value(${value}) setting end(${end}) = pos(${pos}) index(${index})`
      );
      end = index;
    } else if (target > value) {
      console.log(
        `target(${target}) > value(${value}) setting start(${start}) = pos(${pos}) index(${index})`
      );
      start = index;
    }

    size = end - start;
    pos = Math.trunc(size / 2);
    console.log(`size(${size}) = end(${end}) - start(${start})`);
    console.log(`pos(${pos}) = size(${size}) / 2`);

    checks++;
  }

  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
