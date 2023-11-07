const num1 = "123456789123456789";
const num2 = "987654321987654321";
function addStrings(num1, num2) {
    let result = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      const sum = digit1 + digit2 + carry;
  
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
  
      i--;
      j--;
    }
  
    return result;
  }
  
  
  const sum = addStrings(num1, num2);
  console.log(sum); 
  