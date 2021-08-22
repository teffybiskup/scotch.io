/*
 * Sentence Capitalization
 * Given a sentence containing two or more words, return the equivalent of the sentence when capitalized
 * https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/sentence-capitalization
 */

// Using .map() and .slice()
function capitalization(text) {
  const wordsArray = text.toLowerCase().split(" ");

  const wordsCapitalized = wordsArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });

  console.log(wordsCapitalized.join(" "));
}

// Using .forEach() method
function capitalizationUsingForEach(text) {
  const wordsArray = text.toLowerCase().split(" ");
  const wordsCapitalized = [];

  wordsArray.forEach((word) => {
    wordsCapitalized.push(word[0].toUpperCase() + word.slice(1));
  });

  console.log(wordsCapitalized.join(" "));
}

capitalization("the office"); // should return "The Office"
capitalizationUsingForEach("how i met your mother"); // should return "How I Met Your Mother"
