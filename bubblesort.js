let masterSwapCounter = 0;

function bubbleSort(array) {
  let swapCounter = 0;
  let swapper = () => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let oldElement = array[i];
        array[i] = array[i + 1];
        array[i + 1] = oldElement;
        swapCounter++;
      }
    }
  };
  swapper(array);
  if (swapCounter === 0) {
    masterSwapCounter = 0;
    return array;
  } else {
    masterSwapCounter += swapCounter;
    return bubbleSort(array);
  }
}

// function bubbleSort(array) {
//   let swapped = false;
//   let swapper = () => {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > array[i + 1]) {
//         let oldElement = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = oldElement;
//         swapped = true;
//       }
//     }
//   };
//   swapper(array);
//   if (!swapped) {
//     return array;
//   } else {
//     return bubbleSort(array);
//   }
// }
