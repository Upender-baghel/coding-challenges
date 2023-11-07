  
const arr =[1,2,3,4,5,6]
function rotate(){ 
    const first = arr.shift()
    arr.push(first)
    return arr
}
rotate(arr);
console.log(arr)
































