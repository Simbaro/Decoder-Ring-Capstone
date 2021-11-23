// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // take values
    // create empty string value to add into
    // iterate through input and shift numbers
    // if space ignore and add to last string
    // should return false if 0, > 25, < -25
    let message = input.toLowerCase()
    let finalMessage = ''

    // checking if shift is there if its greater than 25 less than -25 or 0 to then return false
    if (!shift || shift > 25 || shift < -25 || shift == 0) {
      return false
    }

    if (!encode) shift *= -1


    for (let i = 0; i < message.length; i++) {
      let letter = message[i];
      // if matching a letter instead of any other value then it will execute this section
      if (letter.match(/[a-z]/)) {
        let messageCode = message.charCodeAt(i) + shift;

        if (messageCode > 122) {
          messageCode -= 26;
        }
        if (messageCode < 97) {
          messageCode += 26;
        }
        let newLetter = String.fromCharCode(messageCode);
        finalMessage += newLetter;
      } else {
        finalMessage += letter;
      }
    }
    return finalMessage
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
