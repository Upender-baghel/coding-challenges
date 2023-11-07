function sumNumbersInString(inputString) {
    
    const numbersArray = inputString.split(',').map(Number);
  
   
    const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    return sum;
  }
  
 
  const inputString = "1,2,3,4,5";
  const result = sumNumbersInString(inputString);
  console.log(result); 
  