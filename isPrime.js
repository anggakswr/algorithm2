function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (!(num % i)) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// O(n)
