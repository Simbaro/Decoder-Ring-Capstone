// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // create arrays with letters and numbers corresponding to the correct index of each other
    // if odd return false
    // ignore spaces and add to final string
    // show both i/j in a the final string
    // create empty string to hold all new values

    let result = ''
    let messageArr = input.split(" ");
    let lettersArr = [];

    const numbers = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
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

    if (encode) {
      let message = input.toLowerCase();
      for (let i = 0; i < message.length; i++) {
        let letter = message[i];
        if (letter.match(/[a-z]/)) { // if it matches a character then execute this if
          if (letter === "i" || letter === "j") {
            result += "42"; // for i/j it adds 42
          } else {
            let num = letters.indexOf(letter);

            result += numbers[num];
          }
        } else {
          result += letter; // this maintains spaces
        }
      }
      return result;
    } else {
      for (let word of messageArr) {
        lettersArr.push(word.match(/.{2}/g));// a new array for each index is a array of number pairs that represents each letter
      }
      let isEven = messageArr.every((word) => word.length % 2 === 0); // checking for even numbers

      if (!isEven) {
        return false;
      }
      let finalArr = [];

      for (let word of lettersArr) {

        let tempArr = [];
        for (let letter of word) {
          if (letter === "42") {
            tempArr.push("(i/j)");
          } else {
            let num = numbers.indexOf(letter);
            let something = letters[num];
            tempArr.push(something);
          }
        }
        finalArr.push(tempArr);
      }

      let decodedArr = [];
      for (word of finalArr) {
        let val = word.join("");
        decodedArr.push(val);
      }
      let finalMessage = decodedArr.join(" ");
      return finalMessage;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

