// Que 1) Find Largest element in an array
// =======================================================================================================================================================================================================
// const findTheLargestElementInArray = () => {
//   let arr = [2, 5, 12, 2, 32, 54, 65, 22, 77];
//   let largestElement = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestElement) {
//       largestElement = arr[i];
//     }
//   }
//   return largestElement;
// };
// const findTheLargestElementInArray = () => {
//   let arr = [2, 5, 12, 2, 32, 54, 65, 22, 77];
//   let sortedArray = arr.sort((a, b) => a - b);
//   return sortedArray[sortedArray.length - 1]; // Return the last element of the sorted array
// };
// console.log(findTheLargestElementInArray());

// const findTheSecondSmallestElementInArray = () => {
//   let arr = [2, 12, 5, 32, 54, 1, 65, 22, 77];
//   let smallestElement = arr[0];
//   let secondSmallestElement = arr[1];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallestElement) {
//       secondSmallestElement = smallestElement;
//       smallestElement = arr[i];
//     } else if (arr[i] < secondSmallestElement && arr[i] != smallestElement) {
//       secondSmallestElement = arr[i];
//     }
//   }
//   return secondSmallestElement; // Return the last element of the sorted array
// };
// console.log(findTheSecondSmallestElementInArray());

// const findTheSecondLargestElementInArray = () => {
// let arr = [2, 12, 5, 32, 54, 1, 65, 22, 77];
//   let largestElement = arr[0];
//   let secondLargestElement = arr[1];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestElement) {
//       secondLargestElement = largestElement;
//       largestElement = arr[i];
//     } else if (arr[i] > secondLargestElement && arr[i] != largestElement) {
//       secondLargestElement = arr[i];
//     }
//   }
//   return secondLargestElement; // Return the last element of the sorted array
// };
// console.log(findTheSecondLargestElementInArray());

// const insertElementInArrayInAGivenPosition = () => {
//   let arr = [2, 12, 5, 32, 54, 1, 65, 22, 77];
//   let insertElement = 22;
//   let positionOfAnElement = 3;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     // return arr[i];
//     console.log(arr[i]);
//     // if (arr[i] == positionOfAnElement) {
//     //   arr.push(insertElement);
//     //   console.log(arr);
//     // }
//   }
// };
// insertElementInArrayInAGivenPosition();
// console.log(insertElementInArrayInAGivenPosition());

const findTheNthSmallestNo = () => {
  let arr = [2, 12, 5, 32, 54, 1, 65, 22, 77];
  let smallestElement = arr[0];
  let nthElement = 5;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      nthElement = smallestElement;
      smallestElement = arr[i];
    } else if (arr[i] < nthElement && arr[i] != smallestElement) {
      nthElement = arr[i];
    }
  }
  return nthElement; // Return the last element of the sorted array
};

console.log(findTheNthSmallestNo());
