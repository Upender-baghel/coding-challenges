let ar = [ ["John", 120],
            ["Jane", 115],
            ["Thomas", 123],
            ["Mel", 112],
            ["Charley", 122]
         ];

let numbers = extractCol(ar, 1);
console.log(numbers);

function extractCol(ar, colNo)
{
    let arCol = [];
    
    for(let i = 0; i < ar.length; i++)
    {
        arCol.push(ar[i][colNo]);
    }
    
    return arCol;
}