// Que 1) positive of negative number
// =======================================================================================================================================================================================================
// const findPositiveOrNegativeNo = (n) => {
//   if (n > 0) {
//     console.log(`${n} is positive No`);
//   } else if (n < 0) {
//     console.log(`${n} is negative No`);
//   } else {
//     console.log(`${n} is zero`);
//   }
// };
// findPositiveOrNegativeNo(0);

// Que 2) Even or Odd ?
// =======================================================================================================================================================================================================
// const findEvenOrOddNo = (n) => {
//   if (n % 2 == 0) {
//     console.log(`${n} is even No`);
//   } else {
//     console.log(`${n} is odd No`);
//   }
// };
// findEvenOrOddNo(12345);

// Que 3) Sum of First N Natural numbers?
// =======================================================================================================================================================================================================
// const sumOfNNaturalNo = (n) => {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i;
//   }
//   console.log(result);
// };
// sumOfNNaturalNo(4);

// Que 3)Sum of numbers in a given range?
// =======================================================================================================================================================================================================
// const sumOfNoInAGivenRang = (n, m) => {
//   let result = 0;
//   for (let i = n; i <= m; i++) {
//     result += i;
//   }
//   console.log(result);
// };
// sumOfNoInAGivenRang((n = 2), (m = 8));

// Que 4)Greatest of two numbers?
// =======================================================================================================================================================================================================
// const greatestOfTwoNo = (n, m) => {
//   if (n > m) {
//     console.log(`${n} is the Greatest No`);
//   } else {
//     console.log(`${m} is the Greatest No`);
//   }
// };
// greatestOfTwoNo((n = 2), (m = 8));

// Que 5)Greatest of three numbers?
// =======================================================================================================================================================================================================
// const greatestOfThreeNo = (n, m, o) => {
//   if (n > m && n > o) {
//     console.log(`${n} is the Greatest No`);
//   } else if (m > n && m > o) {
//     console.log(`${m} is the Greatest No`);
//   } else {
//     console.log(`${o} is the Greatest No`);
//   }
// };
// greatestOfThreeNo((n = 2114441), (m = 3222225), (o = 12224));

// Que 6) Leap year or not
// =======================================================================================================================================================================================================
// const leapYearOrNot = (n) => {
//   if (n % 4 == 0) {
//     console.log(`${n} is a leap`);
//   } else {
//     console.log(`${n} is not a leap`);
//   }
// };
// leapYearOrNot((n = 2024));

// Que 7) Prime number:
// =======================================================================================================================================================================================================
// const primeNoOrNotPrime = (n) => {
// if (n == 2 || n == 3) {
//   console.log(`${n} is a primeNo`);
// } else {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) {
//       console.log(`${n} is not a primeNo`);
//       return;
//     }
//   }
//   console.log(`${n} is a primeNo`);
// }
// };
// primeNoOrNotPrime((n = 7));
// Que 7) Prime number:
// =======================================================================================================================================================================================================
// const primeNoOrNotPrime = (n) => {
//   var i;
//   var isPrime = true;
//   if (n < 2) {
//     var isPrime = false;
//   } else {
//     for (var i = 2; i < n; i++) {
//       if (n % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   }
//   let result = isPrime ? `${n} is a Prime` : `${n} is not a Prime`;
//   console.log(result);
// };
// primeNoOrNotPrime((n = 7));
// Que 8) Prime number within a given range:
// =======================================================================================================================================================================================================
// const primeNumberWithInAGivenRange = (n, m) => {
//   if (n == 2 && m == 3) {
//     console.log(`${n} is a primeNo`);
//     console.log(`${m} is a primeNo`);
//   } else {
//     if (n == 2) {
//       console.log(`${n} is a primeNo`);
//     }
//     for (let i = 3; i <= m; i++) {
//       console.log(i);
//       if (i % i == 0) {
//         console.log(`${i} is not a primeNo`);
//         break;
//       } else {
//         console.log(`${n} is a primeNo`);
//         break;
//       }
//     }
//   }
// };
// primeNumberWithInAGivenRange((n = 2), (m = 10));

// Sum of Digit of a number
// ====================================================================================================
// const sumOfDigitOfANumber = (n) => {
//   let m = n.toString();
//   let sum = 0;
//   for (let i = 0; i < m.length; i++) {
//     sum += parseInt(m[i]);
//   }
//   console.log(sum);
// };
// sumOfDigitOfANumber((n = 1234));

// // Reverse of a number
// // ====================================================================================================
// const reverseOfNumber = (n) => {
//   let m = n.toString();
//   let revNum = "";
// for (let i = m.length - 1; i >= 0; i--) {
//   revNum = revNum + m[i];
// }
//   console.log(revNum);
// };

// reverseOfNumber((n = 23164));

// // Palindrome number
// // ====================================================================================================
const palindromeNumber = (n) => {
  let tempNum = n.toString();
  let j = tempNum.length - 1;
  for (let i = 0; i < tempNum.length / 2; i++) {
    console.log(tempNum[i]);
    if (tempNum[i] != tempNum[j]) {
      console.log(`The given no ${n} in not a palindrome Number`);
      return false;
    }
    j--;
  }
  console.log(`The given no ${n} in a palindrome Number`);
  return true;
};
palindromeNumber((n = 1234464321));
