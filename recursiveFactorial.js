function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1

// 5*4*3*2*1
console.log(recursiveFactorial(5)); // 120
