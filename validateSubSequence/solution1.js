// worst case: O(n^2) time | O(2N)
function isValidSubsequence(array, sequence) {
  if (sequence.length > array.length) return false;

  if (sequence.length === array.length) {
    var matches = 0;
    for (var i = 0; i < sequence.length; i++) {
      var n1 = sequence[i];
      var n2 = array[i];
      if (n1 === n2) {
        matches++;
      }
    }
    return matches === array.length;
  }

  var matches = 0;
  var seqHits = new Array(sequence.length);
  var arrayHits = new Array(array.length);

  for (var i = 0; i < sequence.length; i++) {
    var n1 = sequence[i];

    for (var j = 0; j < array.length; j++) {
      var n2 = array[j];
      if (n1 === n2 && !arrayHits[j]) {
        seqHits[i] = n1;
        arrayHits[j] = n2;
        matches++;
        break;
      }
    }
    if (!seqHits[i]) return false;
  }

  return matches === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
