/*
 * String Reversal
 * Given a string of text, write an algorithm that returns the text received in a reversed format
 * https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/string-reversal
 */

// Chaining in-built methods
function reverseString(text) {
  console.log(text.split("").reverse().join(""));
}

// Using .reduce()
function reverseStringUsingReduce(text) {
  console.log([...text].reduce((acc, char) => char + acc, ""));
}

reverseString("Stefany"); // should return "ynafetS"
reverseStringUsingReduce("Biskup"); // should return "puksiB"
