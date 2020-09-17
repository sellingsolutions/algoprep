function selectionSort(array) {
  var currentMinIndex = null;
  var currentMinValue = null;

  for (var i = 0; i < array.length; i++) {
    var n1 = array[i];
    currentMinIndex = i;
    currentMinValue = n1;

    for (var j = i + 1; j < array.length; j++) {
      var n2 = array[j];
      if (n2 < currentMinValue) {
        currentMinIndex = j;
        currentMinValue = n2;
      }
    }

    swap(i, currentMinIndex, array);
  }

  return array;
}
function swap(n1, n2, array) {
  var a = array[n1];
  var b = array[n2];
  array[n1] = b;
  array[n2] = a;
}
// Do not edit the line below.
exports.selectionSort = selectionSort;
