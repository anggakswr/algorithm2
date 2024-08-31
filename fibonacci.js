function fibonnaci(n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

// [0,1,1,2,3,5,8]
console.log(fibonnaci(7));

// O(n)
