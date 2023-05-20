var MessageMixer = {

}


MessageMixer.countCharacter = function (inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
};

MessageMixer.capitalizeFirstCharacterOfWords = function (string) {
  let arr = string.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    arr[i] = word[0].toUpperCase() + word.substring(1);
  }
  return arr.join(" ");

};


MessageMixer.reverseWord = function (word) {
  return word.split("").reverse().join("");
};

MessageMixer.reverseAllWords = function (sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = MessageMixer.reverseWord(words[i]);
  }
  return words.join(" ");
};


MessageMixer.replaceFirstOccurence = function (string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


MessageMixer.replaceAllOccurrences = function (string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

MessageMixer.encode = function (string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o": "0" };
  for (let key in replacementObject) {
    string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
  }
  return string;
};

MessageMixer.polindrome = function (string) {
  return string + ' ' + MessageMixer.reverseWord(string);
}
MessageMixer.pigLatin = function (string, char) {
  return string.split(' ').join(char);
}
module.exports = MessageMixer;