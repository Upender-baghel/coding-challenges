function countWords(text) {
    const words = text.split(/\s+/);
  
    const nonEmptyWords = words.filter(word => word.length > 0);
  
    return nonEmptyWords.length;
  }
  
  const text = "This is a sample text with 7 words.";
  const wordCount = countWords(text);
  console.log(wordCount); 
  