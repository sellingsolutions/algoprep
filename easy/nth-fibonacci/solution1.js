function getNthFib(n) {
  var c = 3;
  var n1 = 0;
  var n2 = 1;
  while (c <= n) {
    var nextFib = n1 + n2;
    n1 = n2;
    n2 = nextFib;
    c++;
  }

  return n > 1 ? n2 : n1;
}
function getFib(current, values, n) {
  var value = current - 1 + (current - 2);
  values[current] = value;
  current++;
  console.log(current, value, values, n);
  console.log(`current ${current} < n ${n}`);

  if (current < n) {
    getFib(current, values, n);
  }
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
