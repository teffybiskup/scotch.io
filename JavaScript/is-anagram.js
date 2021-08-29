/*
 * Anagrams
 * Given two strings, write an algorithm to check if they are anagrams of each other,
 * return true if they pass the test and false if they don't
 * https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/anagrams
 */

function createCharMap(text) {
  const charMap = {};

  text
    .toUpperCase()
    .split("")
    .forEach((char) => {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    });

  return charMap;
}

function isAnagram(textA, textB) {
  let result = true;

  if (textA.length === textB.length) {
    const textAMap = createCharMap(textA);
    const textBMap = createCharMap(textB);

    for (let char in textAMap) {
      if (textAMap[char] !== textBMap[char]) {
        result = false;
      }
    }
  } else {
    result = false;
  }

  console.log(result);
}

isAnagram("silent", "list"); // should return false
isAnagram("silent", "listed"); // should return false
isAnagram("silent", "listen"); // should return true
