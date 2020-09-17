function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    for (var j = i; j > 0; j--) {
      var n1 = array[j];
      var n2 = array[j - 1];

      if (n1 < n2) {
        swap(j, j - 1, array);
      } else {
        break;
      }
    }
  }

  return array;
}

function findTargetIndex(n1, array, cursor) {
  var index = null;
  for (var i = cursor; i >= 0; i--) {
    var n2 = array[i];
    if (n1 < n2) {
      index = i;
    }
  }

  return index;
}

function swap(i, j, array) {
  var a = array[i];
  var b = array[j];
  array[j] = a;
  array[i] = b;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
