/*
 * Finding the Most Recurring Character
 * Given a string of text, find and return the most recurring character
 * https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/finding-the-most-recurring-character
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

// Forming arrays from the character map
function maxRecurringChar(text) {
  const charMap = createCharMap(text);
  let charArray = [];
  let valuesArray = [];
  let maxCharValue = 0;
  let maxChar = "";

  charArray = Object.keys(charMap);
  valuesArray = Object.values(charMap);
  maxCharValue = Math.max(...valuesArray);
  maxChar = charArray[valuesArray.indexOf(maxCharValue)];

  console.log(
    `Most recurring character: ${maxChar} - ${maxCharValue} occurrences.`
  );
}

// For...in iteration
function maxRecurringCharUsingForIn(text) {
  const charMap = createCharMap(text);
  let maxCharValue = 0;
  let maxChar = "";

  Object.keys(charMap).forEach((char) => {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char];
      maxChar = char;
    }
  });

  console.log(
    `Most recurring character: ${maxChar} - ${maxCharValue} occurrences.`
  );
}

maxRecurringChar("Hello World"); // should return 'Most recurring character: L - 3 occurrences.'
maxRecurringCharUsingForIn("Quebec City"); // should return 'Most recurring character: E - 2 occurrences.'
