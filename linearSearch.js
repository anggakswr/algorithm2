function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4], 3));
console.log(linearSearch([1, 2, 3, 4], 2));
