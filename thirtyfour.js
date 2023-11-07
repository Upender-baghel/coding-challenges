function extractWords(text) {
    // Use a regular expression to find all words in the text
    const words = text.match(/\b\w+\b/g);
  
    // Return the array of words
    return words;
  }
  
  // Example usage:
  const text = "This is a sample text with several words.";
  const wordArray = extractWords(text);
  console.log(wordArray); // Output: ["This", "is", "a", "sample", "text", "with", "several", "words"]
  