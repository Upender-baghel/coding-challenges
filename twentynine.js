function prime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function fprime(n) {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
      if (prime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  }
  
  function Distances(primes) {
    const dist = [];
    for (let i = 1; i < primes.length; i++) {
      dist.push(primes[i] - primes[i - 1]);
    }
    return dist;
  }
  
  const first100 = fprime(100);
  const primeDist = Distances(first100);
  
  console.log( first100);
  console.log( primeDist);
  
    

