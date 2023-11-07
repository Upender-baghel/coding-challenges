function findLongestWord(str) {
 
    const words = str.split(' ');
    let longestWord = '';
  
    
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      
      const cleanWord = currentWord.replace(/[^a-zA-Z]+/g, '');
  
      if (cleanWord.length > longestWord.length) {
        longestWord = cleanWord;
      }
    }
  
    return longestWord;
  }
  const inputString = "My name Is Upender Baghel";
  const longestWord = findLongestWord(inputString);
  console.log(longestWord);