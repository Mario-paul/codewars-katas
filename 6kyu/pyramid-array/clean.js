// Version to be submitted to Codewars

function pyramid(n) {
  let arr = [];
  let result = [];

  for (var i = 0; i < n; i++) {
    arr.push(1);
    result.push([...arr]);
  }
  return result;
}