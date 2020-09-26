/*

  Not exactly proud of this hack, can be simplified by using left and right pointers
  We know that each spiral has a width of 1 and a height of 1
  in other words, we can let i and j define the size and position of each spiral
  a bit of a divide and conquer approach, each spiral now becomes simpler to traverse
  all you have to watch out for in each spiral are the corners

  --- The stars are the corners ---
  [* . . . *]
  [. . . . .]
  [. . . . .]
  [* . . . *]
*/
function spiralTraverse(array) {
  var result = [];
  var seen = [];
  var i = 0;
  var j = 0;
  var totalSize = 0;
  for (var k = 0; k < array.length; k++) {
    totalSize += array[k].length;
  }

  while (seen.length < totalSize) {
    var value = array[i][j];
    console.log(`array[${i}][${j}] = ${value}`);
    seen.push(`[${i},${j}]`);
    result.push(value);

    var next = nextIndex(i, j, array, seen);
    if (next == -1) {
      break;
    }

    i = next[0];
    j = next[1];
  }

  return result;
}

function nextIndex(i, j, array, seen) {
  console.log(`i: ${i} j: ${j}`);
  console.log(`SEEN -> ${JSON.stringify(seen)}`);

  if (i === 0 && j === 0) {
    return [i, j + 1];
  }
  if (i < array.length - 1 && j === array[i].length - 1) {
    return [i + 1, j];
  }
  if (i === array.length - 1 && j === array[i].lenth - 1) {
    return [i, j - 1];
  }
  if (i === array.length - 1 && j === 0) {
    return [i - 1, j];
  }

  const maxX = array[i].length - 1;
  const minX = 0;
  const maxY = array.length - 1;
  const minY = 0;

  const topValue = getValue(i - 1, j, array);
  const rightValue = getValue(i, j + 1, array);
  const bottomValue = getValue(i + 1, j, array);
  const leftValue = getValue(i, j - 1, array);

  console.log(
    `left: ${leftValue} top: ${topValue} right: ${rightValue} bottom: ${bottomValue}`
  );

  var topBlocked = i === minY || !topValue || seen.includes(topValue);
  var rightBlocked = j === maxX || !rightValue || seen.includes(rightValue);
  var bottomBlocked = i === maxY || !bottomValue || seen.includes(bottomValue);
  var leftBlocked = j === minX || !leftValue || seen.includes(leftValue);

  console.log(
    `leftBlocked: ${leftBlocked} topBlocked: ${topBlocked} rightBlocked: ${rightBlocked} bottomBlocked: ${bottomBlocked}`
  );

  if (leftBlocked && topBlocked && !rightBlocked && !bottomBlocked) {
    return [i, j + 1];
  }
  if (topBlocked && rightBlocked && !bottomBlocked) {
    return [i + 1, j];
  }
  if (topBlocked && rightBlocked && bottomBlocked && !leftBlocked) {
    return [i, j - 1];
  }
  if (!topBlocked && rightBlocked && bottomBlocked && !leftBlocked) {
    return [i, j - 1];
  }
  if (!topBlocked && rightBlocked && bottomBlocked && leftBlocked) {
    return [i - 1, j];
  }
  // [B    ]
  // [X    ]
  // [X    ]
  // [B    ]
  if (!topBlocked && !rightBlocked && bottomBlocked && leftBlocked) {
    return [i - 1, j];
  }
  // [BBBB]
  // [BXXB]
  // [B  B]
  // [BBBB]
  if (leftBlocked && topBlocked && !rightBlocked && bottomBlocked) {
    return [i, j + 1];
  }

  return -1;
}

function getValue(i, j, array) {
  if (i >= 0 && i < array.length && j >= 0 && j < array[i].length) {
    return `[${i},${j}]`;
  }

  return null;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
