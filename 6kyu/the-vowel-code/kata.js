/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const assert = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

function encode(string) {
  // console.log(cypher)
  console.log("string: ", string);
  let result = string
    .split("")
    .map((char) => {
      // return char
      switch (char) {
        case "a":
          return (char = 1);
        case "e":
          return (char = 2);
        case "i":
          return (char = 3);
        case "o":
          return (char = 4);
        case "u":
          return (char = 5);
        default:
          return char;
      }
    })
    .join("");
  console.log("result: ", result);

  return result;
}

function decode(string) {
  console.log("string: ", string);
  let result = string
    .split("")
    .map((char) => {
      // return char
      switch (char) {
        case "1":
          return (char = "a");
        case "2":
          return (char = "e");
        case "3":
          return (char = "i");
        case "4":
          return (char = "o");
        case "5":
          return (char = "u");
        default:
          return char;
      }
    })
    .join("");
  console.log("result: ", result);

  return result;
}

describe("Sample tests", function () {
  it("Tests", function () {
    assert.equal(encode("hello"), "h2ll4");
    assert.equal(encode("How are you today?"), "H4w 1r2 y45 t4d1y?");
    assert.equal(
      encode("This is an encoding test."),
      "Th3s 3s 1n 2nc4d3ng t2st."
    );
    assert.equal(decode("h2ll4"), "hello");
  });
});
