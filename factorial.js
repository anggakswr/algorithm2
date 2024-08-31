function factorial(n) {
  let current = n;

  for (let i = 2; i < n; i++) {
    current *= i;
  }

  return current;
}

// 4*3*2*1
console.log(factorial(4));

// O(n)
