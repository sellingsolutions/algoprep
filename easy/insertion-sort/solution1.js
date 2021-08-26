function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0) {
      if (current < array[j]) {
        let moveRight = array[j];
        let moveLeft = array[j + 1];
        array[j] = moveLeft;
        array[j + 1] = moveRight;
      }
      j--;
    }
  }

  return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
