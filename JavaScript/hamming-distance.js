/*
 * Hamming Distance
 * Given two strings of equal length, calculate and return the the hamming distance
 * https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/hamming-distance
 */

function hammingDistance(stringA, stringB) {
  let result = 0;

  if (stringA.length === stringB.length) {
    for (let i = 0; i < stringA.length; i++) {
      if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
        result++;
      }
    }

    console.log(result);
  } else {
    throw new Error("Strings do not have equal length");
  }
}

hammingDistance("text", "test"); // should return 1
hammingDistance("text", "tell"); // should return 2
hammingDistance("text", "told"); // should return 3
hammingDistance("text", "bold"); // should return 4
