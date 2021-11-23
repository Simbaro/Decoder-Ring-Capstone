const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    let input = "a";
    let alphabet = "abc";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    let input = "hello world";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let expected = "rmwwl ilhwq";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    let input = "hello world";
    let alphabet = "xxyqmcgrukswaflnthdjpzibev";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should maintain spaces when decoding", () => {
    let expected = "maintaining spaces is cool";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let input = "axufjxufufg dnxymd ud yllw";
    let encode = false;
    let actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when encoding", () => {
    let input = "maintaining spaces is cool";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let expected = "axufjxufufg dnxymd ud yllw";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should ignore capitalization", () => {
    let input1 = "capitalization is a no no";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    input2 = "CapItaLizAtiOn iS A nO No";
    let actual = substitution(input1, alphabet, (encode = true));
    let expected = substitution(input2, alphabet, (encode = true));

    expect(actual).to.equal(expected);
  });
});