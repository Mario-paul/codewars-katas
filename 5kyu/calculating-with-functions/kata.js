/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

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

function zero(param) {
  const num = 0;
  console.log(`${num} param: `, param);
  return mathLogic(param, num);
}
function one(param) {
  const num = 1;
  console.log(`${num} param: `, param);
  return mathLogic(param, num);
}
function two(param) {
  const num = 2;
  console.log(`${num} param: `, param);
  return mathLogic(param, num);
}
function three(param) {
  const num = 3;
  console.log(`${num} param: `, param);
  return mathLogic(param, num);
}
function four(param) {
  const num = 4;
  console.log(`${num} param: `, param);
  return mathLogic(param, num);
}
function five(param) {
  const num = 5;
  console.log(`${num} param: `, param);
  return mathLogic(param, num);
}
function six(param) {
  const num = 6;
  console.log(`${num} param: `, param);
  return mathLogic(param, num);
}
function seven(param) {
  const num = 7;
  console.log(`${num} param: `, param);
  return mathLogic(param, num);
}
function eight(param) {
  const num = 8;
  console.log(`${num} param: `, param);
  return mathLogic(param, num);
}
function nine(param) {
  const num = 9;
  console.log(`${num} param: `, param);
  return mathLogic(param, num);
}

function plus(param) {
  console.log("plus param: ", param);
  let result = ["plus"];
  result.push(param);
  return result;
}
function minus(param) {
  console.log("plus param: ", param);
  let result = ["minus"];
  result.push(param);
  return result;
}
function times(param) {
  console.log("times param: ", param);
  let result = ["times"];
  result.push(param);
  return result;
}
function dividedBy(param) {
  console.log("times param: ", param);
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
