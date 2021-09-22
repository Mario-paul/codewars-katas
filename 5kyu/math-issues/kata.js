/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

// Development file. Test your code here! Use Code Runner to run code
// live on this IDE.

Math.round = function (number) {
  let round = 0;
  let int = Number.parseInt(number);
  let decimal = number - int;

  if (decimal >= 0.5) round = 1;
  // console.log("integer of number: ", int);
  // console.log("decimal only: ", decimal);
  // console.log("return: ", int + round);
  // console.log(235.4-235) // returns tons of decimals, why????? stupid javascript
  return int + round;
};

Math.ceil = function (number) {
  if (Number.isInteger(number)) return number;
  else {
    let int = Number.parseInt(number);
    return int + 1;
  }
};

Math.floor = function (number) {
  let int = Number.parseInt(number);
  return int;
};

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(Math.round(2.49999), 2, "Math.round(0.4)");
    Test.assertEquals(Math.round(0.5), 1, "Math.round(0.5)");

    Test.assertEquals(Math.ceil(0.4), 1, "Math.ceil(0.4)");
    Test.assertEquals(Math.ceil(0.5), 1, "Math.ceil(0.5)");

    Test.assertEquals(Math.floor(0.4), 0, "Math.floor(0.4)");
    Test.assertEquals(Math.floor(0.5), 0, "Math.floor(0.5)");
  });
});
