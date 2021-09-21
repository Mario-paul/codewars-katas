// Comment out your code on this file for future reference.

function pyramid(n) {
  let arr = [];
  let result = [];

  for (var i = 0; i < n; i++) {
    arr.push(1);
    result.push([...arr]); // ... operator makes a new arr each time you push. otherwise it would reference the now modified arr each time
  }
  return result;
}
