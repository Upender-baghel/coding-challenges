let ar = [1, 2, [15, [23], [5, 12]], [100]];

console.log(sumArray(ar));

function sumArray(ar)
{
    let sum = 0;
    
    for(let el of ar)
    {
        if (Array.isArray(el))
        {
            el = sumArray(el);
        }
        
        sum += el;
    }
    
    return sum;
}