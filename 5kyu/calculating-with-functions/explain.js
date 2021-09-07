/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

// Receive array and number, calculate based on array values or
// return number if not an array
function mathLogic(arg, numero) {
  if (Array.isArray(arg)) {
    switch (arg[0]) {
      case "plus":
        return numero + arg[1];
      case "minus":
        return numero - arg[1];
      case "times":
        return numero * arg[1];
      case "dividedBy":
        return parseInt(numero / arg[1]);
    }
  } else {
    return numero;
  }
}

//receive array from operator function, then call mathLogic
// function
function zero(param) {
  const num = 0;
  return mathLogic(param, num);
}
function one(param) {
  const num = 1;
  return mathLogic(param, num);
}
function two(param) {
  const num = 2;
  return mathLogic(param, num);
}
function three(param) {
  const num = 3;
  return mathLogic(param, num);
}
function four(param) {
  const num = 4;
  return mathLogic(param, num);
}
function five(param) {
  const num = 5;
  return mathLogic(param, num);
}
function six(param) {
  const num = 6;
  return mathLogic(param, num);
}
function seven(param) {
  const num = 7;
  return mathLogic(param, num);
}
function eight(param) {
  const num = 8;
  return mathLogic(param, num);
}
function nine(param) {
  const num = 9;
  return mathLogic(param, num);
}

// create an array with math operator and number parameter inside,
// then return array
function plus(param) {
  let result = ["plus"];
  result.push(param);
  return result;
}
function minus(param) {
  let result = ["minus"];
  result.push(param);
  return result;
}
function times(param) {
  let result = ["times"];
  result.push(param);
  return result;
}
function dividedBy(param) {
  let result = ["dividedBy"];
  result.push(param);
  return result;
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(seven(times(five())), 35);
    Test.assertEquals(four(plus(nine())), 13);
    Test.assertEquals(eight(minus(three())), 5);
    Test.assertEquals(six(dividedBy(two())), 3);
  });
});
