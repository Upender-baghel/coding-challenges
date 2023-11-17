
let ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

let max = findMax(ar);
console.log("Max  = ", max);

function findMax(ar)
{
    let max = -Infinity;

    for(let i = 0; i < ar.length; i++)
    {
        let el = ar[i];

        if ( Array.isArray(el) )
        {
            el = findMax( el );
        }

        if ( el > max )
        {
            max = el;
        }
    }

    return max;
}