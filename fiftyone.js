let ar = getCharFrequency("Find the frequency of characters inside a string");
console.log(JSON.stringify(ar));

function getCharFrequency(text)
{
    let ar = [];

    for(let chr of text)
    {
        updateFrequency(ar, chr);
    }
    
    return ar;
}

function updateFrequency(ar, chr)
{
    for(let el of ar)
    {
        if (el.chr === chr)
        {
            el.count++;
        }
    }
    
    ar.push({ chr : chr, count : 1 });
}