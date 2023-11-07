function capitalizeWords(text) {
  
    const words = text.split(/\s+/);
  
    
    const capitalizedWords = words.map(word => {
      if (word.length === 0) {
        return word; 
      }
      const firstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    });
  
   
    const result = capitalizedWords.join(' ');
  
    return result;
  }
  

  const text = "My Name Is Upender Baghel";
  const capitalizedText = capitalizeWords(text);
  console.log(capitalizedText); 
  