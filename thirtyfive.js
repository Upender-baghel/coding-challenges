function csvToArray(csvText, delimiter = ',') {
    const lines = csvText.split('\n');
    const result = [];
  
    for (const line of lines) {
      const values = line.split(delimiter);
      result.push(values);
    }
  
    return result;
  }
  
  // Example usage:
  const csvText = `John,Doe,30
  Jane,Smith,25
  Bob,Johnson,40`;
  const csvArray = csvToArray(csvText);
  console.log(csvArray);
  