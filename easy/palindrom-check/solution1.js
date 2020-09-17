function isPalindrome(string) {
  var i = 0;
  for (var j = string.length - 1; j >= 0; j--) {
    var n1 = string[i];
    var n2 = string[j];
    if (n1 !== n2) {
      return false;
    }

    i++;
  }
  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
