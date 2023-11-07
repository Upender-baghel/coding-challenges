function capitalizeWords(text) {
    // Split the text into words using a regular expression
    const words = text.split(/\s+/);
  
    // Capitalize the first letter of each word and join them back together
    const capitalizedWords = words.map(word => {
      if (word.length === 0) {
        return word; // Handle empty words, like double spaces
      }
      const firstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    });
  
    // Join the capitalized words with spaces to form the final string
    const result = capitalizedWords.join(' ');
  
    return result;
  }
  
  // Example usage:
  const text = "this is a sample text with several words.";
  const capitalizedText = capitalizeWords(text);
  console.log(capitalizedText); // Output: "This Is A Sample Text With Several Words."
  