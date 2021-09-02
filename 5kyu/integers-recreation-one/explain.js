// Comment out your code on this file for future reference.

function listSquared(m, n) {
  let sum = 0;
  let result = [];

  // Loop through all numbers from m to n
  for (let i = m; i <= n; i++) {
    sum = 0;
    // Loop through all numbers from 1 to i
    for (let j = 1; j <= i; j++) {
      // If j is a factor of i, add the power of j to sum
      if (i % j === 0) sum += j * j;
    }
    // If the square root of TOTAL sum is an integer, add to result
    if (Math.sqrt(sum) % 1 === 0) result.push([i, sum]);
  }
  return result;
}
