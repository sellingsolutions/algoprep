// O(N) time | O(1) space
function isValidSubsequence(array, sequence) {
  var arrayIdx = 0;
  var seqIdx = 0;
  while (arrayIdx < array.length && seqIdx < sequence.length) {
    if (array[arrayIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrayIdx++;
  }
  return seqIdx === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
