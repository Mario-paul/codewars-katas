// Refactored kata. One liners are ideal, though not necessary.
// Test your code here! Use Code Runner to execute code live on this IDE.

/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/

Math.round = (number) =>
  number - Number.parseInt(number) >= 0.5 ? Number.parseInt(number) + 1 : Number.parseInt(number);

Math.ceil = (number) =>
  Number.isInteger(number) ? number : Number.parseInt(number) + 1;

Math.floor = (number) => Number.parseInt(number);

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
