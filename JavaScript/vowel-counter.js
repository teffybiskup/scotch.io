/*
 * Counting the Vowels in a String of Text
 * Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text
 * https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/counting-the-vowels-in-a-string-of-text
 */

// Iterative approach
function vowelCounter(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;

  text.split("").forEach((letter) => {
    if (vowels.includes(letter)) {
      counter++;
    }
  });

  console.log(counter);
}

// Using RegEx
function vowelCounterUsingRegEx(text) {
  const regex = /[aeiou]/gi;
  const vowelsFound = text.match(regex);

  console.log(vowelsFound.length || 0);
}

vowelCounter("Stefany Biskup"); // should return 4
vowelCounterUsingRegEx("Coelho"); // should return 3
