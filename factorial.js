
function extraLongFactorials(n) {
  // Write your code here
  let number = BigInt(n)
  let multiple = BigInt(1)
  for (let i = multiple; i <= number; i++) {
    multiple *= i
  }
  return String(multiple)

}

console.log(extraLongFactorials(45))


// function extraLongFactorials(n) {

//   var bigInt = BigInt(n);
//   var factorial = 1n;

//   for (let i = 0n; i < bigInt ; i++) {
//       factorial *= bigInt - i;
//   }

//   console.log(factorial.toString());
// }
// console.log(extraLongFactorials(25))