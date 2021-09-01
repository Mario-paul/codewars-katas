/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

function presses(phrase) {
  // console.log(phrase);
  phrase = phrase.toUpperCase();
  console.log("phrase:", phrase);

  let counter = 0;

  const phone = [
    ["1"],
    ["A", "B", "C", "2"],
    ["D", "E", "F", "3"],
    ["G", "H", "I", "4"],
    ["J", "K", "L", "5"],
    ["M", "N", "O", "6"],
    ["P", "Q", "R", "S", "7"],
    ["T", "U", "V", "8"],
    ["W", "X", "Y", "Z", "9"],
    ["*"],
    [" ", "0"],
    ["#"],
  ];

  phrase.split("").map((char) => {
    // console.log(char)
    phone.map((ele) => {
      if (ele.some((element) => element === char)) {
        counter += ele.findIndex((element) => element === char) + 1;
        // console.log(counter)
        // console.log(`found ${char}!`);
      }
    });
  });

  console.log(counter);
  return counter;
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(presses("LOL"), 9, "should work for simple examples");
    Test.assertEquals(
      presses("HOW R U"),
      13,
      "should work for phrases with spaces"
    );
    Test.assertEquals(
      presses("WHERE DO U WANT 2 MEET L8R"),
      47,
      "should work for phrases with numbers"
    );
  });
});
