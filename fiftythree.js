const Big = require('big.js');

function factorial(n) {
  let result = new Big(1);
  for (let i = 2; i <= n; i++) {
    result = result.times(i);
  }
  return result;
}

const result = factorial(70);

console.log(result.toString());
