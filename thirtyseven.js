function stringToASCIIArray(str) {
    const asciiArray = [];
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      asciiArray.push(charCode);
    }
  
    return asciiArray;
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  const asciiArray = stringToASCIIArray(inputString);
  console.log(asciiArray); // Output: [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]
  