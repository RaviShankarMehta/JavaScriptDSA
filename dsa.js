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
const primeNoOrNotPrime = (n) => {
  if (n == 2 || n == 3) {
    console.log(`${n} is not a primeNo`);
  } else {
    for (let i = 3; i < n; i++) {
      if (n % i == 0) {
        console.log(`${n} is not a primeNo`);
        break;
      } else {
        console.log(`${n} is a primeNo`);
        break;
      }
    }
  }
};
primeNoOrNotPrime((n = 24));
