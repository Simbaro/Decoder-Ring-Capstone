// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // check repeating letters if so then return false
    // create empty string value to place letters in
    // return false should return false if > 25, < -25
    // ignore spaces but place in final string
    // must be exactly 26 characters for alphabet
    // 


    let result = "";
    let message = input.toLowerCase();

    let doesRepeat = /(.).*\1/.test(alphabet);
    if (doesRepeat) return false; //returns false if any characters in alphabet repeat
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false;
    const alphabetList = alphabet.split("");
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    function translate(libraryA, libraryB) {
      for (let i = 0; i < message.length; i++) {
        let letter = message[i];
        if (letter.match(/[^ ]/)) {// matches the letter if it is anything other than a space

          let num = libraryA.indexOf(letter);
          result += libraryB[num];
        } else {
          result += letter; // this maintains spaces through the message
        }
      }
      return result;
    }

    if (encode) {
      let finalMessage = translate(letters, alphabetList);
      return finalMessage;
    } else {
      let finalMessage = translate(alphabetList, letters);
      return finalMessage;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };