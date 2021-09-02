/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

// Development file. Test your code here! Use Quokka Pro or Code Runner
// to execute code live on this IDE.

function listSquared(m, n) {
  // console.log("m, n: ", m, n);

  let sum = 0;
  let result = [];

  for (let i = m; i <= n; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        // console.log(j * j);
        // console.log(j);
        sum += j * j;
      }
    }
    // if (i === 1) result.push([i, i]) // old code
    if (Math.sqrt(sum) % 1 === 0) result.push([i, sum]);
  }
  // console.log(result);
  // console.log(Math.sqrt(sum));
  return result;
}

describe("Basic tests", function () {
  Test.assertSimilar(listSquared(1, 250), [
    [1, 1],
    [42, 2500],
    [246, 84100],
  ]);
  Test.assertSimilar(listSquared(42, 250), [
    [42, 2500],
    [246, 84100],
  ]);
  Test.assertSimilar(listSquared(250, 500), [[287, 84100]]);
});
