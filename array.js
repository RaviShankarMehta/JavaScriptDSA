// Que 1) Find Largest element in an array
// =======================================================================================================================================================================================================
const findTheLargestElementInArray = () => {
  let arr = [2, 5, 12, 2, 32, 54, 65, 22, 77];
  let largestElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
};
console.log(findTheLargestElementInArray());
