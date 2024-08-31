function bubbleSort(arr) {
  let swapped = true;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];

        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));

// nested loops
// Big-O = O(n^2)
