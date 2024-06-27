const arrayTraversingAndAccessing = () => {
  let arr = [2, 3, 4, 22, 5, 33, 11, 6, 99, 77];
  let n = 100;
  if (n < 0) {
    return "Please Enter Positive Number";
  } else {
    if (n > arr.length) {
      return "Please Enter Valid Number";
    } else {
      for (let i = 0; i < arr.length; i++) {
        //   console.log();
        return arr[n];
      }
    }
  }
};
console.log(arrayTraversingAndAccessing());
