// How to maximize total speed:
// The idea is to push the highest speeds to the far ends of each array
// this means that the highest speeds of redShirtSpeeds
// gets paired with the lowest speeds of blueShirtSpeeds, and vice versa
// this guarentees that the highest speeds of both arrays will be selected

// How to minimize total speed:
// Since speed = max(a, b), the highest 'low speed' between the two arrays will win
// so all we can do is push the lowest speeds to the beginning of both arrays
// this will pair the lowest speeds of both arrays

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // highest speeds first
  redShirtSpeeds.sort((a, b) => b - a);
  // lowest speeds first
  blueShirtSpeeds.sort((a, b) => a - b);

  if (!fastest) {
    // lowest speeds first, this will make both arrays start with their lowest speeds
    redShirtSpeeds.sort((a, b) => a - b);
  }

  let sum = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    var a = redShirtSpeeds[i];
    var b = blueShirtSpeeds[i];

    sum += Math.max(a, b);
  }

  return sum;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
