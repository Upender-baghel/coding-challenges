function stringToASCIIArray(str) {
    const asciiArray = [];
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      asciiArray.push(charCode);
    }
  
    return asciiArray;
  }
  
 
  const inputString = "Hello, World!";
  const asciiArray = stringToASCIIArray(inputString);
  console.log(asciiArray); 