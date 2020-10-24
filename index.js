let sentence = prompt("What is the sentence");

function longestWord(sentence) {
  let NewSentence = sentence.split(" ");

  let m = 0;
  let IengthWord = [];

  for (i in NewSentence) {
    let word = NewSentence[i];
    let wordSize = word.length;
    if (wordSize > m) {
      m = wordSize;
      lengthWord = word;
    }
  }

  let pos = NewSentence.indexOf(lengthWord);
  return [lengthWord, pos];
}

let result = longestWord(sentence);
alert('The longest word is "' + result[0] + '"with an index of ' + result[1]);
