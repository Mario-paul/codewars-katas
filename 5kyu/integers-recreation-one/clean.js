// Version to be submitted to Codewars

function listSquared(m, n) {
  let sum = 0;
  let result = [];
  
  for (let i = m; i <= n; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        sum += j * j;
      }
    }
    if (i === 1) result.push([i, i])
    if (Math.sqrt(sum) % 2 === 0) {
      result.push([i, sum]);
    }
  }
  return result
}
