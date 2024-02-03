// 1. Problem: Word Frequency Counter

//    Create a function that takes a string as input and returns a
//    Map where keys are unique words, and values are their frequencies in the string.
function WordFrequencyCounter(str) {
  let words = str.split(" ");
  let map = new Map();
  for (let word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }
  return map;
}
console.log(WordFrequencyCounter("Ignoire the ignoRant and ignoR the igNored"));