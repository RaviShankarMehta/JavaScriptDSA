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

// Que 3)Greatest of two numbers?
// =======================================================================================================================================================================================================
const greatestOfTwoNo = (n, m) => {
  if (n > m) {
    console.log(`${n} is the Greatest No`);
  } else {
    console.log(`${m} is the Greatest No`);
  }
};
greatestOfTwoNo((n = 2), (m = 8));
