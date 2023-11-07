function extractWords(text) {
   
    const words = text.match(/\b\w+\b/g);
  
    
    return words;
  }
  
  
  const text = "This is a sample text with several words.";
  const wordArray = extractWords(text);
  console.log(wordArray);
  