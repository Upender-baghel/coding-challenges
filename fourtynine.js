let ar = ["Shuffle", "an", "array", "of", "strings"];

console.log(shuffleArray(ar));

function shuffleArray(ar)
{
    for(let i = ar.length - 1; i > 0; i--)
    {
        let j = randomInt(0, i - 1);
        
        let t = ar[i];
        ar[i] = ar[j];
        ar[j] = t;
    }
    
    return ar;
}

function randomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}