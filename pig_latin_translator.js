var originalWords = process.argv.slice(2);
console.log("originalWords", originalWords)
var pigLatinWords = [];

for (var i = 0; i < originalWords.length; i++) {
  console.log(originalWords[i]);
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
  console.log("Word", word);
  console.log("word[0]", word[0]);
  console.log("word.slice(2, word.length)", word.slice(2, word.length));
  return word.slice(1, word.length) + word[0] + "ay";
}