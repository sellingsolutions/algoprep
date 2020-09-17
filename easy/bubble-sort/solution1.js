function bubbleSort(array) {
  var i = 0;
  var didSwap = true;
  while (didSwap) {
    didSwap = false;

    for (var i = 0; i < array.length; i++) {
      var n1 = array[i];
      var n2 = array[i + 1];
      if (n1 > n2) {
        array[i + 1] = n1;
        array[i] = n2;
        didSwap = true;
      }
    }
  }

  return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
