myArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]


function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - i - 1; j++) {

      if (arr[j] > arr[j + 1]) {

        let temp = arr[j + 1];

        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return(myArray);
}

console.log(bubbleSort(myArray));