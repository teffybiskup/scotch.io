/*
 * Finding the Longest Word In a Sentence
 * Given a sentence, return the longest word in the string
 * https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/finding-the-longest-word-in-a-sentence
 */

// Using for loop
function longestWord(text) {
  const wordArray = text.split(" ");
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length;
      result = wordArray[i];
    }
  }

  console.log(result);
}

// Using .reduce()
function longestWordUsingReduce(text) {
  const result = text.split(" ").reduce((maxLengthWord, currentWord) => {
    if (currentWord.length > maxLengthWord.length) return currentWord;
    else return maxLengthWord;
  }, "");

  console.log(result);
}

longestWord("Guinness Book of Records"); // should return 'Guinness'
longestWordUsingReduce(
  "German language likes to string words together to form new ones"
); // should return 'language'
