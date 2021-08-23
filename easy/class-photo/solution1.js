// Time Complexity : O(aloga + blogb + n) -> O(n)
// where n is the number of columns in the top row
// Space Complexity : O(1) since we're not creating any new arrays

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  // return early if the first students are of equal heights
  if (redShirtHeights[0] === blueShirtHeights[0]) return false;

  var topRow =
    redShirtHeights[0] > blueShirtHeights[0]
      ? redShirtHeights
      : blueShirtHeights;
  var bottomRow =
    redShirtHeights[0] > blueShirtHeights[0]
      ? blueShirtHeights
      : redShirtHeights;

  var matches = 0;
  for (var i = 0; i < topRow.length; i++) {
    const topColumn = topRow[i];
    const bottomColumn = bottomRow[i];
    if (topColumn > bottomColumn) matches++;
  }

  return matches === redShirtHeights.length;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
