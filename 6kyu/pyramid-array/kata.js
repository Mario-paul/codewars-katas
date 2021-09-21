/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const assert = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

// Development file. Test your code here! Use Quokka Pro or Code Runner
// to execute code live on this IDE.

function pyramid(n) {
  // your code here
}

describe('basic tests', () => {
  it("Testing for 0", () => assert.deepEqual(pyramid(0), []));
  it("Testing for 1", () => assert.deepEqual(pyramid(1), [[1]]));
  it("Testing for 2", () => assert.deepEqual(pyramid(2), [[1], [1, 1]]));
  it("Testing for 3", () => assert.deepEqual(pyramid(3), [[1], [1, 1], [1, 1, 1]]));
});
