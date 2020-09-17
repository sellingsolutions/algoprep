function caesarCipherEncryptor(string, key) {
  const keyIndex = key % 26;
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const startPos = "a".charCodeAt(0);
  const endPos = "z".charCodeAt(0);
  console.log(`startPos ${startPos} endPos: ${endPos}`);
  var result = "";

  for (var i = 0; i < string.length; i++) {
    var character = string[i];
    const code = string.charCodeAt(i);

    if (code + keyIndex > endPos) {
      console.log(`${code} + ${keyIndex} > ${endPos}`);
      const pos = keyIndex - (endPos - code);
      const newChar = alphabet[pos - 1];

      console.log(
        `pos: ${pos} .. ${keyIndex} - (${endPos} - ${code}) = ${newChar}`
      );
      result += newChar;
    } else {
      console.log(`${code} + ${keyIndex} < ${endPos}`);
      const oldPos = code - startPos;
      const newPos = oldPos + keyIndex;
      const newChar = alphabet[newPos];
      result += newChar;
      console.log(
        `oldPos ${oldPos} .. newPos: ${newPos} .. ${code} - ${startPos} + ${keyIndex} = ${newChar}`
      );
    }
  }

  return result;
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
