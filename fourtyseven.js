let ar1 = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let ar2 = copyArray(ar1);

console.log(ar2);

function copyArray(ar)
{
    let ar2 = [];
    
    for(let el of ar)
    {
        if (Array.isArray(el))
        {
            el = copyArray(el);
        }
        
        ar2.push(el);
    }
    
    return ar2;
}