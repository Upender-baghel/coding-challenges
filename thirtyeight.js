function asciiArrayToString(asciiArray) {
    const charArray = asciiArray.map(charCode => String.fromCharCode(charCode));
    return charArray.join('');
  }
  
  // Example usage:
  const asciiArray = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];
  const resultString = asciiArrayToString(asciiArray);
  console.log(resultString); // Output: "Hello, World!"
  