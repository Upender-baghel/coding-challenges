function sumNumbersInString(inputString) {
    // Split the string into an array of numbers using a comma as the delimiter
    const numbersArray = inputString.split(',').map(Number);
  
    // Use the reduce function to calculate the sum of the numbers
    const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    return sum;
  }
  
  // Example usage:
  const inputString = "1,2,3,4,5";
  const result = sumNumbersInString(inputString);
  console.log(result); // Output: 15
  