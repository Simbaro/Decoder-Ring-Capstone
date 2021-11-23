// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if shift is not inputted", () => {
    let input = "hello";
    let shift = undefined;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.be.false;
  });
  it("should return false if shift = 0", () => {
    let input = "hello";
    let shift = 0;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.be.false;
  });
  it("should return false if shift is greater than 25", () => {
    let input = "hello";
    let shift = 30;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.be.false;
  });
  it("should return false if shift less than -25", () => {
    let input = "hello";
    let shift = -30;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.be.false;
  });
  it("should return wklqnixo when given thinkful", () => {
    let input = "thinkful";
    let shift = 3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("should decode 'oqdqvo wcb i amkzmb umaaiom' to 'giving out a secret message'", () => {
    let input = "oqdqvo wcb i amkzmb umaaiom";
    let shift = -8;
    let actual = caesar(input, shift, (encode = true));
    let expected = "giving out a secret message";
    expect(actual).to.equal(expected);
  });
  it("should return thinkful when given wklqnixo", () => {
    let input = "wklqnixo";
    let shift = -3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("spaces and characters should be maintained", () => {
    let input = "#*!# !(*@&$) $&@^$@";
    let shift = -3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "#*!# !(*@&$) $&@^$@";
    expect(actual).to.equal(expected);
  });
  it("should decode if encode is false", () => {
    let input = "bpqa qa i amkzmb umaaiom";
    let shift = 8;
    let encode = false;
    let actual = caesar(input, shift, encode);
    let expected = "this is a secret message";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    let input1 = "A Message";
    let input2 = "a message";
    let shift = 8;
    let encode = true;
    let actual = caesar(input1, shift, encode);
    let expected = caesar(input2, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("should handle loop around alphabet if shift goes past 'z'", () => {
    let input1 = "z";
    let shift = 3;
    let encode = true;
    let actual = caesar(input1, shift, encode);
    let expected = "c";
    expect(actual).to.equal(expected);
  });
});