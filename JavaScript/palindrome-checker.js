/*
 * Palindromes
 * Given a string of text, return true or false indicating whether or not the text is a palindrome
 * https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/palindromes
 */

// Looping through and comparing characters
function palindromeChecker(text) {
  const lowerCasedText = text.toLowerCase();
  let result = true;

  for (let i = 0; i < text.length / 2; i++) {
    if (lowerCasedText[i] !== lowerCasedText[text.length - 1 - i]) {
      result = false;
      break;
    }
  }

  console.log(result);
}

// Intuitive approach
function intuitivePalindromeChecker(text) {
  const lowerCasedText = text.toLowerCase();
  const reversedText = lowerCasedText.split("").reverse().join("");

  console.log(lowerCasedText === reversedText);
}

palindromeChecker("Island"); // should return false

intuitivePalindromeChecker("Renner"); // should return true
intuitivePalindromeChecker("renner"); // should return true
