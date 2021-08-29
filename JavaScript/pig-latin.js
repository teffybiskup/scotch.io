/*
 * Pig Latin
 * Translate the provided string to Pig Latin by following the rules below:
 *
 * For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed
 * E.g "pig" = "igpay"
 *
 * For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed
 * E.g "glove" = "oveglay"
 *
 * For words that begin with vowel sounds, simply add "way" to the end of the word.
 * E.g "explain" = "explainway”
 *
 * https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/pig-latin
 */

function pigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;

  str = str.toLowerCase();

  if (vowels.includes(str[0])) {
    // If first letter is a vowel
    console.log(`${str}way`);
  } else {
    // If the first letter is a consonant
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelIndex = str.indexOf(char);
        break;
      }
    }

    console.log(`${str.slice(vowelIndex)}${str.slice(0, vowelIndex)}ay`);
  }
}

pigLatin("pig"); // should return 'igpay'
pigLatin("glove"); // should return 'oveglay'
pigLatin("explain"); // should return 'explainway'
